import fs from 'fs';

import { OutputTarget } from '../Summary';
import { htmlTemplate } from '../../utils';

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = htmlTemplate(report);

        try {
            fs.writeFileSync('data/report.html', html);
        } catch (e) {
            console.error(e);
        }
    }
}
