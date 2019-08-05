import { MatchData } from '../match';
import { AverageGoalsAnalysis, WinsAnalysis } from './analyzers';
import { ConsoleReport, HtmlReport } from './reports';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static averageGoalsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(new AverageGoalsAnalysis(team), new HtmlReport());
    }

    static averageGoalsAnalysisWithConsoleReport(team: string): Summary {
        return new Summary(new AverageGoalsAnalysis(team), new ConsoleReport());
    }

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
