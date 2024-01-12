import type { ZodSchema } from 'zod';

import { ValidationError } from '../../errors';

import type { ContentType } from '../../index';

export function factory(
  callback: (callbackPayload: {
    contentType: ContentType | undefined;
    data: object;
    request: unknown;
    where: {};
  }) => Promise<object>,
  options: { schema: ZodSchema } = { schema: null },
) {
  return async function (payload) {
    try {
      // validate data payload schema
      if (options?.schema && payload?.data) {
        try {
          options.schema.parse(payload.data);
        } catch (error) {
          throw new ValidationError('', error.format());
        }
      }

      return {
        data: await callback.bind(this)({
          ...payload,

          // populate the contentType
          contentType: payload?.contentType
            ? this.config.contentTypes.find(
                (contentType) => contentType.slug === payload.contentType,
              )
            : undefined,
        }),
      };
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  };
}
