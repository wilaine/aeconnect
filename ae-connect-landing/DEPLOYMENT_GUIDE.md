# 🚀 Next.js Static Export & GitHub Pages Deployment - Complete Setup Guide

## ✅ Configuration Completed

Your Next.js project has been successfully configured for static export and GitHub Pages deployment!

## 📋 What Was Configured

### 1. Next.js Configuration (`next.config.ts`)

```typescript
import type { NextConfig } from \"next\";

const nextConfig: NextConfig = {
  // Enable static export
  output: \"export\",
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Enable trailing slash to avoid 404 on GitHub Pages
  trailingSlash: true,
  
  // Configure base path and asset prefix if not username.github.io
  // Uncomment and modify these lines based on your repository name:
  // basePath: '/your-repository-name',
  // assetPrefix: '/your-repository-name/',
  
  // Ensure compatibility with static export
  distDir: 'out',
  
  // Disable ESLint during builds (optional, for faster builds)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
```

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)

- ✅ Automatically builds and deploys to GitHub Pages
- ✅ Triggers on push to `main` branch
- ✅ Uses official GitHub Pages actions
- ✅ Caches dependencies for faster builds

### 3. API Integration (`src/lib/api.ts`)

- ✅ Client-side API utilities for external API calls
- ✅ Contact form integration
- ✅ Newsletter subscription ready
- ✅ Environment variable support

### 4. Build Scripts Updated

```json
{
  \"scripts\": {
    \"dev\": \"next dev --turbopack\",
    \"build\": \"next build\",
    \"start\": \"next start\",
    \"lint\": \"eslint\",
    \"export\": \"next build && next export\"
  }
}
```

## 🔧 Repository-Specific Configuration

### If Your Repository is NOT `username.github.io`:

1. **Update `next.config.ts`**:
   ```typescript
   // Uncomment and replace 'your-repo-name' with your actual repository name
   basePath: '/your-repo-name',
   assetPrefix: '/your-repo-name/',
   ```

2. **Example for repository `ae-connect-landing`**:
   ```typescript
   basePath: '/ae-connect-landing',
   assetPrefix: '/ae-connect-landing/',
   ```

## 🚀 Deployment Steps

### Step 1: Push to GitHub
```bash
git add .
git commit -m \"Configure static export and GitHub Pages deployment\"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **\"GitHub Actions\"**
4. The deployment will start automatically!

### Step 3: Configure Environment Variables (if needed)
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add repository secrets:
   - `NEXT_PUBLIC_API_BASE_URL` (your API endpoint)

## 🌐 Your Site URLs

- **If `username.github.io`**: `https://username.github.io/`
- **If other repository**: `https://username.github.io/repository-name/`

## 📁 Generated Files Structure

```
✅ .github/workflows/deploy.yml    # Auto-deployment workflow
✅ next.config.ts                  # Static export configuration
✅ src/lib/api.ts                  # API utilities
✅ src/components/contact-form.tsx # Contact form component
✅ .env.example                    # Environment variables template
✅ README.md                       # Updated documentation
✅ out/                            # Generated static files (after build)
```

## 🧪 Testing

### Local Testing
```bash
# Build static site
npm run build

# The static files will be in 'out/' directory
# You can serve them with any static file server
pnpm dlx serve out
```

### Verify Deployment
- ✅ Build completed successfully
- ✅ Static files generated in `out/` directory
- ✅ GitHub Actions workflow created
- ✅ Configuration files updated

## 🔗 API Integration

### Environment Variables
Copy `.env.example` to `.env.local` and update:
```bash
NEXT_PUBLIC_API_BASE_URL=https://your-api-gateway.amazonaws.com
```

### CORS Configuration
Ensure your API allows requests from:
- `https://username.github.io` (if username.github.io repository)
- `https://username.github.io/repository-name` (if other repository)

## 🚨 Important Notes

1. **Repository Name**: If not `username.github.io`, update `basePath` and `assetPrefix`
2. **API Endpoints**: Update `NEXT_PUBLIC_API_BASE_URL` with your actual API
3. **Branch**: Workflow triggers on `main` branch pushes
4. **First Deployment**: May take a few minutes to propagate
5. **Custom Domain**: Can be configured in GitHub Pages settings

## 🐛 Troubleshooting

### Build Fails
- Check GitHub Actions logs in the **Actions** tab
- Verify `next.config.ts` syntax
- Ensure all dependencies are in `package.json`

### 404 Errors
- Verify `basePath` and `assetPrefix` configuration
- Check `trailingSlash: true` is set
- Ensure GitHub Pages is enabled

### API Calls Fail
- Verify CORS configuration on your API
- Check environment variables are set correctly
- Confirm API endpoint URLs

## 🎉 Success!

Your Next.js project is now ready for GitHub Pages! Just push to the `main` branch and your site will automatically deploy.

**Next Steps:**
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Visit your live site!

---
*Generated on: 2025-09-18*