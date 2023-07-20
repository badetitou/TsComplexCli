import yargs from 'yargs';
const tscomplex = require('ts-complex');

const argv = yargs
  .example('$0 -i ../file.ts', 'Output the CyclomaticComplexity of the ts file')
  .alias('i', 'input')
  .nargs('i', 1)
  .demandOption('input')
  .parseSync();

const path = argv.input as string; // Finding the file
const complexity = tscomplex.calculateCyclomaticComplexity(path);
console.log(complexity);
