import { z } from 'zod';

import { factory } from './factory';

export const login = factory(({ data }) => {
  const userSchema = z
    .object({
      email: z.string().email(),
      password: z.string().min(1),
    })
    .strict();

  userSchema.parse(data);

  return {
    token: 'something',
  };
});
