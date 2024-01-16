import { describe, expect, test } from 'vitest';

import { defineConfig } from '../config/define';
import { sdk } from '..';

const CONFIG_VALID = {
  contentTypes: [
    {
      slug: '_users',
      attributes: [
        {
          name: 'email',
          type: 'text',
        },

        {
          name: 'password',
          type: 'password',
        },
      ],
    },
  ],
  db: () => () => ({
    async connect() {},
    async find() {},
    async create() {},
    async delete() {},
    async update() {},
  }),
  secret: 'secret',
};

describe('sdk', () => {
  test('invalid config (empty)', async () => {
    await expect(sdk.init(defineConfig({}))).rejects.toThrow();
  });

  test('user defined content-type slugs can not start with an underscore', async () => {
    await expect(
      sdk.init(
        defineConfig({
          ...CONFIG_VALID,
          contentTypes: [
            // @ts-expect-error
            ...CONFIG_VALID.contentTypes,
            {
              slug: '_test',
              attributes: [
                {
                  name: 'test',
                  required: false,
                  type: 'text',
                },
              ],
            },
          ],
        }),
      ),
    ).rejects.toThrow();
  });

  test('plugins can alter the config', async () => {
    const testPlugin = () => (config) => ({
      ...config,
      contentTypes: [
        ...config.contentTypes,
        {
          slug: 'plugin_content_type',
          attributes: [
            {
              name: 'test',
              type: 'text',
            },
          ],
        },
      ],
    });

    await sdk.init(
      // @ts-expect-error
      defineConfig({
        ...CONFIG_VALID,
        plugins: [testPlugin()],
      }),
    );

    expect(sdk.config.contentTypes.length).toBe(2);
    expect(sdk.config.contentTypes.at(-1)).toMatchInlineSnapshot(`
      {
        "attributes": [
          {
            "name": "test",
            "type": "text",
          },
        ],
        "slug": "plugin_content_type",
      }
    `);
  });
});
