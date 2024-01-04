import { z } from 'zod';

const schema = z
  .object({
    connectionString: z.string(),
  })
  .strict();

export function validate(config) {
  return schema.parse(config);
}
