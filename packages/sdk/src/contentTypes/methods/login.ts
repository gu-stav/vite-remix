import { z } from 'zod';

import { factory } from './factory';
import type { SDK } from '../..';

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1),
  })
  .strict();

export const login = factory(
  async function (sdk: SDK, payload: LoginArg): Promise<{ token: string }> {
    return {
      token: 'something',
    };
  },
  {
    schema,
  },
);

// TODO: retreive shape from zod schema
export interface LoginArg {
  data: z.infer<typeof schema>;
}
