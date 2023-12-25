import { program } from "commander";
import { execa } from "execa";
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

program
  .command('dev')
  .action(async () => {
    await execa('remix', ['vite:dev'], {
        cwd: resolve(__dirname, '..')
    }).pipeStdout(process.stdout);
  });

program
  .command('build')
  .action(async () => {
    await execa('remix', ['vite:build'], {
        cwd: resolve(__dirname, '..')
    })
  });

program.parse();
