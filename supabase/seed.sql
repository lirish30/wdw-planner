-- Local-only minimal fixture; production trips are imported through authenticated flows.
insert into auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at)
values ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'owner@example.test', '', now(), '{"provider":"email","providers":["email"]}', '{}', now(), now()) on conflict (id) do nothing;
insert into public.profiles (id, display_name) values ('00000000-0000-0000-0000-000000000001', 'Local owner') on conflict (id) do nothing;
insert into public.trips (id, owner_id, name, timezone, start_date, end_date, status) values ('00000000-0000-0000-0000-000000000100', '00000000-0000-0000-0000-000000000001', 'Orlando + Walt Disney World 2026', 'America/New_York', '2026-09-16', '2026-09-26', 'planned') on conflict (id) do nothing;
insert into public.trip_members (trip_id, user_id, role) values ('00000000-0000-0000-0000-000000000100', '00000000-0000-0000-0000-000000000001', 'owner') on conflict do nothing;
