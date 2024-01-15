#!/usr/bin/env node

import { program } from 'commander';
import { execa } from 'execa';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';

import { generateTypes } from 'sdk';

import 'dotenv/config';

const __dirname = dirname(fileURLToPath(import.meta.url));

program.command('dev').action(async () => {
  await execa('remix', ['vite:dev'], {
    cwd: resolve(__dirname, '..'),
    env: {
      ORIGINAL_CWD: process.cwd(),
    },
  })
    .pipeStdout(process.stdout)
    .pipeStderr(process.stderr);
});

program.command('build').action(async () => {
  await execa('remix', ['vite:build'], {
    cwd: resolve(__dirname, '..'),
    env: {
      ORIGINAL_CWD: process.cwd(),
    },
  })
    .pipeStdout(process.stdout)
    .pipeStderr(process.stderr);
});

program.command('types:generate').action(async () => {
  const { default: config } = await import(
    resolve(process.cwd(), 'studio.config.js')
  );

  const types = await generateTypes(config);

  await writeFile(resolve(process.cwd(), 'sdk-types.ts'), types);
});

program.parse();
