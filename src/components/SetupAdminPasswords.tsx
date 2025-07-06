
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const SetupAdminPasswords = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const setupPasswords = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://8659503e-10a2-4856-aefe-20d40d5dd1a6.supabase.co/functions/v1/hash-admin-passwords`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvcm10dHd0emZhbmFxZ2h2ZnVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NTQwNDIsImV4cCI6MjA2NzIzMDA0Mn0.q3_maAgXLbOA68B1XaKM1eD1b161QD4Pl-r6N-i-IBw`
        }
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Admin passwords have been properly hashed and secured.",
        });
      } else {
        throw new Error('Failed to setup passwords');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to setup admin passwords. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Setup Admin Passwords</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">
          Click this button once to properly hash and secure the admin passwords.
        </p>
        <Button 
          onClick={setupPasswords} 
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Setting up...' : 'Setup Secure Passwords'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SetupAdminPasswords;
