# GitHub Setup for Vercel + Railway Deployment

## Prerequisites
- GitHub account
- Your project code ready
- Git installed locally

---

## Step 1: Create GitHub Repository

### Option A: New Repository (Recommended)

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `dharani-portfolio`
3. Description: `Full-stack MERN portfolio application`
4. **Public** or **Private** (your choice)
5. Click **"Create repository"**

### Option B: Push Existing Code to GitHub

If you haven't pushed your code yet:

```bash
# Navigate to your project directory
cd /path/to/dharani-portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: MERN portfolio application"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/dharani-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 2: Verify Repository Structure

Your GitHub repository should look like this:

```
dharani-portfolio/
├── .github/
├── app/
├── components/
├── lib/
├── public/
├── server/              ← Backend Express server
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── styles/
├── next.config.mjs
├── package.json         ← Frontend Next.js
├── tsconfig.json
├── .env.local           ← DO NOT COMMIT (add to .gitignore)
├── .gitignore
├── README.md
└── DEPLOY_VERCEL_RAILWAY.md
```

**Important:** Make sure `.gitignore` includes:
```
.env
.env.local
node_modules/
.next/
dist/
```

---

## Step 3: Add Deployment Files to Git

Add the deployment guides to your repository:

```bash
# These files should already exist:
# - DEPLOY_VERCEL_RAILWAY.md
# - DEPLOYMENT_QUICK_REFERENCE.md

git add DEPLOY_VERCEL_RAILWAY.md DEPLOYMENT_QUICK_REFERENCE.md
git commit -m "Add deployment documentation"
git push origin main
```

---

## Step 4: Connect Vercel to GitHub

### Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"** button
3. Click **"Import Git Repository"**
4. Search for `dharani-portfolio` and select it
5. Click **"Import"**

**Configure Project:**

- **Framework Preset**: Next.js (auto-selected)
- **Root Directory**: Leave blank (frontend is at root)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

**Environment Variables:**
```
NEXT_PUBLIC_API_URL=https://placeholder.railway.app
```
(Update this after deploying backend)

**Click "Deploy"** → Wait 2-3 minutes

Your frontend is now live at: `https://dharani-portfolio.vercel.app`

---

## Step 5: Connect Railway to GitHub

### Deploy Backend to Railway

1. Go to [railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Click **"New Project"**
4. Click **"Deploy from GitHub repo"**
5. Select `dharani-portfolio` repository
6. Click **"Deploy"**

**Configure Service:**

Railway auto-detects Node.js. Configure if needed:

- **Root Directory**: `server`
- **Build Command**: (leave empty or `npm install`)
- **Start Command**: `npm start`

**Add Environment Variables** (in Railway dashboard):

1. Click your service
2. Go to **"Variables"** tab
3. Add each variable:

```
NODE_ENV=production
PORT=8000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
CORS_ORIGIN=https://dharani-portfolio.vercel.app
FRONTEND_URL=https://dharani-portfolio.vercel.app
JWT_SECRET=your_very_secure_random_string_here
```

**Deploy** → Railway auto-deploys (1-2 minutes)

Your backend is now live at: `https://your-railway-app-name.railway.app`

---

## Step 6: Connect Frontend to Backend

### Update Vercel Environment Variables

1. Go to [vercel.com](https://vercel.com) → Your project
2. Click **"Settings"**
3. Go to **"Environment Variables"**
4. Find `NEXT_PUBLIC_API_URL`
5. Update value to your Railway URL:
   ```
   https://your-railway-app-name.railway.app
   ```
6. Click **"Save"**
7. Go to **"Deployments"** → Latest deployment → Click **"Redeploy"**

Wait 2-3 minutes for redeployment.

---

## Step 7: Test Everything

### Test Backend is Live
```bash
curl https://your-railway-app-name.railway.app/api/health
```

Expected response:
```json
{
  "status": "Server is running",
  "environment": "production",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Test Frontend is Live
Open: `https://dharani-portfolio.vercel.app`

Should see your portfolio homepage.

### Test Frontend-Backend Connection

1. Open `https://dharani-portfolio.vercel.app`
2. Press `F12` to open DevTools
3. Go to **"Network"** tab
4. Perform an action that makes an API call (e.g., fill contact form)
5. Look for API request in Network tab
6. Verify it goes to your Railway URL

---

## Continuous Deployment (Auto-Deploy)

Both Vercel and Railway automatically deploy when you push to GitHub:

```bash
# Make changes to your code
# Commit and push
git add .
git commit -m "Update portfolio"
git push origin main

# Vercel and Railway automatically deploy within 1-5 minutes
# Check deployment status in their dashboards
```

---

## Troubleshooting

### Repository not showing in Vercel/Railway

**Solution:**
1. Make sure repository is **Public** (or grant access if Private)
2. Log out and log back in
3. Try connecting GitHub account again

### Build fails on Vercel

**Solution:**
1. Check `next.config.mjs` exists
2. Run locally: `npm run build`
3. Fix errors, commit, and push
4. Redeploy

### Build fails on Railway

**Solution:**
1. Check server/package.json has all dependencies
2. Check server/server.js exists and is valid
3. View Railway logs for error details
4. Fix, commit, push, Railway auto-redeploys

### Can't find repository in GitHub

**Solution:**
1. Go to [github.com/settings/applications](https://github.com/settings/applications)
2. Find Vercel or Railway
3. Click **"Authorize"** or grant repository access
4. Try connecting again

---

## Important: Keep Sensitive Data Secure

### DO NOT commit to GitHub:
- `.env` files with real credentials
- API keys
- Database passwords
- JWT secrets

### DO:
- Add to `.gitignore`
- Use `.env.example` as template
- Store secrets only in Vercel/Railway dashboards
- Never share `.env` files

---

## Next Steps

1. ✅ Create GitHub repository
2. ✅ Push code to GitHub
3. ✅ Deploy frontend to Vercel
4. ✅ Deploy backend to Railway
5. ✅ Test everything
6. ✅ Make updates and watch auto-deployment

Your MERN portfolio is now live! 🚀
