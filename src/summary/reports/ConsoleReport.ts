import { OutputTarget } from '..';

export class ConsoleReport implements OutputTarget {
    print(report: string): void {
        console.log(report);
    }
}
