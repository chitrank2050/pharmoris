#!/bin/bash
set -e

VERSION=$(node -p "require('./package.json').version")
echo "🏷️  Tagging v$VERSION..."
git tag "v$VERSION" -m "Release v$VERSION"
git push --tags
echo "✅ Tagged v$VERSION"