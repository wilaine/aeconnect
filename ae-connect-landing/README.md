# AE Connect Landing Page

A modern, responsive landing page built with Next.js and configured for static export to GitHub Pages.

## 🚀 Features

- **Static Site Generation (SSG)**: Optimized for GitHub Pages deployment
- **Mobile-First Design**: Fully responsive across all devices
- **Modern Tech Stack**: Next.js 15, React 19, Tailwind CSS 4
- **Framer Motion**: Smooth animations and transitions
- **External API Integration**: Ready for AWS API Gateway or any REST API
- **GitHub Actions**: Automated deployment to GitHub Pages

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd ae-connect-landing
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`:
```bash
NEXT_PUBLIC_API_BASE_URL=https://your-api-gateway.amazonaws.com
```

### Running Locally

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
# or
pnpm build
```

This generates static files in the `out/` directory.

## 📦 Deployment to GitHub Pages

### Automatic Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Steps:

1. **Push to GitHub**: Push your code to a GitHub repository

2. **Configure Repository Settings**:
   - Go to your repository Settings → Pages
   - Source: Select "GitHub Actions"
   - The deployment will start automatically on push to `main` branch

3. **Update Configuration** (if needed):
   
   If your repository is **NOT** `username.github.io`, update `next.config.ts`:
   
   ```typescript
   const nextConfig: NextConfig = {
     // ... other config
     basePath: '/your-repository-name',
     assetPrefix: '/your-repository-name/',
   };
   ```

4. **Environment Variables**:
   - Go to repository Settings → Secrets and variables → Actions
   - Add any required environment variables as repository secrets

#### Manual Deployment

You can also deploy manually:

```bash
# Build the static site
npm run build

# The static files will be in the 'out' directory
# Upload these files to your web server
```

### Deployment Workflow

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:

1. Installs Node.js and dependencies
2. Builds the static site with `npm run build`
3. Uploads the `out/` directory to GitHub Pages
4. Deploys to your GitHub Pages URL

## 🔧 Configuration

### Repository-Specific Settings

If your repository name is **not** `username.github.io`, you need to configure the base path:

1. Open `next.config.ts`
2. Uncomment and update these lines:
```typescript
basePath: '/your-repository-name',
assetPrefix: '/your-repository-name/',
```

### API Integration

The site is configured to work with external APIs:

- **Contact Form**: Uses `src/lib/api.ts` for form submissions
- **Newsletter**: Ready for newsletter API integration
- **CORS**: Ensure your API allows requests from `https://username.github.io`

### Environment Variables

- `NEXT_PUBLIC_API_BASE_URL`: Your API endpoint (required for contact forms)
- Add other public environment variables as needed

## 📁 Project Structure

```
ae-connect-landing/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   ├── contact-form.tsx # Contact form with API integration
│   │   └── ...             # Other components
│   ├── lib/
│   │   ├── api.ts          # API utilities
│   │   └── utils.ts        # Utility functions
│   └── config/
│       └── site.ts         # Site configuration
├── next.config.ts          # Next.js configuration
├── package.json           # Dependencies and scripts
└── .env.example           # Environment variables template
```

## 🎯 Key Features Explained

### Static Export Configuration

The site is configured for static export in `next.config.ts`:

- `output: "export"`: Enables static site generation
- `images.unoptimized: true`: Disables Next.js image optimization
- `trailingSlash: true`: Adds trailing slashes to prevent 404s
- `distDir: 'out'`: Outputs static files to `out/` directory

### API Route Replacement

Since static sites can't have server-side API routes, the original API routes have been replaced with:

- `src/lib/api.ts`: Client-side API utilities
- `src/components/contact-form.tsx`: Contact form with external API integration

### GitHub Pages Compatibility

The deployment is optimized for GitHub Pages:

- Static file generation
- Proper asset paths
- GitHub Actions integration
- Automatic deployments

## 🚨 Important Notes

1. **API Endpoints**: Update `NEXT_PUBLIC_API_BASE_URL` with your actual API
2. **CORS Configuration**: Ensure your API allows requests from your GitHub Pages domain
3. **Repository Name**: Update `basePath` and `assetPrefix` if not using `username.github.io`
4. **Branch Protection**: The workflow triggers on pushes to `main` branch
5. **Build Errors**: Check GitHub Actions logs if deployment fails

## 📞 Support

For questions or issues:
- Check GitHub Actions logs for deployment issues
- Verify environment variables are set correctly
- Ensure API endpoints are accessible and CORS-enabled

---

**Live Site**: Your site will be available at `https://username.github.io/repository-name/`
