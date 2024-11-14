// script/script.js

// Function to dynamically load SCAD files from the JSON file
function loadSCADFiles() {
    fetch('files.json')
        .then(response => response.json())
        .then(data => {
            const fileList = document.querySelector('.file-list');
            fileList.innerHTML = '';  // Clear any existing content

            data.files.forEach(file => {
                // Create a list item for each SCAD file
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = file.path;  // SCAD file path
                link.textContent = file.name;  // SCAD file name
                listItem.appendChild(link);
                fileList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error loading SCAD files:', error));
}

// Load SCAD files when the page is loaded
document.addEventListener('DOMContentLoaded', loadSCADFiles);
