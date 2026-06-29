'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginAction } from '@/app/admin/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(formData: FormData) {
    setLoading(true);
    const result = await loginAction(formData);
    setLoading(false);

    if (result.success) {
      toast.success('Logged in successfully!');
      router.push('/admin/submissions');
    } else {
      toast.error(result.message || 'Invalid credentials');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
        <div className="mb-8 text-center flex flex-col items-center">
          <img src="/images/bima-logo.png" alt="Bima Company" className="h-14 w-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Login</h1>
          <p className="text-gray-500 mt-2">Sign in to access the dashboard</p>
        </div>

        <form action={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" type="text" placeholder="admin" required className="w-full" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="••••••••" required className="w-full" />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  );
}
