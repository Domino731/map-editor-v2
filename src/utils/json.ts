// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export function downloadJSON(data: any, filename: string) {
    // Convert JSON to string
    const jsonStr = JSON.stringify(data, null, 2);

    // Create a Blob object for the JSON data
    const blob = new Blob([jsonStr], {type: 'application/json'});

    // Create a temporary anchor element for triggering the download
    const a = document.createElement('a');
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = filename;

    // Append anchor to body and trigger the download
    document.body.appendChild(a);
    a.click();

    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}