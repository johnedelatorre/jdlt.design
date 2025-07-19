# 🚀 Deployment Workflow

## Branch Strategy

### 🔧 `main` Branch (Development)
- **Purpose:** Active development and testing
- **Use for:** All code changes, experiments, debugging
- **Deploy to:** Local development server (`npm run dev`)

### 🌐 `production` Branch (Live Site)
- **Purpose:** Stable, production-ready code
- **Connected to:** Vercel for live deployment
- **Use for:** Only tested, stable releases

## Workflow

### 1. **Development Work** (on `main` branch)
```bash
# You're already on main - continue working as usual
git add .
git commit -m "Your changes"
git push origin main
```

### 2. **Deploy to Production** (when ready)
```bash
# Switch to production branch
git checkout production

# Merge stable changes from main
git merge main

# Push to production (triggers Vercel deployment)
git push origin production

# Switch back to main for continued development
git checkout main
```

### 3. **Emergency Rollback** (if needed)
```bash
# Production branch allows easy rollback to previous version
git checkout production
git reset --hard HEAD~1  # Go back one commit
git push --force origin production
```

## Vercel Setup

1. **Connect to `production` branch** (not main)
2. This ensures only tested code goes live
3. `main` branch stays free for development

## Benefits

✅ **Safe Development:** Work freely on `main` without affecting live site  
✅ **Controlled Releases:** Choose when to promote code to production  
✅ **Easy Rollback:** Quick revert if issues arise  
✅ **Preview Testing:** Test thoroughly before going live 