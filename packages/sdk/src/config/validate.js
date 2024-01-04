import { z } from 'zod';

const accessControlSchema = z.object({
  create: z.optional(z.function),
  find: z.optional(z.function),
  update: z.optional(z.function),
  delete: z.optional(z.function),
});

const fieldSchema = z.object({
  access: z.optional(accessControlSchema),
  name: z.string(),
  type: z.enum(['text', 'date']),
  validate: z.optional(z.function()),
});

const contentTypeSchema = z.object({
  access: z.optional(accessControlSchema),
  attributes: z.array(fieldSchema).nonempty(),
  slug: z.string(),
});

const schema = z
  .object({
    contentTypes: z.array(contentTypeSchema).nonempty(),
    db: z.function(),
    plugins: z.optional(z.array(z.function())),
  })
  .strict();

export function validate(config) {
  return schema.parse(config);
}
