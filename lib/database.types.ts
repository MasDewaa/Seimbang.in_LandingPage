export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          type: 'income' | 'expense'
          icon: string | null
          color: string | null
          created_at: string
          user_id: string
        }
        Insert: {
          id?: string
          name: string
          type: 'income' | 'expense'
          icon?: string | null
          color?: string | null
          created_at?: string
          user_id: string
        }
        Update: {
          id?: string
          name?: string
          type?: 'income' | 'expense'
          icon?: string | null
          color?: string | null
          created_at?: string
          user_id?: string
        }
      }
      transactions: {
        Row: {
          id: string
          amount: number
          description: string | null
          category_id: string | null
          date: string
          type: 'income' | 'expense'
          created_at: string
          user_id: string
        }
        Insert: {
          id?: string
          amount: number
          description?: string | null
          category_id?: string | null
          date?: string
          type: 'income' | 'expense'
          created_at?: string
          user_id: string
        }
        Update: {
          id?: string
          amount?: number
          description?: string | null
          category_id?: string | null
          date?: string
          type?: 'income' | 'expense'
          created_at?: string
          user_id?: string
        }
      }
      budgets: {
        Row: {
          id: string
          category_id: string | null
          amount: number
          period: 'monthly' | 'yearly'
          start_date: string
          end_date: string
          created_at: string
          user_id: string
        }
        Insert: {
          id?: string
          category_id?: string | null
          amount: number
          period: 'monthly' | 'yearly'
          start_date: string
          end_date: string
          created_at?: string
          user_id: string
        }
        Update: {
          id?: string
          category_id?: string | null
          amount?: number
          period?: 'monthly' | 'yearly'
          start_date?: string
          end_date?: string
          created_at?: string
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}