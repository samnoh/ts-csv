import { MatchReader } from './match';
import { Summary } from './summary';

const matchReader = MatchReader.fromCsv('data/football.csv');

Summary.winsAnalysisWithConsoleReport('Man United').buildAndPrintReport(matchReader.matches);

Summary.averageGoalsAnalysisWithConsoleReport('Liverpool').buildAndPrintReport(matchReader.matches);
