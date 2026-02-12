# MERN Portfolio Setup Guide

## Project Structure

```
├── client/                    # Next.js Frontend
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   └── package.json
├── server/                    # Express Backend
│   ├── models/               # MongoDB Schemas
│   ├── routes/               # API Routes
│   ├── server.js             # Main Server File
│   ├── package.json
│   └── .env
└── package.json              # Root Package
```

## Installation & Setup

### Step 1: Setup Backend

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Add your MongoDB URI and other config
# MONGO_URI=your_mongodb_connection_string
# PORT=5000
```

### Step 2: Setup Frontend

```bash
# Install root dependencies
npm install

# Create .env.local in root
echo "NEXT_PUBLIC_API_URL=http://localhost:5000/api" > .env.local
```

### Step 3: Run Development Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
npm run dev
# Client runs on http://localhost:3000
```

## Database Setup

1. Create a MongoDB cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Add it to `server/.env` as `MONGO_URI`

### Sample Data

To populate initial data, you can POST to the API:

```bash
# Create a project
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Portfolio Website",
    "description": "Modern MERN portfolio",
    "technologies": ["React", "Node.js", "MongoDB"],
    "github": "https://github.com/...",
    "featured": true
  }'

# Create experience
curl -X POST http://localhost:5000/api/experience \
  -H "Content-Type: application/json" \
  -d '{
    "jobTitle": "Full Stack Developer",
    "company": "Tech Company",
    "startDate": "2023-01-01",
    "isCurrent": true,
    "description": "Building amazing apps",
    "technologies": ["React", "Node.js"]
  }'
```

## Frontend API Integration

The frontend uses the `lib/api.ts` file to communicate with the backend:

```typescript
import { fetchProjects, fetchExperience, submitContact } from '@/lib/api';

// In your components
const projects = await fetchProjects();
const experience = await fetchExperience();
```

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (server/.env)
```
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## Deployment

### Backend (Heroku, Railway, Render, etc.)
1. Push `server` folder to your hosting platform
2. Set environment variables in the platform dashboard
3. Deploy

### Frontend (Vercel, Netlify, etc.)
1. Update `NEXT_PUBLIC_API_URL` to your backend production URL
2. Deploy frontend

## API Documentation

See `server/README.md` for detailed API endpoint documentation.

## Troubleshooting

**CORS Error?**
- Check `FRONTEND_URL` in `server/.env`
- Ensure backend server is running

**MongoDB Connection Error?**
- Verify `MONGO_URI` is correct
- Check MongoDB Atlas network access

**API Not Responding?**
- Verify backend is running on port 5000
- Check `NEXT_PUBLIC_API_URL` in frontend
