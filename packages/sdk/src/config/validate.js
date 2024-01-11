import { z } from 'zod';

const accessControlSchema = z.object({
  create: z.optional(z.function),
  find: z.optional(z.function),
  update: z.optional(z.function),
  delete: z.optional(z.function),
});

const fieldSchema = z.object({
  access: z.optional(accessControlSchema),
  name: z.string().refine((val) => !val.startsWith('_'), {
    message: 'Field name can not start with underscores',
  }),
  type: z.enum(['text', 'date', 'password']),
  validate: z.optional(z.function()),
});

const contentTypeSchema = z.object({
  access: z.optional(accessControlSchema),
  attributes: z.array(fieldSchema).nonempty(),
  slug: z
    .string()
    .refine((val) => ['_users'].includes(val) || !val.startsWith('_'), {
      message: 'Content-type slug can not start with underscores',
    }),
});

const schema = z
  .object({
    contentTypes: z.array(contentTypeSchema).nonempty(),
    db: z.function(),
    plugins: z.optional(z.array(z.function())),
    secret: z.string().min(1),
  })
  .strict();

export function validate(config) {
  return schema.parse(config);
}
