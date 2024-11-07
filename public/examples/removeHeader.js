const fs = require('fs');
const path = require('path');

// Define the path to the folder where the example folders are located
const examplesFolder = './';

// Function to process each folder and remove <header> elements in HTML files
function removeHeadersFromAllHtmlFiles() {
    // Process each folder
    processFolder(examplesFolder);
}

// Recursive function to process each folder
function processFolder(folderPath) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error(`Unable to scan directory: ${folderPath}`, err);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(folderPath, file);
            fs.stat(filePath, (err, stat) => {
                if (err) {
                    console.error(`Unable to stat file: ${filePath}`, err);
                    return;
                }

                if (stat.isDirectory()) {
                    processFolder(filePath); // Process subdirectories
                } else if (file === 'index.html') {
                    removeHeaderFromHtmlFile(filePath); // Remove header from index.html files
                }
            });
        });
    });
}

// Function to remove <header> elements from an HTML file
function removeHeaderFromHtmlFile(htmlFilePath) {
    fs.readFile(htmlFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${htmlFilePath}`, err);
            return;
        }

        // Remove all <header> elements and their content
        const updatedHtml = data.replace(/<header[^>]*>[\s\S]*?<\/header>/g, '');

        // Write the updated HTML back to the file
        fs.writeFile(htmlFilePath, updatedHtml, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing file: ${htmlFilePath}`, err);
                return;
            }
            console.log(`Removed <header> from: ${htmlFilePath}`);
        });
    });
}

// Start the header removal process
removeHeadersFromAllHtmlFiles();
