import fs from 'fs';

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D'
}

const matches = fs
    .readFileSync('data/football.csv', {
        encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => row.split(','));

let manUnitedWins = 0;

for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) manUnitedWins++;
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) manUnitedWins++;
}

console.log(manUnitedWins);
