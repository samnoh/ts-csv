import { CsvFileReader } from './utils';
import { MatchReader } from './match';
import { ConsoleReport } from './reports';
import { WinsAnalysis } from './analyzers';
import { Summary } from './summary';

const csvFileReader = new CsvFileReader('data/football.csv');
const matchReader = new MatchReader(csvFileReader);
const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
