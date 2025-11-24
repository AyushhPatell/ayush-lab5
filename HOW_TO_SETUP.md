# How to Set Up Your Lab 6 Project

## Understanding How It Works

### Projects Page:
- **Before:** Projects were hardcoded in `Projects.jsx` file
- **Now:** Projects are stored in `server/data/projects.json` file
- **How it works:**
  1. Backend server reads `server/data/projects.json`
  2. Frontend calls `/api/projects` to get the data
  3. Projects page displays the data

### Weather on Home Page:
- **How it works:**
  1. Frontend calls `/api/weather?city=Halifax`
  2. Backend server calls OpenWeatherMap API with your API key
  3. Backend gets weather data and sends it to frontend
  4. Home page displays the weather

## Step-by-Step Setup

### Step 1: Create .env File

1. In the root folder (where `package.json` is), create a new file named `.env`
2. Add this content (replace with YOUR actual API key):

```
OPENWEATHER_API_KEY=your_actual_api_key_here
PORT=3001
```

**Important:** 
- No spaces around the `=`
- No quotes around the API key
- Just paste your key directly

### Step 2: About Your API Key

The API endpoint you found (`3.0/onecall`) is different from what we're using. That's okay! Your API key works with ALL OpenWeatherMap APIs. We're using the simpler `2.5/weather` API which:
- Works with city names (easier than coordinates)
- Is free
- Works with any OpenWeatherMap API key

### Step 3: Run the Servers

You MUST run the backend server for the APIs to work!

**Easy way (run both at once):**
```bash
npm run dev:all
```

**Or run separately:**
- Open Terminal 1:
  ```bash
  npm run server
  ```
  You should see: "Server running on http://localhost:3001"

- Open Terminal 2:
  ```bash
  npm run dev
  ```
  Frontend will open at http://localhost:5173

### Step 4: Test It

1. **Check backend is running:**
   - Go to http://localhost:3001/api/health
   - Should see: `{"status":"OK","message":"Server is running"}`

2. **Check projects:**
   - Go to http://localhost:3001/api/projects
   - Should see JSON with your projects

3. **Check weather:**
   - Go to http://localhost:3001/api/weather?city=Halifax
   - Should see weather data (if API key is set correctly)

## Common Problems

### "Could not load projects"
- **Solution:** Make sure backend server is running (`npm run server`)
- Check that `server/data/projects.json` file exists

### "Could not load weather"
- **Solution 1:** Make sure `.env` file exists in root folder
- **Solution 2:** Make sure API key in `.env` is correct (no spaces, no quotes)
- **Solution 3:** Make sure backend server is running
- **Solution 4:** Check backend terminal for error messages

### Backend won't start
- Make sure you ran `npm install` first
- Check that port 3001 is not already in use

## File Structure

```
my-portfolio/
├── .env                    ← CREATE THIS FILE with your API key
├── package.json
├── server/
│   ├── server.js          ← Backend server (reads projects.json, calls weather API)
│   └── data/
│       └── projects.json  ← Projects data stored here
└── src/
    ├── pages/
    │   ├── Home.jsx       ← Calls /api/weather
    │   └── Projects.jsx   ← Calls /api/projects
    └── ...
```

## Quick Test

After setting up, test in this order:

1. Start backend: `npm run server`
2. Check terminal shows: "Server running on http://localhost:3001"
3. Check terminal shows: "✓ Weather API key is set" (if .env is correct)
4. Open browser to http://localhost:5173
5. Check Projects page - should show projects
6. Check Home page - should show weather

If something doesn't work, check the browser console (F12) and backend terminal for error messages!

