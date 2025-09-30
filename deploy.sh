#!/bin/bash

# Bolt deployment script for Carbey website
echo "Starting deployment to Bolt..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "Build successful! Ready for deployment."
    echo "Dist folder contents:"
    ls -la dist/
else
    echo "Build failed! Please check the build process."
    exit 1
fi

echo "Deployment preparation complete!"
