import { auth } from '@/lib/auth';
import { toNextJsHandler } from 'better-auth/next-js';

// Better Auth's toNextJsHandler creates properly typed GET and POST handlers
// that cover ALL auth endpoints:  /api/auth/sign-in, /api/auth/sign-up,
// /api/auth/sign-out, /api/auth/get-session, etc.
export const { GET, POST } = toNextJsHandler(auth);
