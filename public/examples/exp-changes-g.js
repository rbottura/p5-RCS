const fs = require('fs');
const path = require('path');

// Define the path to the folder where the example folders are located
const examplesFolder = './';

// Define the new script tags to be added
const newScripts = `
<script src="../../lib/p5.min.js"></script>
<script src="../../lib/p5.sound.min.js"></script>
`;

// Function to generate the menu HTML with links to each example page and a Home button
function generateMenuHtml(exampleFolders) {
    let menuHtml = '<header><nav><ul>';
    menuHtml += '<li><a href="../index.html">Home</a></li>'; // Home link

    // Add a link for each example folder
    exampleFolders.forEach(folder => {
        menuHtml += `<li><a href="../${folder}/index.html">${folder}</a></li>`;
    });

    menuHtml += '</ul></nav></header>';
    return menuHtml;
}

function addMenuToAllHtmlFiles() {
    // Get list of example folders
    const exampleFolders = fs.readdirSync(examplesFolder).filter(file =>
        fs.statSync(path.join(examplesFolder, file)).isDirectory()
    );

    // Generate the menu HTML
    const menuHtml = generateMenuHtml(exampleFolders);

    // Process each folder
    processFolder(examplesFolder, menuHtml);
}

// Function to process each folder recursively
function processFolder(folderPath, menuHtml) {
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
                    processFolder(filePath, menuHtml); // Process subdirectories
                } else if (file === 'index.html') {
                    updateHtmlFile(filePath, menuHtml); // Update index.html files
                }
            });
        });
    });
}

// Function to update the HTML file (remove sketch.js script in head, add new scripts, and move sketch.js to body)
function updateHtmlFile(htmlFilePath, menuHtml) {
    fs.readFile(htmlFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${htmlFilePath}`, err);
            return;
        }

        // Remove any <script src="sketch.js"> from the <head>
        let updatedHtml = data.replace(/<script.*?sketch\.js.*?<\/script>/g, '');

        // Remove any duplicate script tags that may have been added
        // updatedHtml = removeDuplicateScripts(updatedHtml);

        // Add the new <script> tags for p5.js and p5.sound.js
        // if (!updatedHtml.includes('<script src="../../lib/p5.min.js"></script>')) {
            // updatedHtml = updatedHtml.replace('</head>', `${newScripts}\n</head>`);
        // }

        // Add <script src="sketch.js"> to the bottom of the <body>
        if (!updatedHtml.includes('<script src="sketch.js"></script>')) {
            updatedHtml = updatedHtml.replace('</body>', '<script src="sketch.js"></script>\n</body>');
        }

        // Insert the menu at the start of <body>
        updatedHtml = updatedHtml.replace('<body>', `<body>\n${menuHtml}`);

        // Write the updated HTML back to the file
        fs.writeFile(htmlFilePath, updatedHtml, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing file: ${htmlFilePath}`, err);
                return;
            }
            console.log(`Updated scripts in: ${htmlFilePath}`);
        });
    });
}

// Function to remove duplicate <script> tags
function removeDuplicateScripts(htmlContent) {
    // Use a Set to track unique <script> tags
    const scriptTags = new Set();
    return htmlContent.replace(/<script.*?<\/script>/g, (match) => {
        if (scriptTags.has(match)) {
            return ''; // Remove duplicates
        }
        scriptTags.add(match);
        return match;
    });
}

// Start processing the folder
// processFolder(examplesFolder);
addMenuToAllHtmlFiles();