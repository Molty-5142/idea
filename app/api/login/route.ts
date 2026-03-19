import { NextRequest, NextResponse } from 'next/server';
import { createSession, COOKIE } from '@/lib/auth';
import fs from 'fs';
import path from 'path';

interface Credential {
  email: string;
  password: string;
  role: string;
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Read from env var in production, fall back to local file in dev
  let credentials: Credential[];
  if (process.env.CREDENTIALS_JSON) {
    credentials = JSON.parse(process.env.CREDENTIALS_JSON);
  } else {
    const credPath = path.join(process.cwd(), 'credentials.json');
    credentials = JSON.parse(fs.readFileSync(credPath, 'utf8'));
  }

  const match = credentials.find(
    c => c.email === email && c.password === password
  );

  if (!match) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }

  const token = await createSession(match.email, match.role);

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 12, // 12 hours
    path: '/',
  });
  return res;
}
