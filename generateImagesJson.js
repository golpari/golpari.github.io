const fs = require('fs');
const path = require('path');

const directoryPath = 'images/art';
const outputPath = 'images.json';

// Read the contents of the 'art' directory
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Unable to scan directory:', err);
        return;
    }

    // Filter to include only image files
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));

    // Write the image filenames to a JSON file
    fs.writeFile(outputPath, JSON.stringify(imageFiles, null, 2), err => {
        if (err) {
            console.error('Error writing JSON file:', err);
            return;
        }
        console.log('JSON file has been generated successfully!');
    });
});
