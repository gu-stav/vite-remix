// import { pushSchema } from 'drizzle-kit/utils';
import prompts from 'prompts';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

export async function connect(config, schemas) {
  const { connectionString } = config;
  const dbClient = postgres(connectionString);
  const client = drizzle(dbClient, { schema: schemas });

  // const { apply, hasDataLoss, warnings } = await pushSchema(schema, client);

  // if (warnings.length > 0) {
  //   let message = `Warnings detected during schema push: \n\n${warnings.join(
  //     '\n',
  //   )}\n\n`;

  //   if (hasDataLoss) {
  //     message += `DATA LOSS WARNING: Possible data loss detected if schema is pushed.\n\n`;
  //   }

  //   message += `Accept warnings and push schema to database?`;

  //   const { confirm } = await prompts(
  //     {
  //       name: 'confirm',
  //       initial: false,
  //       message,
  //       type: 'confirm',
  //     },
  //     {
  //       onCancel: () => {
  //         process.exit(0);
  //       },
  //     },
  //   );

  //   if (!confirm) {
  //     process.exit(0);
  //   }

  //   await apply();
  // }

  return client;
}
