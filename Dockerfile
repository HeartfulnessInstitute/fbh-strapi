# ================================
# Stage 1: Build
# ================================
FROM node:18-alpine AS build

# Install system dependencies required for native modules (sharp, vips, etc.)
RUN apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    vips-dev \
    git

WORKDIR /app

# Copy package files first (better Docker layer caching)
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build Strapi admin panel
RUN npm run build

# ================================
# Stage 2: Production
# ================================
FROM node:18-alpine AS production

# Install runtime system dependencies only
RUN apk add --no-cache \
    vips-dev \
    libpng-dev

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install production dependencies only
RUN npm ci --omit=dev

# Copy built app from build stage
COPY --from=build /app/build ./build
COPY --from=build /app/dist ./dist
COPY --from=build /app/.strapi ./.strapi

# Copy source (needed at runtime for Strapi)
COPY --from=build /app/src ./src
COPY --from=build /app/config ./config
COPY --from=build /app/public ./public
COPY --from=build /app/database ./database

# Strapi runs on port 1337 by default
EXPOSE 1337

# Set NODE_ENV to production
ENV NODE_ENV=production

# Start Strapi
CMD ["npm", "run", "start"]