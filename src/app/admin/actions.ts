'use server';

import { encrypt, getSession } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function loginAction(formData: FormData) {
  const username = formData.get('username');
  const password = formData.get('password');

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username === adminUsername && password === adminPassword) {
    const sessionToken = await encrypt({ user: username });
    const cookieStore = await cookies();
    cookieStore.set('session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 24 * 60 * 60, // 1 day
    });

    return { success: true };
  }

  return { success: false, message: 'Invalid credentials' };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}

export async function verifyAdmin() {
  const session = await getSession();
  if (!session) {
    return false;
  }
  return true;
}
