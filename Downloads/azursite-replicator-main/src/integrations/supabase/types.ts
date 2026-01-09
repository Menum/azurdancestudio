export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      booking_inquiries: {
        Row: {
          budget_range: string | null
          client_id: string | null
          created_at: string | null
          event_id: string | null
          id: string
          inquiry_status:
            | Database["public"]["Enums"]["booking_inquiry_status"]
            | null
          message: string | null
          performer_count: number
          quote_amount: number | null
          quote_reference: string | null
          requested_performers: string[] | null
          updated_at: string | null
        }
        Insert: {
          budget_range?: string | null
          client_id?: string | null
          created_at?: string | null
          event_id?: string | null
          id?: string
          inquiry_status?:
            | Database["public"]["Enums"]["booking_inquiry_status"]
            | null
          message?: string | null
          performer_count: number
          quote_amount?: number | null
          quote_reference?: string | null
          requested_performers?: string[] | null
          updated_at?: string | null
        }
        Update: {
          budget_range?: string | null
          client_id?: string | null
          created_at?: string | null
          event_id?: string | null
          id?: string
          inquiry_status?:
            | Database["public"]["Enums"]["booking_inquiry_status"]
            | null
          message?: string | null
          performer_count?: number
          quote_amount?: number | null
          quote_reference?: string | null
          requested_performers?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "booking_inquiries_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_inquiries_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          address: string | null
          city: string
          company_name: string | null
          created_at: string | null
          id: string
          notes: string | null
          updated_at: string | null
          user_profile_id: string | null
        }
        Insert: {
          address?: string | null
          city: string
          company_name?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          updated_at?: string | null
          user_profile_id?: string | null
        }
        Update: {
          address?: string | null
          city?: string
          company_name?: string | null
          created_at?: string | null
          id?: string
          notes?: string | null
          updated_at?: string | null
          user_profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clients_user_profile_id_fkey"
            columns: ["user_profile_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      event_performers: {
        Row: {
          confirmed: boolean | null
          created_at: string | null
          event_id: string | null
          id: string
          notes: string | null
          performance_fee: number | null
          performer_id: string | null
        }
        Insert: {
          confirmed?: boolean | null
          created_at?: string | null
          event_id?: string | null
          id?: string
          notes?: string | null
          performance_fee?: number | null
          performer_id?: string | null
        }
        Update: {
          confirmed?: boolean | null
          created_at?: string | null
          event_id?: string | null
          id?: string
          notes?: string | null
          performance_fee?: number | null
          performer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_performers_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_performers_performer_id_fkey"
            columns: ["performer_id"]
            isOneToOne: false
            referencedRelation: "performer_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          city: string
          client_id: string | null
          created_at: string | null
          duration_hours: number | null
          event_date: string
          event_name: string
          event_time: string | null
          event_type: Database["public"]["Enums"]["event_type"]
          guest_count: number | null
          id: string
          special_requirements: string | null
          updated_at: string | null
          venue_address: string
          venue_name: string
        }
        Insert: {
          city: string
          client_id?: string | null
          created_at?: string | null
          duration_hours?: number | null
          event_date: string
          event_name: string
          event_time?: string | null
          event_type: Database["public"]["Enums"]["event_type"]
          guest_count?: number | null
          id?: string
          special_requirements?: string | null
          updated_at?: string | null
          venue_address: string
          venue_name: string
        }
        Update: {
          city?: string
          client_id?: string | null
          created_at?: string | null
          duration_hours?: number | null
          event_date?: string
          event_name?: string
          event_time?: string | null
          event_type?: Database["public"]["Enums"]["event_type"]
          guest_count?: number | null
          id?: string
          special_requirements?: string | null
          updated_at?: string | null
          venue_address?: string
          venue_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      performer_profiles: {
        Row: {
          available_cities: string[] | null
          bio: string | null
          certifications: string[] | null
          created_at: string | null
          id: string
          is_featured: boolean | null
          portfolio_images: string[] | null
          profile_image_url: string | null
          rating: number | null
          specialty: Database["public"]["Enums"]["performer_specialty"]
          stage_name: string
          total_events: number | null
          updated_at: string | null
          user_profile_id: string | null
          years_experience: number | null
        }
        Insert: {
          available_cities?: string[] | null
          bio?: string | null
          certifications?: string[] | null
          created_at?: string | null
          id?: string
          is_featured?: boolean | null
          portfolio_images?: string[] | null
          profile_image_url?: string | null
          rating?: number | null
          specialty: Database["public"]["Enums"]["performer_specialty"]
          stage_name: string
          total_events?: number | null
          updated_at?: string | null
          user_profile_id?: string | null
          years_experience?: number | null
        }
        Update: {
          available_cities?: string[] | null
          bio?: string | null
          certifications?: string[] | null
          created_at?: string | null
          id?: string
          is_featured?: boolean | null
          portfolio_images?: string[] | null
          profile_image_url?: string | null
          rating?: number | null
          specialty?: Database["public"]["Enums"]["performer_specialty"]
          stage_name?: string
          total_events?: number | null
          updated_at?: string | null
          user_profile_id?: string | null
          years_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "performer_profiles_user_profile_id_fkey"
            columns: ["user_profile_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      performing_teams: {
        Row: {
          available_cities: string[] | null
          base_price_ron: number | null
          costume_description: string | null
          created_at: string | null
          cultural_specialization: string | null
          description: string
          event_suitability: Database["public"]["Enums"]["event_suitability"][]
          id: string
          is_featured: boolean | null
          performance_styles: Database["public"]["Enums"]["performance_style"][]
          rating: number | null
          signature_choreographies: string[] | null
          size_category: Database["public"]["Enums"]["team_size_category"]
          specialization: string
          stage_specifications: Json | null
          team_name: string
          team_photo_url: string | null
          team_size: number
          technical_needs: string[] | null
          total_performances: number | null
          updated_at: string | null
          venue_requirements: string | null
          years_active: number | null
        }
        Insert: {
          available_cities?: string[] | null
          base_price_ron?: number | null
          costume_description?: string | null
          created_at?: string | null
          cultural_specialization?: string | null
          description: string
          event_suitability?: Database["public"]["Enums"]["event_suitability"][]
          id?: string
          is_featured?: boolean | null
          performance_styles?: Database["public"]["Enums"]["performance_style"][]
          rating?: number | null
          signature_choreographies?: string[] | null
          size_category: Database["public"]["Enums"]["team_size_category"]
          specialization: string
          stage_specifications?: Json | null
          team_name: string
          team_photo_url?: string | null
          team_size: number
          technical_needs?: string[] | null
          total_performances?: number | null
          updated_at?: string | null
          venue_requirements?: string | null
          years_active?: number | null
        }
        Update: {
          available_cities?: string[] | null
          base_price_ron?: number | null
          costume_description?: string | null
          created_at?: string | null
          cultural_specialization?: string | null
          description?: string
          event_suitability?: Database["public"]["Enums"]["event_suitability"][]
          id?: string
          is_featured?: boolean | null
          performance_styles?: Database["public"]["Enums"]["performance_style"][]
          rating?: number | null
          signature_choreographies?: string[] | null
          size_category?: Database["public"]["Enums"]["team_size_category"]
          specialization?: string
          stage_specifications?: Json | null
          team_name?: string
          team_photo_url?: string | null
          team_size?: number
          technical_needs?: string[] | null
          total_performances?: number | null
          updated_at?: string | null
          venue_requirements?: string | null
          years_active?: number | null
        }
        Relationships: []
      }
      team_availability: {
        Row: {
          booking_status: string | null
          created_at: string | null
          date: string
          id: string
          is_available: boolean | null
          notes: string | null
          team_id: string | null
          updated_at: string | null
        }
        Insert: {
          booking_status?: string | null
          created_at?: string | null
          date: string
          id?: string
          is_available?: boolean | null
          notes?: string | null
          team_id?: string | null
          updated_at?: string | null
        }
        Update: {
          booking_status?: string | null
          created_at?: string | null
          date?: string
          id?: string
          is_available?: boolean | null
          notes?: string | null
          team_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_availability_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "performing_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          created_at: string | null
          id: string
          is_lead: boolean | null
          joined_date: string | null
          performer_id: string | null
          role_in_team: string | null
          team_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_lead?: boolean | null
          joined_date?: string | null
          performer_id?: string | null
          role_in_team?: string | null
          team_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_lead?: boolean | null
          joined_date?: string | null
          performer_id?: string | null
          role_in_team?: string | null
          team_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_members_performer_id_fkey"
            columns: ["performer_id"]
            isOneToOne: false
            referencedRelation: "performer_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "performing_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      team_testimonials: {
        Row: {
          client_name: string
          company_name: string | null
          created_at: string | null
          event_date: string | null
          event_type: string
          id: string
          is_featured: boolean | null
          rating: number | null
          team_id: string | null
          testimonial_text: string
          venue_name: string | null
        }
        Insert: {
          client_name: string
          company_name?: string | null
          created_at?: string | null
          event_date?: string | null
          event_type: string
          id?: string
          is_featured?: boolean | null
          rating?: number | null
          team_id?: string | null
          testimonial_text: string
          venue_name?: string | null
        }
        Update: {
          client_name?: string
          company_name?: string | null
          created_at?: string | null
          event_date?: string | null
          event_type?: string
          id?: string
          is_featured?: boolean | null
          rating?: number | null
          team_id?: string | null
          testimonial_text?: string
          venue_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_testimonials_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "performing_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      team_videos: {
        Row: {
          created_at: string | null
          duration_seconds: number | null
          event_type: string | null
          id: string
          performance_type: string | null
          team_id: string | null
          uploaded_at: string | null
          venue_name: string | null
          video_description: string | null
          video_thumbnail_url: string | null
          video_title: string
          video_url: string
          view_count: number | null
        }
        Insert: {
          created_at?: string | null
          duration_seconds?: number | null
          event_type?: string | null
          id?: string
          performance_type?: string | null
          team_id?: string | null
          uploaded_at?: string | null
          venue_name?: string | null
          video_description?: string | null
          video_thumbnail_url?: string | null
          video_title: string
          video_url: string
          view_count?: number | null
        }
        Update: {
          created_at?: string | null
          duration_seconds?: number | null
          event_type?: string | null
          id?: string
          performance_type?: string | null
          team_id?: string | null
          uploaded_at?: string | null
          venue_name?: string | null
          video_description?: string | null
          video_thumbnail_url?: string | null
          video_title?: string
          video_url?: string
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "team_videos_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "performing_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string
          full_name: string
          id: string
          phone: string | null
          role: Database["public"]["Enums"]["user_role"] | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email: string
          full_name: string
          id: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"] | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_access_event: { Args: { event_uuid: string }; Returns: boolean }
      cleanup_test_data: { Args: never; Returns: undefined }
      search_performing_teams: {
        Args: {
          event_filter?: Database["public"]["Enums"]["event_suitability"]
          min_rating?: number
          search_term?: string
          size_filter?: Database["public"]["Enums"]["team_size_category"]
          style_filter?: Database["public"]["Enums"]["performance_style"]
        }
        Returns: {
          description: string
          id: string
          rating: number
          team_name: string
          team_photo_url: string
          team_size: number
          total_performances: number
        }[]
      }
    }
    Enums: {
      booking_inquiry_status:
        | "pending"
        | "confirmed"
        | "cancelled"
        | "completed"
      event_suitability:
        | "corporate"
        | "wedding"
        | "gala"
        | "festival"
        | "private"
        | "cultural"
        | "luxury"
      event_type: "wedding" | "corporate" | "private" | "cultural"
      performance_style:
        | "modern"
        | "traditional"
        | "ballet"
        | "contemporary"
        | "folk"
        | "cultural"
        | "fusion"
        | "commercial"
      performer_specialty:
        | "modern"
        | "traditional"
        | "ballet"
        | "contemporary"
        | "folk"
      team_size_category: "duo" | "small" | "medium" | "large" | "extra_large"
      user_role: "admin" | "client" | "performer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      booking_inquiry_status: [
        "pending",
        "confirmed",
        "cancelled",
        "completed",
      ],
      event_suitability: [
        "corporate",
        "wedding",
        "gala",
        "festival",
        "private",
        "cultural",
        "luxury",
      ],
      event_type: ["wedding", "corporate", "private", "cultural"],
      performance_style: [
        "modern",
        "traditional",
        "ballet",
        "contemporary",
        "folk",
        "cultural",
        "fusion",
        "commercial",
      ],
      performer_specialty: [
        "modern",
        "traditional",
        "ballet",
        "contemporary",
        "folk",
      ],
      team_size_category: ["duo", "small", "medium", "large", "extra_large"],
      user_role: ["admin", "client", "performer"],
    },
  },
} as const
