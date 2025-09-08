# Forest by Heartfulness - Strapi CMS

Content Management System  using Strapi with Docker and PostgreSQL.

## Prerequisites

- Docker Desktop installed
- Git installed
- Web browser

## Quick Start

### 1. Clone and Setup
```bash
git clone <repository-url>
cd FBH_Strapi
```

### 2. Environment Configuration
```bash
# Copy environment template
cp .env.example .env
### 3. Start the Application
```bash
# Build and start containers
docker-compose up --build

# Or run in background
docker-compose up --build -d
```

### 4. Access Admin Panel
Open your browser and navigate to:
```
http://localhost:1337/admin
```

### 5. Create Admin Account
- Fill out the registration form on first visit
- Use a secure password
- Save credentials safely

## Project Structure

```
FBH_Strapi/
├── src/
│   ├── api/              # API endpoints and controllers
│   ├── components/       # Reusable components
│   ├── extensions/       # Strapi extensions
│   └── middlewares/      # Custom middleware
├── config/
│   ├── database.js       # Database configuration
│   ├── server.js         # Server configuration
│   └── middlewares.js    # Middleware configuration
├── public/               # Static files and uploads
├── Dockerfile           # Docker container configuration
├── docker-compose.yml   # Multi-container setup
├── .env                 # Environment variables
└── package.json         # Node.js dependencies
```

