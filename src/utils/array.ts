export function create2DArray(rows: number, cols: number, initialValue: any) {
  // Create an empty array to hold the rows
  const array = [];

  // Loop through each row
  for (let i = 0; i < rows; i++) {
    // Create an array for the current row and fill it with the initial value
    const row = new Array(cols).fill(initialValue);

    // Add the row to the main array
    array.push(row);
  }

  return array;
}
