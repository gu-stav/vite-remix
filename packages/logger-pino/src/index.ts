import pino from 'pino';

import { SDK } from 'sdk';

export function logger() {
  return ({ sdk }: { sdk: SDK }) => {
    sdk.logger = pino();
  };
}
