# Complete Deployment Guide - Lab 6

## ⚠️ IMPORTANT: API Key Security

Your API key is currently hardcoded in `server/server.js`. This is okay for a student project, but be aware:
- Anyone who sees your code can see your API key
- For production, you should use environment variables
- For this assignment, hardcoded is fine

## Part 1: Push to GitHub and GitLab

### Step 1: Check Current Status

Open terminal in your project folder (`my-portfolio`) and run:

```bash
git status
```

This shows what files have changed.

### Step 2: Add All Changes

```bash
git add .
```

This stages all your changes.

### Step 3: Commit Changes

```bash
git commit -m "Lab 6: Added API integration for projects and weather"
```

### Step 4: Push to GitLab (Your Course Repo)

```bash
git push origin main
```

(Or `git push origin master` if your main branch is called master)

### Step 5: Push to GitHub (For Netlify)

If you haven't set up GitHub yet:

1. Go to https://github.com
2. Create a new repository (name it something like `my-portfolio-lab6`)
3. **DO NOT** initialize with README
4. Copy the repository URL

Then in your terminal:

```bash
# Add GitHub as a remote (replace URL with your actual GitHub repo URL)
git remote add github https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push github main
```

If you already have GitHub set up, just push:

```bash
git push github main
```

## Part 2: Deploy to Netlify

### Important Note About Backend

Netlify is for **static sites** (frontend only). Your backend needs to be deployed separately.

**Two Options:**

### Option A: Deploy Backend Separately (Recommended)

Deploy backend to a free service like Render or Railway, then update frontend to use that URL.

### Option B: Use Netlify Functions (More Complex)

Convert backend to Netlify Functions (requires code changes).

---

## Option A: Separate Backend Deployment (Easier)

### Step 1: Deploy Backend to Render (Free)

1. Go to https://render.com
2. Sign up (use GitHub account)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Select your repository
6. Configure:
   - **Name:** `my-portfolio-backend`
   - **Environment:** `Node`
   - **Build Command:** (leave empty)
   - **Start Command:** `node server/server.js`
   - **Root Directory:** `my-portfolio` (or just `/` if repo is the project folder)
7. Click "Create Web Service"
8. Wait for deployment (takes 2-5 minutes)
9. Copy the URL (looks like: `https://my-portfolio-backend.onrender.com`)

### Step 2: Update Frontend to Use Backend URL

We need to update the frontend to use the deployed backend URL instead of localhost.

1. Create a file `src/config.js`:

```javascript
// API configuration
const API_URL = import.meta.env.VITE_API_URL || 'https://your-backend-url.onrender.com';

export default API_URL;
```

2. Update `src/pages/Projects.jsx`:

Change:
```javascript
const response = await fetch('/api/projects');
```

To:
```javascript
import API_URL from '../config';
const response = await fetch(`${API_URL}/api/projects`);
```

3. Update `src/pages/Home.jsx`:

Change:
```javascript
const response = await fetch('/api/weather?city=Halifax');
```

To:
```javascript
import API_URL from '../config';
const response = await fetch(`${API_URL}/api/weather?city=Halifax`);
```

### Step 3: Deploy Frontend to Netlify

1. Go to https://app.netlify.com
2. Sign up (use GitHub account)
3. Click "Add new site" → "Import an existing project"
4. Choose "GitHub"
5. Authorize Netlify
6. Select your repository
7. Configure build settings:
   - **Base directory:** `my-portfolio` (or leave empty if repo is the project)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
8. Click "Deploy site"
9. Wait for deployment (2-3 minutes)

### Step 4: Set Environment Variable in Netlify

1. In Netlify dashboard, go to your site
2. Go to "Site settings" → "Environment variables"
3. Add new variable:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://your-backend-url.onrender.com`
4. Click "Save"
5. Go to "Deploys" → "Trigger deploy" → "Clear cache and deploy site"

---

## Option B: Simpler Approach (For Testing)

If you want to test quickly without deploying backend separately:

### Temporary: Keep Backend on Your Computer

1. Deploy frontend to Netlify (follow Step 3 above)
2. Keep your backend running locally
3. Use a tunneling service like ngrok:

```bash
# Install ngrok (one time)
# Download from https://ngrok.com

# Run your backend
npm run server

# In another terminal, run ngrok
ngrok http 3001
```

4. Copy the ngrok URL (like `https://abc123.ngrok.io`)
5. Update frontend config to use ngrok URL
6. Redeploy frontend

**Note:** This is only for testing. For assignment submission, use Option A.

---

## Quick Checklist

Before deploying:

- [ ] All code is committed and pushed to GitLab
- [ ] All code is pushed to GitHub
- [ ] Backend is deployed to Render/Railway
- [ ] Frontend config updated to use backend URL
- [ ] Frontend deployed to Netlify
- [ ] Environment variable set in Netlify
- [ ] Test both frontend and backend URLs work

## Testing After Deployment

1. **Test Backend:**
   - Visit: `https://your-backend.onrender.com/api/health`
   - Should see: `{"status":"OK","message":"Server is running"}`

2. **Test Frontend:**
   - Visit your Netlify URL
   - Check Projects page loads
   - Check Weather loads on Home page

## Common Issues

**Backend not working:**
- Check Render logs for errors
- Make sure API key is in server.js
- Check start command is correct

**Frontend can't connect to backend:**
- Check VITE_API_URL is set in Netlify
- Make sure backend URL is correct (no trailing slash)
- Redeploy frontend after setting environment variable

**CORS errors:**
- Backend already has CORS enabled, should work
- If issues, check Render allows requests from your Netlify domain

## Update README

Don't forget to update your README with:
- Netlify URL (frontend)
- Render/Railway URL (backend)
- GitLab URL
- GitHub URL

