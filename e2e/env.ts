import 'dotenv/config';
import { z } from 'zod';

const envSchema = z
  .object({
    CI: z.string().transform(v => v === 'true'),
    PW_BASE_URL: z.string(),
  })
  .refine(data => {
    if (data.CI && !data.PW_BASE_URL) {
      throw new Error('PW_BASE_URL is required when running in CI');
    }

    return true;
  });

export const env = envSchema.parse(process.env);
