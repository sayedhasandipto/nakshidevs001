import { betterAuth } from 'better-auth';
import { connectDB } from './db';
import { mongodbAdapter } from '@better-auth/mongo-adapter';
import mongoose from 'mongoose';

let authInstance = null;

export async function getAuth() {
  if (authInstance) return authInstance;

  await connectDB();

  authInstance = betterAuth({
    database: mongodbAdapter(mongoose.connection.getClient().db()),
    emailAndPassword: {
      enabled: true,
    },
  });

  return authInstance;
}
