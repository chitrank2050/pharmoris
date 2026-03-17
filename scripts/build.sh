#!/bin/bash

# Define total steps
TOTAL_STEPS=3

echo "🏗️  Starting build process..."

# Stop on errors
set -e

# Step 1: Pre-flight check
echo "[1/$TOTAL_STEPS] 🧹 Preparing environment..."
# Optional: remove previous build to ensure a clean start
rm -rf .next
rm -rf out

# Step 2: Run the build
echo "[2/$TOTAL_STEPS] ⚙️  Running Next.js build..."
pnpm run build

# Step 3: Finalize
echo "[3/$TOTAL_STEPS] 🏁 Build complete!"
echo "      -> Output directory: .next/"
echo "      -> Ready for deployment."