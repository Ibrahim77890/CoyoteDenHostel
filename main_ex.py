# Install Kaggle package
sudo apt update
sudo apt install python3-pip
pip3 install kaggle

# Create Kaggle directory and move the JSON file
mkdir -p ~/.kaggle
mv ~/Downloads/kaggle.json ~/.kaggle/
chmod 600 ~/.kaggle/kaggle.json

# Download the dataset
kaggle datasets download -d prasunroy/natural-images

# Unzip the dataset
unzip natural-images.zip




#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <source_directory> <destination_directory>"
    exit 1
fi

SOURCE_DIR="$1"      # The directory to search for images
DEST_DIR="$2"        # The directory where images will be collected

# Create the destination directory if it does not exist
mkdir -p "$DEST_DIR"

# Find and copy image files to the destination directory
find "$SOURCE_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) -exec cp {} "$DEST_DIR" \;

echo "All images have been collected to $DEST_DIR"
