import { z } from "zod";

const fieldSchema = z.object({
    name: z.string(),
    type: z.enum([
        'text',
    ]),
    validate: z.optional(z.function())
});

const contentTypeSchema = z.object({
    attributes: z.array(fieldSchema).nonempty(),
    slug: z.string(),
})

const schema = z.object({
    contentTypes: z.array(contentTypeSchema).nonempty(),
    db: z.function(),
}).strict();

export function validate(config) {
    return schema.parse(config);
}
