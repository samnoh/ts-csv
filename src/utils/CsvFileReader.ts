import fs from 'fs';

import { dateStringToDate, MatchResult } from './index';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
    data: MatchData[] = [];

    constructor(public filename: string) {}

    read(): void {
        try {
            this.data = fs
                .readFileSync(`${this.filename}`, {
                    encoding: 'utf-8'
                })
                .split('\n')
                .map((row: string): string[] => row.split(','))
                .map(
                    (row: string[]): MatchData => [
                        dateStringToDate(row[0]),
                        row[1],
                        row[2],
                        parseInt(row[3]),
                        parseInt(row[4]),
                        row[5] as MatchResult,
                        row[6]
                    ]
                );
        } catch (e) {
            if (e.code === 'ENOENT') {
                console.error('File Not Found');
            } else {
                console.error(e);
                throw e;
            }
        }
    }
}
