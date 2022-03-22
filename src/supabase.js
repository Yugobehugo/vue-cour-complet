import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gguxgdayugamauwvldhj.supabase.co";
const supabasePass = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdndXhnZGF5dWdhbWF1d3ZsZGhqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NzgxNjIyNSwiZXhwIjoxOTYzMzkyMjI1fQ.cW_Mi-isHf55_vBvcxq6gMaA_qxQuCdHlqHIhYenrHM";

export const supabase = createClient(supabaseUrl, supabasePass);
