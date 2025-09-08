# Use Node.js 22 Alpine
FROM node:22-alpine

# Working directory
WORKDIR /app

# Copy package 
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# source code
COPY . .

# directories
RUN mkdir -p .tmp public/uploads

#Permissions for uploads directory
RUN chown -R node:node /app
USER node

# Strapi port
EXPOSE 1337

#  environment variables
ENV NODE_ENV=development
ENV HOST=0.0.0.0
ENV PORT=1337

# Start Strapi in development mode
CMD ["npm", "run", "develop"]