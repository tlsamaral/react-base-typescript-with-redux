import { z } from 'zod';

const envSchema = z.object({
  REACT_APP_URL_API_AUTH_BASE: z.string().url(),
});

export const env = envSchema.parse(process.env);
