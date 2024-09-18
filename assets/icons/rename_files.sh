#!/bin/bash

# The string you want to remove
STRING_TO_REMOVE="Property 1="

# Loop through the files containing the string in their names
for file in *"$STRING_TO_REMOVE"*; do
    # Create the new name by removing the unwanted string
    new_name="${file//$STRING_TO_REMOVE/}"

    # Rename the file
    mv "$file" "$new_name"
done
