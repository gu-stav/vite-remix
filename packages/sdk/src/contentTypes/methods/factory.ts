import { ZodError, ZodSchema } from 'zod';

import { ValidationError } from '../../errors/index';

import type { SDK } from '../..';

export function factory(
  callback: (sdk: SDK, callbackArg: any) => Promise<any>,
  options: { schema?: ZodSchema } = {},
) {
  return async function (
    sdk: SDK,
    payload: { contentType?: string; data: any },
  ): Promise<any> {
    try {
      // validate data payload schema
      if (options?.schema && payload?.data) {
        try {
          options.schema.parse(payload.data);
        } catch (error) {
          if (error instanceof ZodError) {
            // @ts-expect-error
            throw new ValidationError('', error.format());
          }
        }
      }

      const contentType = payload?.contentType
        ? sdk.config.contentTypes.find(
            (contentType) => contentType.slug === payload.contentType,
          )
        : undefined;

      // TODO
      if (!contentType) {
      }

      return {
        data: await callback(sdk, {
          ...payload,
          // populate the contentType
          contentType,
        }),
      };
    } catch (error) {
      if (error instanceof Error) {
        sdk.logger.error(error.message);
        throw error;
      }
    }
  };
}

export interface SdkResponse<T extends any> {
  data: T;
}
