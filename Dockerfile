# Build Stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Copy all files
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the application
RUN npm run build

# Production Stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Copy Prisma schema and entrypoint
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/entrypoint.sh ./entrypoint.sh

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next
RUN chmod +x entrypoint.sh

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# ENTRYPOINT to handle DB sync and env loading
ENTRYPOINT ["/app/entrypoint.sh"]
