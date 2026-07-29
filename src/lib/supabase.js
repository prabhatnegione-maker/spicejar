import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://lrzriqkuugxlwsizytqs.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyenJpcWt1dWd4bHdzaXp5dHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzMDc3NzksImV4cCI6MjEwMDg4Mzc3OX0.ROqHffBSWcD49GcZTWfU0ocdnCetrjsOaMSY0UhN5J8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
