-- Create products table to manage stock and prices dynamically
CREATE TABLE public.products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  image TEXT,
  category TEXT,
  condition TEXT,
  storage TEXT,
  ram TEXT,
  connectivity TEXT,
  description TEXT,
  specifications JSONB,
  in_stock BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy for public to view products
CREATE POLICY "Anyone can view products" 
ON public.products 
FOR SELECT 
USING (true);

-- Create policy for admins to manage products
CREATE POLICY "Admins can manage products" 
ON public.products 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Create chat messages table for live chat between admin and users
CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  sender_type TEXT NOT NULL CHECK (sender_type IN ('admin', 'user')),
  sender_name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- Create policy for anyone to view and send chat messages (we'll handle auth in the app)
CREATE POLICY "Anyone can view chat messages" 
ON public.chat_messages 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can send chat messages" 
ON public.chat_messages 
FOR INSERT 
WITH CHECK (true);

-- Create chat sessions table to track active support sessions
CREATE TABLE public.chat_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL UNIQUE,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  cart_total DECIMAL(10,2) NOT NULL,
  cart_items JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'closed')),
  admin_assigned TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.chat_sessions ENABLE ROW LEVEL SECURITY;

-- Create policy for admins to view all chat sessions
CREATE POLICY "Admins can view all chat sessions" 
ON public.chat_sessions 
FOR SELECT 
USING (true);

-- Create policy for anyone to create chat sessions
CREATE POLICY "Anyone can create chat sessions" 
ON public.chat_sessions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to update chat sessions
CREATE POLICY "Admins can update chat sessions" 
ON public.chat_sessions 
FOR UPDATE 
USING (true);

-- Add policy to allow orders to be inserted (currently missing)
CREATE POLICY "Anyone can create orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (true);

-- Add policy to allow admins to update orders
CREATE POLICY "Admins can update orders" 
ON public.orders 
FOR UPDATE 
USING (true);

-- Create trigger for automatic timestamp updates on products
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger for automatic timestamp updates on chat_sessions
CREATE TRIGGER update_chat_sessions_updated_at
BEFORE UPDATE ON public.chat_sessions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for chat functionality
ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_sessions;