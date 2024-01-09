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
  return async function (payload) {
    try {
      validatePayload(payload);
      return await callback.bind(this)(payload);
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  };
}
