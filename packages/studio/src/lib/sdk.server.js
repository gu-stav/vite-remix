import { sdk } from 'sdk';

let cached = null;

export async function init() {
    if (cached) {
        return cached;
    }

    const { default: config } = await import('~studio.config.js');

    await sdk.init(config);

    cached = sdk;

    return cached;
}
