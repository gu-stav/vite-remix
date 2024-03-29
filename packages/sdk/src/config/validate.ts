import { z } from 'zod';

const accessControlSchema = z.object({
  create: z.optional(z.function()),
  find: z.optional(z.function()),
  update: z.optional(z.function()),
  delete: z.optional(z.function()),
});

const fieldSchema = z.object({
  access: z.optional(accessControlSchema),
  name: z.string().refine((val) => !val.startsWith('_'), {
    message: 'Field name can not start with underscores',
  }),
  required: z.optional(z.boolean().default(false)),
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
    logger: z.optional(
      z.function().returns(
        z.function().returns(
          z.object({
            info: z.function().args(z.any()),
            error: z.function().args(z.any()),
          }),
        ),
      ),
    ),
    plugins: z.optional(z.array(z.function())),
    secret: z.string().min(1),
  })
  .strict();

export type Config = z.infer<typeof schema>;

export function validate(config: Config) {
  return schema.parse(config);
}
