import fs from 'fs';

export class CsvFileReader {
    data: string[][] = [];

    constructor(public filename: string) {}

    read(): void {
        try {
            this.data = fs
                .readFileSync(`${this.filename}`, {
                    encoding: 'utf-8'
                })
                .split('\n')
                .map((row: string): string[] => row.split(','));
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
