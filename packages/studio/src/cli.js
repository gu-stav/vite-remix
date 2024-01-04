#!/usr/bin/env node

import { program } from 'commander';
import { execa } from 'execa';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

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

program.parse();
