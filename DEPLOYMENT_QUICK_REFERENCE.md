# Quick Deployment Reference

## TL;DR - Deploy in 5 Steps

### For Vercel + Railway (Recommended)

**Step 1: Deploy Frontend to Vercel**
```
1. Go to vercel.com
2. Import repository
3. Set NEXT_PUBLIC_API_URL env var (leave blank for now)
4. Click Deploy
5. Copy frontend URL
```

**Step 2: Deploy Backend to Railway**
```
1. Go to railway.app
2. New → GitHub Repo
3. Select dharani-portfolio
4. Add env variables (see below)
5. Deploy automatically starts
```

**Step 3: Update Frontend URL**
```
1. Copy Railway backend URL (shown in Railway dashboard)
2. Go to Vercel → Settings → Environment Variables
3. Set NEXT_PUBLIC_API_URL = https://your-railway-backend.railway.app
4. Redeploy from Vercel dashboard
```

**Step 4: Update Backend CORS**
```
In server/server.js, update CORS_ORIGIN to match your Vercel URL:
CORS_ORIGIN=https://dharani-portfolio.vercel.app
```

**Step 5: Test**
```bash
# Test backend
curl https://your-railway-backend.railway.app/api/health

# Test frontend (should show your portfolio)
# Open https://dharani-portfolio.vercel.app
```

---

## Environment Variables

### Vercel (Frontend)
```
NEXT_PUBLIC_API_URL=https://your-railway-backend.railway.app
```

### Railway (Backend)
```
NODE_ENV=production
PORT=8000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
CORS_ORIGIN=https://dharani-portfolio.vercel.app
FRONTEND_URL=https://dharani-portfolio.vercel.app
JWT_SECRET=your_secure_secret_key
```

---

## MongoDB Atlas Setup

1. Create account: https://mongodb.com/cloud/atlas
2. Create M0 cluster (free)
3. Get connection string
4. Add to Railway as `MONGODB_URI`

Connection string format:
```
mongodb+srv://username:password@cluster-name.mongodb.net/portfolio?retryWrites=true&w=majority
```

---

## Useful Links

| Service | URL |
|---------|-----|
| Vercel | https://vercel.com |
| Railway | https://railway.app |
| MongoDB Atlas | https://mongodb.com/cloud/atlas |
| GitHub | https://github.com |

---

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Frontend can't reach backend | Check NEXT_PUBLIC_API_URL is set in Vercel |
| CORS errors | Update CORS_ORIGIN in Railway env vars |
| MongoDB won't connect | Check connection string and IP allowlist in MongoDB Atlas |
| Build fails | Run `npm run build` locally to debug |
| No services showing in Railway | Try refreshing browser or reconnecting GitHub |

---

## Verification Steps

After deployment, verify everything works:

```bash
# 1. Check frontend is live
curl https://dharani-portfolio.vercel.app

# 2. Check backend is live
curl https://your-railway-backend.railway.app/api/health

# 3. Check API connection
# Open DevTools on your frontend
# Go to Network tab
# Make a request
# Verify it goes to your Railway backend URL

# 4. Check MongoDB is connected
# Look at Railway logs for "MongoDB connected" message
```

---

## Auto-Deployment

Both Vercel and Railway support automatic deployment:
- Every push to `main` branch triggers a new deployment
- Deployments take 1-5 minutes
- Check logs in their dashboards to verify

---

## Need Help?

1. Check deployment logs:
   - Vercel: Click deployment → Logs tab
   - Railway: Click service → Logs tab

2. Verify environment variables are set correctly

3. Test locally first: `npm run build && npm start`

4. Check full guide: See `DEPLOY_VERCEL_RAILWAY.md`
