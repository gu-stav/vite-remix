import { describe, expect, test } from 'vitest';

import { generateTypes } from '../generateTypes';

describe('generateTypes', () => {
  test('Generate types for text fields', async () => {
    expect(
      await generateTypes({
        contentTypes: [
          {
            slug: 'test',
            attributes: [
              {
                type: 'text',
                name: 'test',
              },
            ],
          },
        ],
      }),
    ).toMatchInlineSnapshot(`
          "
          export interface Config {
            contentTypes: {
              test: Test;
            };
          }
          export interface Test {
            test?: string | null;
          }

          declare module 'sdk' {
              export interface GeneratedTypes extends Config {}
          }
          "
        `);
  });
});
