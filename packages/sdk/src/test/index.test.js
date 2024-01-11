import { describe, expect, test } from 'vitest';

import { defineConfig } from '../config/define';
import { sdk } from '../index';

describe('sdk', () => {
  test('invalid config', async () => {
    await expect(sdk.init(defineConfig())).rejects.toThrow();
  });
});
