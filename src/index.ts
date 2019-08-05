import { CsvFileReader, MatchResult } from './utils';

const reader = new CsvFileReader('data/football.csv');
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manUnitedWins++;
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) manUnitedWins++;
}
console.log(reader.data[0][0]);
console.log(manUnitedWins);
