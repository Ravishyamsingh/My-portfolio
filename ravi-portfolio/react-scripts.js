#!/usr/bin/env node
const { spawnSync } = require('node:child_process');

const args = process.argv.slice(2);

if (args.length === 0 || (args.length === 1 && args[0] === 'build')) {
  const result = spawnSync('npm', ['run', 'build'], {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });
  process.exit(result.status ?? 1);
}

console.error(`Unsupported react-scripts command: ${args.join(' ')}`);
process.exit(1);
