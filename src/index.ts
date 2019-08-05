import { MatchReader } from './match';
import { Summary } from './summary';

const matchReader = MatchReader.fromCsv('data/football.csv');
const summary1 = Summary.winsAnalysisWithConsoleReport('Man United');
const summary2 = Summary.averageGoalsAnalysisWithConsoleReport('Liverpool');

matchReader.load();
summary1.buildAndPrintReport(matchReader.matches);
summary2.buildAndPrintReport(matchReader.matches);
