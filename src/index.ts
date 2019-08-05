import { CsvFileReader, MatchReader, MatchResult } from './utils';

const csvFileReader = new CsvFileReader('data/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
console.log(matchReader.matches[0]);

// let manUnitedWins = 0;
// for (let match of matchReader.matches) {
//     if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manUnitedWins++;
//     else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) manUnitedWins++;
// }
// console.log(manUnitedWins);
