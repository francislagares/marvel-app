import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
    MARVEL_API_PRIVATE_KEY: z.string(),
    MARVEL_API_PUBLIC_KEY: z.string(),
    MARVEL_API_URL: z.string().url(),
    PORT: z.coerce.number().default(3000),
  },

  client: {
    NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY: z.string(),
    NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY: z.string(),
    NEXT_PUBLIC_MARVEL_API_URL: z.string().url(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    MARVEL_API_URL: process.env.MARVEL_API_URL,
    MARVEL_API_PUBLIC_KEY: process.env.MARVEL_API_PUBLIC_KEY,
    MARVEL_API_PRIVATE_KEY: process.env.MARVEL_API_PRIVATE_KEY,
    NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY:
      process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY,
    NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY: process.env.MARVEL_API_PUBLIC_KEY,
    NEXT_PUBLIC_MARVEL_API_URL: process.env.MARVEL_API_URL,
    PORT: process.env.PORT,
  },
});
