
import { useState } from "react";
import { useAdmin } from "@/context/AdminContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Shield, User, Lock } from "lucide-react";
import SetupAdminPasswords from "./SetupAdminPasswords";

const AdminSignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log('Attempting to sign in with:', { name, passwordLength: password.length });

    const { error } = await signIn(name, password);
    
    if (error) {
      console.error('Sign in error:', error);
      setError(error.message);
      setLoading(false);
    } else {
      console.log('Sign in successful, navigating to admin dashboard');
      // Navigate to admin dashboard after successful sign in
      navigate('/admin');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 border border-brand-gold/20 rounded-full mb-4">
            <Shield className="w-8 h-8 text-brand-gold" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
          <p className="text-slate-400">Secure access to administration panel</p>
        </div>

        {/* Setup Admin Passwords Component */}
        <div className="mb-6">
          <SetupAdminPasswords />
        </div>

        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl text-white">Welcome Back</CardTitle>
            <CardDescription className="text-slate-400">
              Sign in to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Admin Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your admin name (desmond or emem)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-brand-gold/50 focus:ring-brand-gold/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-300 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-brand-gold/50 focus:ring-brand-gold/20"
                />
              </div>
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <p className="text-red-400 text-sm text-center">{error}</p>
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-black font-medium py-3 transition-all duration-200 transform hover:scale-[1.02]"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                    Signing In...
                  </div>
                ) : (
                  "Sign In to Dashboard"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-slate-500 text-sm">
            Authorized personnel only. All access is monitored.
          </p>
          <p className="text-slate-400 text-xs mt-2">
            Note: Click "Setup Secure Passwords" above first if this is your first time signing in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminSignIn;
