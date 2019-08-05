import { Analyzer } from '../../summary';
import { MatchData } from '../MatchData';

export class AverageGoalsAnalysis implements Analyzer {
    constructor(public team: string) {}

    run(matches: MatchData[]): string {
        let goals = 0;
        let nMatches = 0;

        for (let match of matches) {
            if (match[1] === this.team || match[2] === this.team) {
                nMatches += 1;
                goals += match[1] === this.team ? match[3] : match[4];
            }
        }

        return `Team ${this.team}'s Average Goals: ${(goals / nMatches).toFixed(2)}`;
    }
}
