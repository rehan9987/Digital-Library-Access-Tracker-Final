# Troubleshooting White Page Issue

## Quick Fixes

### 1. Check if Development Server is Running

**If running locally:**
```bash
cd campus-book-watch-main
npm install
npm run dev
```

Then open: `http://localhost:8080`

### 2. Check Browser Console

1. Open your browser's Developer Tools (Press `F12` or `Ctrl+Shift+I`)
2. Go to the **Console** tab
3. Look for any red error messages
4. Share the error messages to identify the issue

### 3. Common Issues and Solutions

#### Issue: "Cannot find module" errors
**Solution:** Make sure you've installed dependencies:
```bash
npm install
```

#### Issue: Port 8080 already in use
**Solution:** Kill the process using port 8080 or change the port in `vite.config.ts`

#### Issue: White page with no errors
**Possible causes:**
- JavaScript is disabled in browser
- Ad blocker blocking scripts
- Network issues loading resources
- Cache issues

**Solution:**
1. Try a different browser
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito/private mode
4. Check Network tab in DevTools for failed requests

#### Issue: "Failed to load resource" errors
**Solution:** 
- Make sure you're accessing via `http://localhost:8080` (not file://)
- Check that Vite dev server is running
- Verify all files are in the correct locations

### 4. Verify File Structure

Make sure these files exist:
- `src/main.tsx`
- `src/App.tsx`
- `src/index.css`
- `src/assets/books.csv`
- `src/assets/users.csv`
- `src/assets/transactions.csv`

### 5. Test the Build

Try building the project:
```bash
npm run build
npm run preview
```

This will help identify if the issue is with development or production build.

### 6. Check for TypeScript Errors

Run the linter:
```bash
npm run lint
```

Fix any errors that appear.

## Debugging Steps

1. **Open Browser Console** (F12)
2. **Check for errors** in Console tab
3. **Check Network tab** for failed requests (red items)
4. **Verify the root element exists** - In console, type: `document.getElementById('root')`
5. **Check if React is loading** - Look for React DevTools in browser extensions

## Getting Help

If the issue persists, please provide:
1. Browser console errors (screenshot or copy/paste)
2. Network tab errors (screenshot)
3. Steps you took to run the app
4. Operating system and browser version

## Additional Checks

### Verify Node.js Version
```bash
node --version
```
Should be Node.js 20 or higher.

### Verify npm Installation
```bash
npm --version
```

### Reinstall Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

## Still Not Working?

1. Check that you're in the correct directory
2. Verify all files were downloaded correctly
3. Try cloning a fresh copy of the repository
4. Check for firewall/antivirus blocking Node.js

