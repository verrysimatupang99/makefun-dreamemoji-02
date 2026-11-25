// Island — prints one emoji, optionally shouted.
const island = '🏝️';

function renderLine(shout: boolean): string {
  return shout ? island.toUpperCase() : island;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function showHelp(): void {
  process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
}

function main(): void {
  const args = process.argv.slice(2);
  const knownFlags = ['--shout', '--help'];
  const unknownFlags = args.filter((arg) => !knownFlags.includes(arg));

  if (unknownFlags.length > 0) {
    process.stderr.write(`Unknown option: ${unknownFlags[0]}\n`);
    showHelp();
    process.exitCode = 2;
    return;
  }

  if (hasFlag('--help')) {
    showHelp();
    return;
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
