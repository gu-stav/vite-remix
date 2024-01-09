import { z } from 'zod';

const schema = z
  .object({
    contentType: z.string(),
    data: z.object().optional(),
  })
  .strict();

function validatePayload(payload) {
  try {
    schema.validate(payload);
    return true;
  } catch (error) {
    return false;
  }
}

export function factory(callback) {
  return function ({ sdk, ...payload }) {
    try {
      validatePayload(payload);
      return callback(payload);
    } catch (error) {
      sdk.logger.error(error.message);
      throw error;
    }
  };
}
