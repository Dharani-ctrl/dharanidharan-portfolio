# MERN Application Deployment Guide - Render

## Overview
This guide will help you deploy your MERN (MongoDB, Express, React, Node.js) application to Render with both frontend and backend services.

## Prerequisites
- Render account (https://render.com)
- GitHub repository with your MERN code
- MongoDB Atlas account (for database)
- Environment variables ready

## Deployment Architecture
```
┌─────────────────────────────────────────────┐
│          Frontend (Next.js on Render)        │
│  - Deployed on Static Site / Web Service    │
│  - Runs on port 3000                        │
└──────────────┬──────────────────────────────┘
               │ API calls
               ↓
┌─────────────────────────────────────────────┐
│       Backend (Express on Render)            │
│  - Deployed on Web Service                  │
│  - Runs on port 5000                        │
└──────────────┬──────────────────────────────┘
               │
               ↓
┌─────────────────────────────────────────────┐
│     MongoDB Atlas (Cloud Database)           │
│  - Connection URI: mongodb+srv://...        │
└─────────────────────────────────────────────┘
```

## Step 1: Prepare Your Repository Structure

Your repository should have this structure:
```
dharani-portfolio/
├── app/                      # Next.js frontend
├── components/
├── public/
├── package.json
├── server/                   # Express backend
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── .env
├── render.yaml              # Render configuration
└── README.md
```

## Step 2: Set Up MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create a database user and password
4. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority`
5. Save this for later

## Step 3: Create Render Configuration File

Create `render.yaml` in your root directory (already provided in the project).

## Step 4: Configure Backend for Render

### Update `server/package.json`
Make sure these scripts are present:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "engines": {
    "node": "18.x"
  }
}
```

### Update `server/server.js`
Ensure your server listens on `process.env.PORT`:
```javascript
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Update `server/.env`
Add this for Render:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
NODE_ENV=production
PORT=5000
```

## Step 5: Deploy Backend to Render

1. **Go to Render Dashboard** → https://dashboard.render.com
2. **Click "New +"** → Select "Web Service"
3. **Connect GitHub Repository**
   - Click "Connect account" and authorize GitHub
   - Select your repository
4. **Configure Service**
   - **Name**: `dharanidharan-portfolio-api` (or your choice)
   - **Region**: Select closest to you
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Free Plan**: Select if using free tier

5. **Add Environment Variables**
   - Click "Add Environment Variable"
   - Add each variable:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `NODE_ENV`: `production`
   - Click "Create Web Service"

6. **Wait for Deployment**
   - Build will take 2-5 minutes
   - Check logs for any errors
   - Note your backend URL (e.g., `https://dharani-portfolio-api.onrender.com`)

## Step 6: Configure Frontend for Render

### Update `.env.local`
```
NEXT_PUBLIC_API_URL=https://dharanidharan-portfolio-api.onrender.com
```

### Update `lib/api.ts`
Ensure it uses the environment variable:
```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
```

## Step 7: Deploy Frontend to Render

1. **Go to Render Dashboard** → https://dashboard.render.com
2. **Click "New +"** → Select "Web Service"
3. **Connect Your GitHub Repository**
4. **Configure Service**
   - **Name**: `dharani-portfolio-web` (or your choice)
   - **Region**: Same as backend if possible
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

5. **Add Environment Variables**
   - `NEXT_PUBLIC_API_URL`: `https://dharanidharan-portfolio-api.onrender.com`
   - `NODE_ENV`: `production`
   - Click "Create Web Service"

6. **Wait for Deployment**
   - Build will take 3-5 minutes
   - Your frontend URL will be: `https://dharanidharan-portfolio-web.onrender.com`

## Step 8: Fix CORS Issues (Backend)

Update your `server/server.js` to allow frontend origin:

```javascript
const cors = require('cors');

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://dharanidharan-portfolio-web.onrender.com'
  ],
  credentials: true
}));
```

## Step 9: Update Backend Environment

Add to `server/.env`:
```
CORS_ORIGIN=https://dharanidharan-portfolio-web.onrender.com
NODE_ENV=production
```

Redeploy backend:
1. Go to your backend service on Render
2. Click "Manual Deploy" → "Deploy latest commit"

## Step 10: Test Your Deployment

1. Visit your frontend URL: `https://dharanidharan-portfolio-web.onrender.com`
2. Check console for any errors (F12 → Console)
3. Test API calls to verify backend is connected
4. Monitor logs in Render dashboard

## Troubleshooting

### Backend not connecting to MongoDB
- Check MongoDB URI in Render environment variables
- Verify MongoDB Atlas IP whitelist includes Render's IPs (allow all or add 0.0.0.0/0)
- Check server logs: `Logs` tab in Render service

### Frontend not loading
- Check build logs for errors
- Verify `npm run build` works locally
- Check `NEXT_PUBLIC_API_URL` environment variable

### CORS errors
- Update `server/server.js` CORS configuration
- Include your exact frontend URL
- Redeploy backend service

### Slow initial load (cold start)
- Free tier services sleep after 15 minutes of inactivity
- First request takes 30-60 seconds to wake up
- Upgrade to paid plan for always-on service

## Monitoring

1. **View Logs**
   - Go to service → "Logs" tab
   - Check for errors in real-time

2. **Check Status**
   - Service status shows "Live" when healthy
   - Shows "Building" during deployment

3. **Redeploy**
   - Push to GitHub (auto-redeploy)
   - Or click "Manual Deploy" on service

## Environment Variables Reference

| Variable | Value | Where |
|----------|-------|-------|
| `MONGODB_URI` | mongodb+srv://... | Backend .env |
| `NODE_ENV` | production | Both |
| `PORT` | 5000 | Backend .env |
| `CORS_ORIGIN` | https://dharanidharan-portfolio-web.onrender.com | Backend .env |
| `NEXT_PUBLIC_API_URL` | https://dharanidharan-portfolio-api.onrender.com | Frontend .env.local |

## Useful Resources

- [Render Documentation](https://render.com/docs)
- [Node.js Deployment Guide](https://render.com/docs/deploy-node-express-app)
- [Next.js Deployment Guide](https://render.com/docs/deploy-nextjs)
- [MongoDB Atlas](https://docs.atlas.mongodb.com/)

## Free Tier Limitations

- Services spin down after 15 minutes of inactivity
- 0.5GB RAM per service
- Limited database connections
- No guarantee of 24/7 uptime

## Upgrade Path

1. Upgrade to **Starter Plan** ($7/month per service)
   - 2GB RAM
   - Always on
   - Professional support

2. Scale resources as needed
   - Increase RAM and CPU
   - Add managed databases
   - Use multiple instances

## Support

For deployment issues:
1. Check Render service logs
2. Review this guide
3. Contact Render support at https://render.com/support
