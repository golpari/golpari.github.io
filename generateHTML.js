const fs = require('fs');
const path = require('path');

// Paths to the files
const jsonFilePath = path.join(__dirname, 'images.json');
const templateFilePath = path.join(__dirname, 'artworkTemplate.html');
const outputFilePath = path.join(__dirname, 'artwork.html');

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, jsonData) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    // Read the HTML template
    fs.readFile(templateFilePath, 'utf8', (err, htmlTemplate) => {
        if (err) {
            console.error('Error reading HTML template:', err);
            return;
        }

        // Replace the placeholder with the JSON data
        const finalHtml = htmlTemplate.replace('<!--IMAGE_DATA-->', jsonData);

        // Write the final HTML to an output file
        fs.writeFile(outputFilePath, finalHtml, 'utf8', err => {
            if (err) {
                console.error('Error writing HTML file:', err);
                return;
            }
            console.log('HTML file has been generated successfully!');
        });
    });
});
