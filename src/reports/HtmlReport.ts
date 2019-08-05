import fs from 'fs';

import { OutputTarget } from '../summary';

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Report</title>
            </head>
            <body>
                <h1>Analysis Output</h1>
                <div>${report}</div>
            </body>
            </html>
        `;

        fs.writeFileSync('data/report.html', html);
    }
}
