import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// --- ADICIONE ISTO PARA TESTAR ---
console.log("--------------------------------")
console.log("DEBUG SUPABASE:")
console.log("URL:", supabaseUrl)
console.log("KEY:", supabaseKey ? "A chave existe (Tamanho: " + supabaseKey.length + ")" : "A CHAVE ESTÁ VAZIA/UNDEFINED!")
console.log("--------------------------------")
// ---------------------------------

export const supabase = createClient(supabaseUrl, supabaseKey)