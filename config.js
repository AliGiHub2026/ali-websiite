const SUPABASE_URL = "https://qpffrgaishfdjcbgndll.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Adth-RJmzc1qpKVIBgxDiA_h7vDWL--";
if (typeof supabase === 'undefined') {
  var supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
