create extension if not exists pgcrypto;

create type public.member_role as enum ('owner', 'editor', 'viewer');
create type public.event_type as enum ('flight', 'lodging', 'park', 'meal', 'nap', 'attraction', 'travel', 'family', 'activity', 'note');
create type public.plan_status as enum ('idea', 'planned', 'needs_booking', 'booked', 'confirmed', 'cancelled');
create type public.conflict_status as enum ('open', 'resolved', 'overridden', 'dismissed');
create type public.conflict_severity as enum ('info', 'warning', 'blocking');
create type public.pass_type as enum ('multi', 'single', 'none');
create type public.selection_state as enum ('wish', 'initial', 'after_redemption', 'confirmed', 'removed');
create type public.dining_credit_type as enum ('quick_service', 'table_service', 'snack');

create function public.set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = timezone('utc', now()); new.version = old.version + 1; return new; end $$;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null check (char_length(trim(display_name)) > 0), avatar_url text,
  timezone text not null default 'America/New_York', created_at timestamptz not null default now(), updated_at timestamptz not null default now(), version integer not null default 1
);
create table public.trips (
  id uuid primary key default gen_random_uuid(), owner_id uuid not null references public.profiles(id), name text not null check (char_length(trim(name)) > 0), timezone text not null,
  start_date date not null, end_date date not null, status public.plan_status not null default 'planned', last_rules_checked_at timestamptz, source_import_id uuid,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), version integer not null default 1, check (end_date >= start_date)
);
create table public.trip_members (trip_id uuid not null references public.trips(id) on delete cascade, user_id uuid not null references public.profiles(id) on delete cascade, role public.member_role not null, joined_at timestamptz not null default now(), primary key (trip_id, user_id));
create table public.party_members (
  id uuid primary key default gen_random_uuid(), trip_id uuid not null references public.trips(id) on delete cascade, display_name text not null check(char_length(trim(display_name)) > 0),
  category text not null check(category in ('adult','child','infant','guest')), age_at_trip smallint check(age_at_trip >= 0), height_inches numeric(4,1) check(height_inches >= 0), included_in_dining_plan boolean not null default false, notes text, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), version integer not null default 1
);
create table public.stays (
  id uuid primary key default gen_random_uuid(), trip_id uuid not null references public.trips(id) on delete cascade, name text not null, source_text text, stay_type text not null, room_type text, check_in_date date not null, check_out_date date not null, room_ready_time time, status public.plan_status not null default 'planned', subgroup_label text, metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), version integer not null default 1, check(check_out_date > check_in_date)
);
create table public.days (
  id uuid primary key default gen_random_uuid(), trip_id uuid not null references public.trips(id) on delete cascade, date date not null, title text not null, location_label text, notes text, sort_order integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), version integer not null default 1, unique(trip_id, date)
);
create table public.events (
  id uuid primary key default gen_random_uuid(), day_id uuid not null references public.days(id) on delete cascade, type public.event_type not null, title text not null, start_at timestamptz, end_at timestamptz, all_day boolean not null default false,
  status public.plan_status not null default 'planned', booking_status public.plan_status, location text, notes text, sort_order numeric(12,4) not null default 0, visibility text not null default 'trip' check(visibility in ('trip','owner_editors')), source_row text, metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now(), version integer not null default 1, check(end_at is null or start_at is null or end_at > start_at)
);
create index trip_members_user_idx on public.trip_members(user_id, trip_id);
create index days_trip_date_idx on public.days(trip_id, date);
create index events_day_order_idx on public.events(day_id, sort_order);
create index events_booking_idx on public.events(day_id, booking_status) where booking_status in ('needs_booking','planned');

create trigger profiles_updated_at before update on public.profiles for each row execute function public.set_updated_at();
create trigger trips_updated_at before update on public.trips for each row execute function public.set_updated_at();
create trigger party_members_updated_at before update on public.party_members for each row execute function public.set_updated_at();
create trigger stays_updated_at before update on public.stays for each row execute function public.set_updated_at();
create trigger days_updated_at before update on public.days for each row execute function public.set_updated_at();
create trigger events_updated_at before update on public.events for each row execute function public.set_updated_at();
