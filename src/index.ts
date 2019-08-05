import { CsvFileReader } from './utils';
import { MatchReader } from './match';
import { Summary } from './summary';
import { WinsAnalysis } from './analyzers';
import { ConsoleReport } from './reports';

const csvFileReader = new CsvFileReader('data/football.csv');
const matchReader = new MatchReader(csvFileReader);
const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
