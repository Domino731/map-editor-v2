// Import the required modules

import fs from 'fs';
import path from 'path'

// Get the directory where the script is executed
const directoryPath = './';


function toCamelCaseAndRemovePng(str) {
    // Remove the .png extension if present
    if (str.endsWith('.png')) {
        str = str.slice(0, -4);
    }

    // Split the string by underscores
    const words = str.split('_');

    // Convert to camelCase
    const camelCaseStr = words.map((word, index) => {
        if (index === 0) {
            // Lowercase the first word
            return word.toLowerCase();
        } else {
            // Capitalize the first letter of subsequent words and lowercase the rest
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
    }).join('');

    return camelCaseStr;
}

// Function to list all files in a directory
function listFilesInDirectory(directoryPath) {
    const enumVal = {}

    // Read the directory contents
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.error(`Unable to scan directory: ${err}`);
        }

        // List all files
        files.forEach(file => {
            const filePath = path.join(directoryPath, file);

            // Check if the current path is a file or a directory
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    return console.error(`Unable to get file stats: ${err}`);
                }

                if (stats.isFile()) {
                    // import whiteCow from '../assets/map/characters/animals/white_cow.png';
                    console.log(`import ${toCamelCaseAndRemovePng(filePath)} from '../assets/map/characters/monsters/${filePath}'`);
                }
            });
        });
    });
}

// Execute the function to list files
listFilesInDirectory(directoryPath);