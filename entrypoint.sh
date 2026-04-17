#!/bin/sh
set -e

# Load environment variables from .env if it exists
if [ -f .env ]; then
  echo "Loading environment variables from .env"
  export $(cat .env | grep -v '^#' | xargs)
fi

# Load environment variables from .env.production if it exists
if [ -f .env.production ]; then
  echo "Loading environment variables from .env.production"
  export $(cat .env.production | grep -v '^#' | xargs)
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL is not set."
  # We don't exit here because the app might still start, 
  # but it will likely fail on DB calls.
else
  echo "DATABASE_URL is set. Attempting to sync database schema..."
  # Run prisma db push to sync schema
  # node_modules/.bin/prisma is available in standalone if we copy it correctly
  npx prisma db push --accept-data-loss || echo "Prisma sync failed, but starting app anyway..."
fi

# Start the application
echo "Starting Next.js server..."
exec node server.js
