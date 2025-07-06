
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Hash the passwords for the two admin accounts
    const desmondHash = await bcrypt.hash('Resonance@123', 10)
    const ememHash = await bcrypt.hash('Emico3108', 10)

    // Update the admin credentials with proper hashed passwords
    const { error: desmondError } = await supabaseClient
      .from('admin_credentials')
      .update({ password_hash: desmondHash })
      .eq('name', 'desmond')

    const { error: ememError } = await supabaseClient
      .from('admin_credentials')
      .update({ password_hash: ememHash })
      .eq('name', 'emem')

    if (desmondError || ememError) {
      throw new Error('Failed to update password hashes')
    }

    return new Response(
      JSON.stringify({ message: 'Admin passwords hashed successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
