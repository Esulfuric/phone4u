
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import bcrypt from 'bcryptjs';

interface AdminContextType {
  admin: any | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (name: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [admin, setAdmin] = useState<any | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if admin is stored in localStorage
    const storedAdmin = localStorage.getItem('admin_session');
    if (storedAdmin) {
      const adminData = JSON.parse(storedAdmin);
      setAdmin(adminData);
      setIsAdmin(true);
    }
    setLoading(false);
  }, []);

  const signIn = async (name: string, password: string) => {
    try {
      // Get admin credentials from database
      const { data: credentials, error } = await supabase
        .from('admin_credentials')
        .select('*')
        .ilike('name', name.toLowerCase())
        .single();

      if (error || !credentials) {
        return { error: { message: 'Invalid admin credentials' } };
      }

      // Hash the provided password and compare with stored hash
      const isValidPassword = await bcrypt.compare(password, credentials.password_hash);

      if (!isValidPassword) {
        return { error: { message: 'Invalid admin credentials' } };
      }

      // Get admin user details
      const { data: adminUser, error: adminError } = await supabase
        .from('admin_users')
        .select('*')
        .eq('id', credentials.admin_user_id)
        .single();

      if (adminError || !adminUser) {
        return { error: { message: 'Admin user not found' } };
      }

      const adminSession = {
        id: adminUser.id,
        name: credentials.name,
        role: adminUser.role,
        credential_id: credentials.id
      };

      // Store admin session
      localStorage.setItem('admin_session', JSON.stringify(adminSession));
      setAdmin(adminSession);
      setIsAdmin(true);

      return { error: null };
    } catch (error) {
      console.error('Admin sign in error:', error);
      return { error: { message: 'Authentication failed' } };
    }
  };

  const signOut = async () => {
    localStorage.removeItem('admin_session');
    setAdmin(null);
    setIsAdmin(false);
  };

  return (
    <AdminContext.Provider value={{
      admin,
      isAdmin,
      loading,
      signIn,
      signOut,
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
