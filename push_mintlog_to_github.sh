#!/bin/bash

# === CONFIGURATION ===
SOURCE_JSON="/Users/midnight/Desktop/arcHIVE_unified_app/mintlog.json"
DEST_REPO="/Users/midnight/Desktop/arcHIVE_Site/archivesite"
DEST_JSON="$DEST_REPO/mintlog.json"
GIT_EMAIL="bot@archive.com"
GIT_NAME="arcHIVE Bot"

# === VALIDATION ===
if [ ! -f "$SOURCE_JSON" ]; then
  echo "❌ Source mintlog.json not found at: $SOURCE_JSON"
  exit 1
fi

# === COPY JSON ===
cp "$SOURCE_JSON" "$DEST_JSON"
echo "✅ Copied mintlog.json to $DEST_JSON"

# === GIT COMMIT & PUSH ===
cd "$DEST_REPO" || exit 1
git config user.email "$GIT_EMAIL"
git config user.name "$GIT_NAME"
git add mintlog.json

if git diff --cached --quiet; then
  echo "⚠️ No changes to mintlog.json — skipping commit."
else
  git commit -m "Auto-update mintlog.json"
  git push origin main
  echo "🚀 mintlog.json pushed to GitHub!"
fi