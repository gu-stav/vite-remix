import { z } from 'zod';

import { factory } from './factory';

export const login = factory(
  async function ({ data }) {
    return {
      token: 'something',
    };
  },
  {
    schema: z
      .object({
        email: z.string().email(),
        password: z.string().min(1),
      })
      .strict(),
  },
);
