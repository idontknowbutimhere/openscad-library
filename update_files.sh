#!/bin/bash

# Create an empty JSON array
echo '{ "files": [' > files.json

# Find all SCAD files and add them to files.json
first=true
for filepath in $(find . -type f -name "*.scad"); do
    # Skip the leading ./ from the filepath
    filename=$(basename "$filepath")
    filepath=${filepath#./}

    # Add comma separator if not the first file
    if [ "$first" = true ]; then
        first=false
    else
        echo ',' >> files.json
    fi

    # Append file entry to JSON
    echo "  { \"name\": \"$filename\", \"path\": \"$filepath\" }" >> files.json
done

# Close the JSON array
echo '] }' >> files.json

echo "Updated files.json successfully."
