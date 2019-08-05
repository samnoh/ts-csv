import { MatchData } from '../match';
import { WinsAnalysis } from '../match/analyzers';
import { ConsoleReport, HtmlReport } from './reports';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new HtmlReport());
    }

    static winsAnalysisWithConsoleReport(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new ConsoleReport());
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
