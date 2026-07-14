create function public.trip_role(target_trip_id uuid) returns public.member_role language sql stable security definer set search_path = public as $$ select role from public.trip_members where trip_id = target_trip_id and user_id = auth.uid() $$;
create function public.can_read_trip(target_trip_id uuid) returns boolean language sql stable security definer set search_path = public as $$ select public.trip_role(target_trip_id) is not null $$;
create function public.can_edit_trip(target_trip_id uuid) returns boolean language sql stable security definer set search_path = public as $$ select public.trip_role(target_trip_id) in ('owner','editor') $$;
create function public.is_trip_owner(target_trip_id uuid) returns boolean language sql stable security definer set search_path = public as $$ select public.trip_role(target_trip_id) = 'owner' $$;
create function public.prevent_removing_sole_owner() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if old.role = 'owner' and (tg_op = 'DELETE' or new.role <> 'owner') and not exists (select 1 from public.trip_members where trip_id = old.trip_id and user_id <> old.user_id and role = 'owner') then
    raise exception 'A trip must retain at least one owner';
  end if;
  return case when tg_op = 'DELETE' then old else new end;
end $$;

alter table public.profiles enable row level security;
alter table public.trips enable row level security;
alter table public.trip_members enable row level security;
alter table public.party_members enable row level security;
alter table public.stays enable row level security;
alter table public.days enable row level security;
alter table public.events enable row level security;

create policy "profiles read own" on public.profiles for select using (id = auth.uid());
create policy "profiles insert own" on public.profiles for insert with check (id = auth.uid());
create policy "profiles update own" on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());
create policy "trips members read" on public.trips for select using (public.can_read_trip(id));
create policy "trips owner insert" on public.trips for insert with check (owner_id = auth.uid());
create policy "trips owner update" on public.trips for update using (public.is_trip_owner(id)) with check (owner_id = auth.uid());
create policy "trips owner delete" on public.trips for delete using (public.is_trip_owner(id));
create policy "members read trip" on public.trip_members for select using (public.can_read_trip(trip_id));
create policy "members owner insert" on public.trip_members for insert with check (public.is_trip_owner(trip_id) or (role = 'owner' and user_id = auth.uid() and exists (select 1 from public.trips where id = trip_id and owner_id = auth.uid())));
create policy "members owner update" on public.trip_members for update using (public.is_trip_owner(trip_id)) with check (public.is_trip_owner(trip_id));
create policy "members owner delete" on public.trip_members for delete using (public.is_trip_owner(trip_id) and not (role = 'owner' and user_id = auth.uid()));
create policy "party members read" on public.party_members for select using (public.can_read_trip(trip_id));
create policy "party members edit" on public.party_members for all using (public.can_edit_trip(trip_id)) with check (public.can_edit_trip(trip_id));
create policy "stays read" on public.stays for select using (public.can_read_trip(trip_id));
create policy "stays edit" on public.stays for all using (public.can_edit_trip(trip_id)) with check (public.can_edit_trip(trip_id));
create policy "days read" on public.days for select using (public.can_read_trip(trip_id));
create policy "days edit" on public.days for all using (public.can_edit_trip(trip_id)) with check (public.can_edit_trip(trip_id));
create policy "events read scoped" on public.events for select using (public.can_read_trip((select trip_id from public.days where id = day_id)) and (visibility = 'trip' or public.can_edit_trip((select trip_id from public.days where id = day_id))));
create policy "events edit" on public.events for all using (public.can_edit_trip((select trip_id from public.days where id = day_id))) with check (public.can_edit_trip((select trip_id from public.days where id = day_id)));
create trigger trip_members_retain_owner before update or delete on public.trip_members for each row execute function public.prevent_removing_sole_owner();
