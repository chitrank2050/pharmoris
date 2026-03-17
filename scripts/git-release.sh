#!/bin/bash
set -e

VERSION=$(node -p "require('./package.json').version")
echo "📦 Releasing v$VERSION..."

pnpm exec git-cliff --output CHANGELOG.md
git add CHANGELOG.md
git diff --cached --quiet || git commit --no-verify -m "docs: update changelog for v$VERSION"
git push

NOTES=$(pnpm exec git-cliff --latest --strip all 2>/dev/null)

gh release edit "v$VERSION" \
  --title "v$VERSION" \
  --notes "$NOTES" 2>/dev/null || \
gh release create "v$VERSION" \
  --title "v$VERSION" \
  --notes "$NOTES"

echo "✅ Released v$VERSION"
echo "   https://github.com/chitrank2050/pharmoris/releases/tag/v$VERSION"