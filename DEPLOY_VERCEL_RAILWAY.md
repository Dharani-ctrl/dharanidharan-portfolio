# Deploy MERN Portfolio to Vercel + Railway

## Overview
This guide deploys your Next.js frontend to **Vercel** and Express backend to **Railway**. This is the optimal setup for Next.js + Node.js applications.

---

## Part 1: Deploy Frontend to Vercel

### Step 1: Prepare Frontend for Vercel

No changes needed! Vercel automatically detects Next.js and configures everything.

### Step 2: Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (or login if you have an account)
3. Click **"New Project"** → **"Import Git Repository"**
4. Search for your `dharani-portfolio` repository and click **Import**

### Step 3: Configure Vercel Project

In the **"Configure Project"** dialog:

**Build & Output Settings:**
- Framework: **Next.js** (auto-detected)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**Environment Variables:**
```
NEXT_PUBLIC_API_URL=https://your-railway-api.railway.app
```
(You'll update this after deploying backend)

**Root Directory:** Leave blank (projects is at root)

### Step 4: Deploy

Click **"Deploy"** and wait for deployment to complete (~2-3 minutes).

Your frontend will be live at: `https://dharani-portfolio.vercel.app` (or your custom domain)

---

## Part 2: Deploy Backend to Railway

### Why Railway?
- Free tier for small projects ($5/month credit)
- Better for Node.js/Express than Render
- Easy MongoDB integration
- Reliable for MERN stacks

### Step 1: Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Create a new project

### Step 2: Connect GitHub Repository

1. In Railway dashboard, click **"New"** → **"GitHub Repo"**
2. Select your `dharani-portfolio` repository
3. Railway will auto-detect it's a Node.js project

### Step 3: Configure Backend Service

Railway should auto-detect the Node.js setup. Configure if needed:

**Root Directory:** `server`

**Build Command:** 
```bash
npm install
```

**Start Command:**
```bash
npm start
```

**Environment Variables** (add in Railway dashboard):
```
NODE_ENV=production
PORT=8000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
CORS_ORIGIN=https://dharani-portfolio.vercel.app
FRONTEND_URL=https://dharani-portfolio.vercel.app
JWT_SECRET=your_very_secure_jwt_secret_key_here_change_this
```

### Step 4: Deploy Backend

Railway automatically deploys when you connect. Wait for the build to complete.

Your backend API URL will be something like:
```
https://your-backend-xxx.railway.app
```

---

## Part 3: Connect Frontend to Backend

### Update Vercel Environment Variables

1. Go to your Vercel project settings
2. **Settings** → **Environment Variables**
3. Update `NEXT_PUBLIC_API_URL`:
```
NEXT_PUBLIC_API_URL=https://your-backend-xxx.railway.app
```

4. **Redeploy**: Click **"Deployments"** → Select latest → Click **"Redeploy"**

### Update Backend CORS

If you haven't already, make sure your backend CORS is configured:

In `server/server.js`:
```javascript
const allowedOrigins = [
  'https://dharani-portfolio.vercel.app',
  process.env.CORS_ORIGIN,
  process.env.FRONTEND_URL
];
```

---

## Part 4: Verify Deployment

### Test Frontend
```bash
curl https://dharani-portfolio.vercel.app
```

### Test Backend Health Check
```bash
curl https://your-backend-xxx.railway.app/api/health
```

Expected response:
```json
{
  "status": "Server is running",
  "environment": "production",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Test API Connection
Visit your frontend and check browser console:
- Open DevTools (F12)
- Go to **Network** tab
- Make a request to the app
- Verify API calls go to your Railway backend URL

---

## Troubleshooting

### Issue: Frontend can't reach backend

**Solution:**
1. Check `NEXT_PUBLIC_API_URL` is set correctly in Vercel
2. Verify backend CORS allows your frontend URL
3. Check Railway logs for errors

**View logs:**
- Railway: Click service → **"Logs"** tab
- Vercel: Click deployment → **"Logs"** tab

### Issue: Build fails on Vercel

**Solution:**
1. Check `next.config.mjs` exists
2. Verify all dependencies are in `package.json`
3. Try building locally: `npm run build`

### Issue: MongoDB connection fails

**Solution:**
1. Verify MongoDB Atlas connection string is correct
2. Check IP allowlist includes Railway IPs (typically allow all: `0.0.0.0/0`)
3. Test locally first to ensure connection works

### Issue: CORS errors

**Solution:**
Add these headers in `server/server.js`:
```javascript
app.use(cors({
  origin: [
    'https://dharani-portfolio.vercel.app',
    process.env.CORS_ORIGIN,
    process.env.FRONTEND_URL
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));
```

---

## MongoDB Setup (if not already done)

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create free account
3. Create new cluster (M0 free tier)
4. Get connection string
5. Add to Railway environment variables as `MONGODB_URI`

---

## Optional: Use Custom Domain

### On Vercel:
1. Settings → **"Domains"**
2. Add your domain
3. Follow DNS configuration instructions

### On Railway:
1. Project settings → **"Domains"**
2. Add custom domain
3. Configure DNS records

---

## Deployment Checklist

- [ ] GitHub repository is public
- [ ] MongoDB Atlas cluster is created
- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Railway
- [ ] Environment variables set correctly
- [ ] `NEXT_PUBLIC_API_URL` updated in Vercel
- [ ] CORS configured in backend
- [ ] Health check endpoint responds
- [ ] API calls work from frontend
- [ ] All environment variables secured (no sensitive data in code)

---

## Environment Variables Reference

### Frontend (.env.local) - NOT needed for Vercel, but for local dev:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (Railway Dashboard):
```
NODE_ENV=production
PORT=8000
MONGODB_URI=mongodb+srv://...
CORS_ORIGIN=https://your-vercel-domain.vercel.app
FRONTEND_URL=https://your-vercel-domain.vercel.app
JWT_SECRET=change_this_to_something_secure
```

---

## Next Steps

After deployment:

1. **Monitor**: Check logs regularly for errors
2. **Update**: New commits to main auto-deploy
3. **Scale**: Upgrade Railway/Vercel plans if needed
4. **Backup**: Regularly backup MongoDB data
5. **Security**: Add authentication, rate limiting, validation

---

## Support

- **Vercel Issues**: Check [vercel.com/docs](https://vercel.com/docs)
- **Railway Issues**: Check [railway.app/docs](https://railway.app/docs)
- **MongoDB Issues**: Check [docs.mongodb.com](https://docs.mongodb.com)
