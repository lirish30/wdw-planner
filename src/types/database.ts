export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          display_name: string;
          avatar_url: string | null;
          timezone: string;
          created_at: string;
          updated_at: string;
          version: number;
        };
        Insert: { id: string; display_name: string; avatar_url?: string | null; timezone?: string };
        Update: Partial<{
          display_name: string;
          avatar_url: string | null;
          timezone: string;
          version: number;
        }>;
      };
      trips: {
        Row: {
          id: string;
          owner_id: string;
          name: string;
          timezone: string;
          start_date: string;
          end_date: string;
          status: Database["public"]["Enums"]["plan_status"];
          last_rules_checked_at: string | null;
          source_import_id: string | null;
          created_at: string;
          updated_at: string;
          version: number;
        };
        Insert: {
          id?: string;
          owner_id: string;
          name: string;
          timezone: string;
          start_date: string;
          end_date: string;
          status?: Database["public"]["Enums"]["plan_status"];
        };
        Update: Partial<Database["public"]["Tables"]["trips"]["Insert"]>;
      };
      trip_members: {
        Row: {
          trip_id: string;
          user_id: string;
          role: Database["public"]["Enums"]["member_role"];
          joined_at: string;
        };
        Insert: {
          trip_id: string;
          user_id: string;
          role: Database["public"]["Enums"]["member_role"];
        };
        Update: { role?: Database["public"]["Enums"]["member_role"] };
      };
      party_members: {
        Row: {
          id: string;
          trip_id: string;
          display_name: string;
          category: string;
          age_at_trip: number | null;
          height_inches: number | null;
          included_in_dining_plan: boolean;
          notes: string | null;
          sort_order: number;
          created_at: string;
          updated_at: string;
          version: number;
        };
        Insert: {
          id?: string;
          trip_id: string;
          display_name: string;
          category: string;
          age_at_trip?: number | null;
          height_inches?: number | null;
          included_in_dining_plan?: boolean;
          notes?: string | null;
          sort_order?: number;
        };
        Update: Partial<Database["public"]["Tables"]["party_members"]["Insert"]>;
      };
      stays: {
        Row: {
          id: string;
          trip_id: string;
          name: string;
          source_text: string | null;
          stay_type: string;
          room_type: string | null;
          check_in_date: string;
          check_out_date: string;
          room_ready_time: string | null;
          status: Database["public"]["Enums"]["plan_status"];
          subgroup_label: string | null;
          metadata: Json;
          created_at: string;
          updated_at: string;
          version: number;
        };
        Insert: {
          id?: string;
          trip_id: string;
          name: string;
          stay_type: string;
          check_in_date: string;
          check_out_date: string;
          status?: Database["public"]["Enums"]["plan_status"];
          source_text?: string | null;
          room_type?: string | null;
          room_ready_time?: string | null;
          subgroup_label?: string | null;
          metadata?: Json;
        };
        Update: Partial<Database["public"]["Tables"]["stays"]["Insert"]>;
      };
      days: {
        Row: {
          id: string;
          trip_id: string;
          date: string;
          title: string;
          location_label: string | null;
          notes: string | null;
          sort_order: number;
          created_at: string;
          updated_at: string;
          version: number;
        };
        Insert: {
          id?: string;
          trip_id: string;
          date: string;
          title: string;
          location_label?: string | null;
          notes?: string | null;
          sort_order?: number;
        };
        Update: Partial<Database["public"]["Tables"]["days"]["Insert"]>;
      };
      events: {
        Row: {
          id: string;
          day_id: string;
          type: Database["public"]["Enums"]["event_type"];
          title: string;
          start_at: string | null;
          end_at: string | null;
          all_day: boolean;
          status: Database["public"]["Enums"]["plan_status"];
          booking_status: Database["public"]["Enums"]["plan_status"] | null;
          location: string | null;
          notes: string | null;
          sort_order: number;
          visibility: "trip" | "owner_editors";
          source_row: string | null;
          metadata: Json;
          created_at: string;
          updated_at: string;
          version: number;
        };
        Insert: {
          id?: string;
          day_id: string;
          type: Database["public"]["Enums"]["event_type"];
          title: string;
          status?: Database["public"]["Enums"]["plan_status"];
          start_at?: string | null;
          end_at?: string | null;
          all_day?: boolean;
          booking_status?: Database["public"]["Enums"]["plan_status"] | null;
          location?: string | null;
          notes?: string | null;
          sort_order?: number;
          visibility?: "trip" | "owner_editors";
          source_row?: string | null;
          metadata?: Json;
        };
        Update: Partial<Database["public"]["Tables"]["events"]["Insert"]>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      member_role: "owner" | "editor" | "viewer";
      event_type:
        | "flight"
        | "lodging"
        | "park"
        | "meal"
        | "nap"
        | "attraction"
        | "travel"
        | "family"
        | "activity"
        | "note";
      plan_status: "idea" | "planned" | "needs_booking" | "booked" | "confirmed" | "cancelled";
      conflict_status: "open" | "resolved" | "overridden" | "dismissed";
      conflict_severity: "info" | "warning" | "blocking";
      pass_type: "multi" | "single" | "none";
      selection_state: "wish" | "initial" | "after_redemption" | "confirmed" | "removed";
      dining_credit_type: "quick_service" | "table_service" | "snack";
    };
    CompositeTypes: Record<string, never>;
  };
};
