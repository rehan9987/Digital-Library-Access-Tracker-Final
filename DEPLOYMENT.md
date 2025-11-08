# Deployment Guide - GitHub Pages

## ✅ Pre-Deployment Checklist

Your project is **ready for deployment**! Just follow these steps:

### 1. Push Code to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Enable GitHub Pages (One-time setup)

1. Go to your GitHub repository
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. Click **Save**

### 3. Trigger Deployment

The deployment will automatically start when you:
- Push to `main` or `master` branch, OR
- Manually trigger from **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

### 4. Wait for Deployment

1. Go to **Actions** tab in your repository
2. Watch the workflow run (takes ~2-3 minutes)
3. When complete, you'll see a green checkmark
4. Your site will be available at:
   - `https://<your-username>.github.io/<repository-name>/`

## 📝 Important Notes

### Base Path Configuration

- **Project Pages** (default): Works automatically
  - URL: `https://username.github.io/repo-name/`
  - Base path is automatically set to `/repo-name/`

- **User/Organization Pages**: If deploying to `username.github.io`
  - You need to change the base path in `.github/workflows/deploy.yml`
  - Change line 38 from: `BASE_PATH: /${{ github.event.repository.name }}/`
  - To: `BASE_PATH: /`

### Branch Names

The workflow triggers on pushes to:
- `main` branch (default)
- `master` branch

If your default branch has a different name, update `.github/workflows/deploy.yml` line 6-7.

## 🔧 Troubleshooting

### Deployment Fails

1. **Check Actions tab** for error messages
2. **Common issues**:
   - Missing `package-lock.json` - Run `npm install` locally and commit
   - Build errors - Check TypeScript/ESLint errors
   - Permission issues - Make sure GitHub Pages is enabled

### Site Not Loading

1. **Check the URL** - Make sure you're using the correct repository name
2. **Wait 1-2 minutes** - GitHub Pages can take time to propagate
3. **Clear browser cache** - Hard refresh (Ctrl+F5 or Cmd+Shift+R)
4. **Check Actions tab** - Ensure deployment completed successfully

### Routing Not Working

1. Make sure `public/404.html` exists
2. Verify `public/.nojekyll` exists
3. Check that React Router basename is configured correctly

## 🚀 Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the project
BASE_PATH=/your-repo-name/ npm run build

# The dist/ folder contains the built files
# You can upload this to any static hosting service
```

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## ✨ That's It!

Once you complete steps 1-2 above, your site will automatically deploy on every push to the main branch. No additional configuration needed!

