export const dateStringToDate = (dateString: string): Date => {
    const dateParts = dateString.split('/').map((value: string): number => parseInt(value)); // ['day', 'month', 'year']

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

export const htmlTemplate = (report: string): string => {
    return `
<!DOCTYPE html>
<html>
<head>
    <title>Report</title>
    <style>
        body {
            margin: 0;
            display: flex;
            height: 100vh;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    </style>
</head>
<body>
    <h1>Analysis Output</h1>
    <div>${report}</div>
</body>
</html>
`;
};
