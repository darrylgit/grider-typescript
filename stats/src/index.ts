import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manWins: number = reader.data.reduce(
  (winCount: number, row: string[]): number =>
    (row[1] === 'Man United' && row[5] === MatchResult.HomeWin) ||
    (row[2] === 'Man United' && row[5] === MatchResult.AwayWin)
      ? winCount + 1
      : winCount,
  0
);

console.log(`Man United won ${manWins} games.`);
