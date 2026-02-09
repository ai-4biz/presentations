#!/bin/bash
# Auto-deploy script - commits and pushes changes to GitHub Pages

set -e

echo "🚀 Deploying changes to web..."

# Add all changes
git add -A

# Check if there are changes to commit
if ! git diff --cached --quiet; then
    # Create commit with timestamp
    COMMIT_MSG="Update: Presentation improvements - $(date +'%Y-%m-%d %H:%M:%S')"
    git commit -m "$COMMIT_MSG"
    echo "✅ Committed changes: $COMMIT_MSG"
else
    echo "ℹ️  No changes to commit"
fi

# Pull latest changes (rebase to avoid merge commits)
echo "📥 Pulling latest changes..."
git pull --rebase origin main || echo "⚠️  Pull failed, continuing..."

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete! Changes will be live on GitHub Pages shortly."
echo "🔗 URL: https://ai-4biz.github.io/presentations/decks/smart-lead-intelligence.html"
