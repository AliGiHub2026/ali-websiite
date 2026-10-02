const SUPABASE_URL = "https://qpffrgaishfdjcbgndll.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Adth-RJmzc1qpKVIBgxDiA_h7vDWL--";

// إنشاء عميل Supabase واحد فقط
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
