import { CsvFileReader } from './utils';

const reader = new CsvFileReader('data/football.csv');
reader.read();

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

let manUnitedWins = 0;

for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manUnitedWins++;
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) manUnitedWins++;
}

console.log(manUnitedWins);
