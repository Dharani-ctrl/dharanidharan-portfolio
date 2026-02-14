# Quick Start: Deploy MERN Portfolio to Render

## 5-Minute Deployment Checklist

### Step 1: Prepare MongoDB Atlas (2 minutes)
```
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Add Database User:
   - Username: your_username
   - Password: strong_password
4. Get Connection String:
   - Collections → Connect → Drivers
   - Copy: mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
5. Update username and password in the string
```

### Step 2: Push Code to GitHub (1 minute)
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### Step 3: Deploy Backend API (1 minute)

**On Render Dashboard:**
1. Click "New" → "Web Service"
2. Connect your GitHub repository
3. Fill in these settings:
   - **Name**: `dharanidharan-portfolio-api`
   - **Region**: Closest to you
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`

4. Click "Add Environment Variable" and add:
   ```
   MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   NODE_ENV = production
   ```

5. Click "Create Web Service"
6. Wait for green "Live" status (2-3 minutes)
7. **Copy your backend URL** (e.g., `https://dharanidharan-portfolio-api.onrender.com`)

### Step 4: Deploy Frontend (1 minute)

**On Render Dashboard:**
1. Click "New" → "Web Service"
2. Connect your GitHub repository
3. Fill in these settings:
   - **Name**: `dharanidharan-portfolio-web`
   - **Region**: Same as backend
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

4. Click "Add Environment Variable" and add:
   ```
   NEXT_PUBLIC_API_URL = https://dharanidharan-portfolio-api.onrender.com
   NODE_ENV = production
   ```

5. Click "Create Web Service"
6. Wait for green "Live" status (3-5 minutes)
7. **Your portfolio is live!** 🎉

---

## Environment Variables Quick Reference

### Backend (.env in server/)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
NODE_ENV=production
PORT=5000
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=https://dharanidharan-portfolio-api.onrender.com
NODE_ENV=production
```

---

## Verify Deployment

### Test Backend
```bash
curl https://dharanidharan-portfolio-api.onrender.com/api/health
# Should return: {"status":"Server is running","environment":"production","timestamp":"..."}
```

### Test Frontend
1. Open: `https://dharanidharan-portfolio-web.onrender.com`
2. Open DevTools (F12) → Console
3. Should see no CORS errors

---

## Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| **Backend won't build** | Check server/package.json has correct scripts |
| **MongoDB connection fails** | Verify MongoDB URI in Render env variables. Check IP whitelist in MongoDB Atlas (allow 0.0.0.0/0) |
| **CORS errors in console** | Backend CORS config needs frontend URL. Redeploy backend after updating |
| **Frontend shows blank page** | Check NEXT_PUBLIC_API_URL is set. Rebuild frontend. |
| **Cold start (slow first load)** | Free tier sleeps after 15 min. This is normal. Upgrade to Starter plan for always-on. |

---

## Next Steps

1. **Custom Domain**
   - In Render service → Custom Domain
   - Add your domain (dharanidharan.com)
   - Follow DNS setup instructions

2. **Monitor Logs**
   - Click service → Logs tab
   - Check for errors in real-time

3. **Update Code**
   - Push to GitHub
   - Render auto-redeploys
   - Or click "Manual Deploy" in Render

4. **Upgrade for Production**
   - Free tier limitations:
     - Services sleep after 15 min
     - Limited resources
   - Upgrade to Starter ($7/mo per service)
     - Always on
     - More resources
     - Better performance

---

## Useful Commands

### Local Testing Before Deploy
```bash
# Test backend locally
cd server
npm install
npm start
# Should run on http://localhost:5000

# Test frontend locally (in another terminal)
npm install
npm run dev
# Should run on http://localhost:3000
```

### Manual Redeploy
- Go to Render service
- Click "Manual Deploy" → "Deploy latest commit"
- Or just push to GitHub (auto-deploys)

### View Live Logs
- Go to service on Render
- Click "Logs" tab
- See real-time output

---

## Billing

- **Free Tier**: $0/month (with limitations)
- **Starter Plan**: $7/month per service
- **Standard**: $12/month per service
- **Professional**: $19/month per service

Free tier gets 0.5GB RAM, Starter gets 2GB RAM.

---

## Support Resources

- [Render Docs](https://render.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Express Deployment](https://expressjs.com/en/advanced/best-practice-performance.html)

---

## You're Done! 🚀

Your MERN portfolio is now live on Render with:
- ✅ Frontend (Next.js) - `https://dharanidharan-portfolio-web.onrender.com`
- ✅ Backend API (Express) - `https://dharanidharan-portfolio-api.onrender.com`
- ✅ Database (MongoDB Atlas) - Cloud hosted
- ✅ Auto-deployment on git push
- ✅ Free SSL/TLS certificates
