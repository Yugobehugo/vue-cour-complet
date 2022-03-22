import { createClient } from "@supabase/supabase-js";

const supabasePass = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlYWt1enBpb2Zxd3pxa2F0dG1uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0Nzg1ODA3MCwiZXhwIjoxOTYzNDM0MDcwfQ.srgdJltTlV9evBjCsPc4ORRp2YWoVPTTjjVDI5anZi4"
const supabaseUrl = "https://peakuzpiofqwzqkattmn.supabase.co"

export const supabase = createClient(supabaseUrl, supabasePass);
