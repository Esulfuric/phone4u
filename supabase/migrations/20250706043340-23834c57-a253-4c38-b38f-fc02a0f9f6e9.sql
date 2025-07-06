
-- Insert admin accounts directly into the database
INSERT INTO public.admin_users (user_id, role) VALUES 
  (gen_random_uuid(), 'admin'),
  (gen_random_uuid(), 'admin');

-- Create a simple admin_credentials table for name/password authentication
CREATE TABLE public.admin_credentials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  admin_user_id UUID REFERENCES public.admin_users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.admin_credentials ENABLE ROW LEVEL SECURITY;

-- Create policy for admin credentials (only admins can access)
CREATE POLICY "Only system can access admin credentials" 
ON public.admin_credentials 
FOR ALL 
USING (false)
WITH CHECK (false);

-- Insert the two admin accounts (passwords will be hashed in the application)
-- Note: We'll use bcrypt hashing in the application, these are placeholder hashes
INSERT INTO public.admin_credentials (name, password_hash, admin_user_id) 
SELECT 
  'desmond' as name,
  '$2b$10$placeholder_hash_for_Resonance@123' as password_hash,
  (SELECT id FROM public.admin_users LIMIT 1 OFFSET 0) as admin_user_id
UNION ALL
SELECT 
  'emem' as name,
  '$2b$10$placeholder_hash_for_Emico3108' as password_hash,
  (SELECT id FROM public.admin_users LIMIT 1 OFFSET 1) as admin_user_id;
