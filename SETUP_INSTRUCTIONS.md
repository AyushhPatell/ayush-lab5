# Setup Instructions for Lab 6

## Step 1: Create .env file

Create a file named `.env` in the root folder (same level as package.json) with this content:

```
OPENWEATHER_API_KEY=your_api_key_here
PORT=3001
```

Replace `your_api_key_here` with your actual OpenWeatherMap API key.

## Step 2: Get OpenWeatherMap API Key

1. Go to https://openweathermap.org/api
2. Sign up for a free account
3. Go to "API keys" section
4. Copy your API key
5. Paste it in the .env file

**Note:** The API endpoint you mentioned (3.0 onecall) requires coordinates (lat/lon). We're using the simpler 2.5 weather API that works with city names, which is easier for this project.

## Step 3: How the API Works

### Projects API:
- Projects are stored in `server/data/projects.json`
- The backend server reads this file and serves it at `/api/projects`
- The frontend (Projects.jsx) fetches from this endpoint

### Weather API:
- Frontend calls `/api/weather?city=Halifax`
- Backend server calls OpenWeatherMap API with your key
- Backend returns the weather data to frontend

## Step 4: Run the Application

You need to run TWO servers:

**Option 1: Run both together (recommended)**
```bash
npm run dev:all
```

**Option 2: Run separately**
- Terminal 1 (Backend):
  ```bash
  npm run server
  ```
- Terminal 2 (Frontend):
  ```bash
  npm run dev
  ```

## Step 5: Check if it's working

1. Backend should show: "Server running on http://localhost:3001"
2. Frontend should open at: http://localhost:5173
3. Check browser console (F12) for any errors

## Troubleshooting

**If projects don't load:**
- Make sure backend server is running
- Check that `server/data/projects.json` exists
- Check browser console for errors

**If weather doesn't load:**
- Make sure .env file exists in root folder
- Make sure API key is correct (no spaces, no quotes)
- Make sure backend server is running
- Check backend terminal for error messages

