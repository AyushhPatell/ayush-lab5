# Step-by-Step Deployment Guide

## Part 1: Push to GitLab and GitHub

### Step 1: Check what changed
```bash
git status
```

### Step 2: Add all changes
```bash
git add .
```

### Step 3: Commit
```bash
git commit -m "Lab 6: Added API integration for projects and weather"
```

### Step 4: Push to GitLab
```bash
git push origin main
```
(If it says "master" instead of "main", use: `git push origin master`)

### Step 5: Push to GitHub

**If you don't have GitHub repo yet:**
1. Go to https://github.com
2. Click "+" → "New repository"
3. Name it: `my-portfolio-lab6`
4. **DO NOT** check "Initialize with README"
5. Click "Create repository"
6. Copy the repository URL

**Then in terminal:**
```bash
git remote add github https://github.com/YOUR_USERNAME/my-portfolio-lab6.git
git push github main
```

**If you already have GitHub repo:**
```bash
git push github main
```

---

## Part 2: Deploy Backend to Render (Free)

### Step 1: Sign up
1. Go to https://render.com
2. Click "Get Started for Free"
3. Sign up with GitHub (easiest)

### Step 2: Create Web Service
1. Click "New +" button
2. Click "Web Service"
3. Connect your GitHub account if asked
4. Select your repository (`my-portfolio-lab6` or whatever you named it)

### Step 3: Configure
Fill in these settings:
- **Name:** `my-portfolio-backend`
- **Environment:** Select "Node"
- **Region:** Choose closest to you
- **Branch:** `main` (or `master`)
- **Root Directory:** Leave empty (or type `my-portfolio` if your repo has the project in a subfolder)
- **Build Command:** Leave empty
- **Start Command:** `node server/server.js`
- **Plan:** Free

### Step 4: Deploy
1. Click "Create Web Service"
2. Wait 2-5 minutes for deployment
3. When it says "Live", copy the URL (looks like: `https://my-portfolio-backend.onrender.com`)

**Save this URL - you'll need it!**

### Step 5: Test Backend
Open in browser: `https://your-backend-url.onrender.com/api/health`

Should see: `{"status":"OK","message":"Server is running"}`

---

## Part 3: Deploy Frontend to Netlify

### Step 1: Sign up
1. Go to https://app.netlify.com
2. Click "Sign up"
3. Choose "Sign up with GitHub"

### Step 2: Import Project
1. Click "Add new site"
2. Click "Import an existing project"
3. Click "Deploy with GitHub"
4. Authorize Netlify if asked
5. Select your repository

### Step 3: Configure Build
Fill in:
- **Base directory:** Leave empty (or `my-portfolio` if needed)
- **Build command:** `npm run build`
- **Publish directory:** `dist`

### Step 4: Add Environment Variable
**BEFORE clicking "Deploy":**

1. Click "Show advanced"
2. Click "New variable"
3. Add:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://my-portfolio-backend-rqc3.onrender.com`
4. Click "Deploy site"

### Step 5: Wait for Deployment
- Takes 2-3 minutes
- You'll see "Site is live" when done
- Copy your Netlify URL (looks like: `https://your-site-name.netlify.app`)

---

## Part 4: Test Everything

### Test 1: Backend
Visit: `https://your-backend.onrender.com/api/projects`
Should see JSON with your projects

### Test 2: Frontend
1. Visit your Netlify URL
2. Go to Projects page - should show projects
3. Go to Home page - should show weather

---

## Troubleshooting

### Backend not working?
- Check Render logs (click on your service → "Logs")
- Make sure API key is in `server/server.js`
- Check start command is: `node server/server.js`

### Frontend can't connect?
- Go to Netlify → Site settings → Environment variables
- Make sure `VITE_API_URL` is set correctly
- Redeploy: Deploys → Trigger deploy → Clear cache and deploy

### Projects/Weather not loading?
- Open browser console (F12)
- Check for errors
- Make sure backend URL in Netlify env var matches your Render URL exactly

---

## Update Your README

Add these URLs to your README file:

```
## Deployment Information
- Netlify URL: https://your-site.netlify.app
- Backend URL: https://your-backend.onrender.com
- GitHub URL: https://github.com/your-username/your-repo
- GitLab URL: https://git.cs.dal.ca/your-username/lab6
```

---

## Quick Reference

**Backend URL:** `https://your-backend.onrender.com`
**Frontend URL:** `https://your-site.netlify.app`
**Environment Variable in Netlify:** `VITE_API_URL` = your backend URL

That's it! Your site should be live and working! 🎉

