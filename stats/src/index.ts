import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8'
  })
  .split('\n')
  .map((row: string): string[] => row.split(','));

let manWins: number = matches.reduce(
  (winCount: number, row: string[]): number =>
    (row[1] === 'Man United' && row[5] === 'H') || (row[2] === 'Man United' && row[5] === 'A')
      ? winCount + 1
      : winCount,
  0
);

console.log(`Man United won ${manWins} games.`);
