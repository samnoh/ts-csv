import { CsvFileReader } from './utils';
import { MatchReader } from './match';
import { Summary } from './summary';

const csvFileReader = new CsvFileReader('data/football.csv');
const matchReader = new MatchReader(csvFileReader);
const summary = Summary.winsAnalysisWithConsoleReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
