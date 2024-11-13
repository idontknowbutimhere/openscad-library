const repoOwner = "idontknowbutimhere";
const repoName = "openscad-library";
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/`;

async function fetchFiles() {
    try {
        const response = await fetch(apiUrl);
        const files = await response.json();

        const fileList = document.getElementById("file-list");
        fileList.innerHTML = "";

        files.forEach(file => {
            if (file.name.endsWith(".scad")) {
                const fileLink = document.createElement("a");
                fileLink.href = file.download_url;
                fileLink.textContent = file.name;
                fileLink.target = "_blank";

                const listItem = document.createElement("div");
                listItem.appendChild(fileLink);
                fileList.appendChild(listItem);
            }
        });
    } catch (error) {
        console.error("Error fetching files:", error);
        document.getElementById("file-list").textContent = "Failed to load files.";
    }
}

fetchFiles();
