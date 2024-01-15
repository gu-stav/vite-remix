import { compile } from 'json-schema-to-typescript';
import { JSONSchema4, JSONSchema4TypeName } from 'json-schema';

import { Config } from '../config/validate';

function convertAttributesToJsonSchemas(
  attributes: Config['contentTypes'][number]['attributes'],
): { properties: { [k: string]: JSONSchema4 }; required?: string[] } {
  function withNullableJSONSchemaType(
    fieldType: JSONSchema4TypeName,
    isRequired: boolean,
  ): JSONSchema4TypeName | JSONSchema4TypeName[] {
    if (isRequired) {
      return fieldType;
    }

    return [fieldType, 'null'];
  }

  const required: string[] = [];
  const properties = attributes.reduce(
    (
      acc: Record<string, JSONSchema4>,
      attribute: Config['contentTypes'][number]['attributes'][number],
    ) => {
      let schema: JSONSchema4;

      switch (attribute.type) {
        // type=text
        default:
          schema = {
            type: withNullableJSONSchemaType('string', !!attribute.required),
          };
          break;
      }

      acc[attribute.name] = schema;

      if (attribute.required === true) {
        required.push(attribute.name);
      }

      return acc;
    },
    {},
  );

  return {
    properties,
    required,
  };
}

function convertContentTypesToJsonSchemas(
  contentTypes: Config['contentTypes'],
): { [k: string]: JSONSchema4 } {
  return contentTypes.reduce(
    (
      acc: Record<string, JSONSchema4>,
      contentType: Config['contentTypes'][number],
    ) => {
      acc[contentType.slug] = {
        additionalProperties: false,
        title: contentType.slug,
        type: 'object',
        ...convertAttributesToJsonSchemas(contentType.attributes),
      };
      return acc;
    },
    {},
  );
}

function convertContentTypesSchemaReferences(
  contentTypes: Config['contentTypes'],
): JSONSchema4 {
  const properties = contentTypes.reduce(
    (
      acc: Record<string, JSONSchema4>,
      contentType: Config['contentTypes'][number],
    ) => {
      acc[contentType.slug] = {
        $ref: `#/definitions/${contentType.slug}`,
      };

      return acc;
    },
    {},
  );

  return {
    additionalProperties: false,
    properties,
    required: Object.keys(properties),
    type: 'object',
  };
}

function configToJsonSchema(config: Config): JSONSchema4 {
  return {
    additionalProperties: false,
    definitions: convertContentTypesToJsonSchemas(config.contentTypes),
    properties: {
      contentTypes: convertContentTypesSchemaReferences(config.contentTypes),
    },
    required: ['contentTypes'],
    title: 'Config',
    type: 'object',
  };
}

export async function generateTypes(config: Config): Promise<string> {
  const types = await compile(configToJsonSchema(config), 'Config', {
    // disable default banner
    bannerComment: '',
  });

  return `
${types}
declare module 'sdk' {
    export interface GeneratedTypes extends Config {}
}
`;
}
