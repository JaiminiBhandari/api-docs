# Multi-stage Dockerfile for api-docs (Zudoku)
FROM node:22-bookworm-slim AS deps
WORKDIR /app

# Copy package files
COPY package*.json ./

# Use npm install instead of ci since lock file is not committed
RUN npm install --legacy-peer-deps --no-audit --no-fund --ignore-scripts

FROM node:22-bookworm-slim AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy application source
COPY . .

RUN npm run build

FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy built static files from builder
COPY --from=builder /app/dist .

# Copy custom nginx config for SPA routing
RUN echo 'server { \
    listen 4000; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    # Enable gzip compression \
    gzip on; \
    gzip_vary on; \
    gzip_min_length 1024; \
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml+rss; \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 4000

CMD ["nginx", "-g", "daemon off;"]
