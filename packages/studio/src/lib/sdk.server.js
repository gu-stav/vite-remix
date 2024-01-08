import { sdk } from 'sdk';

let cached = null;

// TODO: all of this can be moved into ServerContext once available in Remix
// afterwards instantiation can only be done once
export async function init() {
  if (cached) {
    return cached;
  }

  const { default: config } = await import('~studio.config.js');

  await sdk.init(config);

  cached = sdk;

  return cached;
}
