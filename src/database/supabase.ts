import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://sishkishgwfodbmqpjyv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpc2hraXNoZ3dmb2RibXFwanl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2OTMwNTAsImV4cCI6MjAxNjI2OTA1MH0.1_r5CBGOa2KszDbk7xC-_V50SMkxGWjk2XYXr9i2mHo"
);
