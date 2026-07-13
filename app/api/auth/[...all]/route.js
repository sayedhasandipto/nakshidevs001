import { getAuth } from '@/lib/auth';

export async function GET(request) {
  const auth = await getAuth();
  return auth.handler(request);
}

export async function POST(request) {
  const auth = await getAuth();
  return auth.handler(request);
}
