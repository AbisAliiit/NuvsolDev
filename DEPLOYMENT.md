# Azure Static Web Apps Deployment Guide

This guide will help you deploy your NUVSOL website to Azure Static Web Apps with CI/CD.

## Prerequisites

- Azure account (free tier available)
- GitHub account
- Your code pushed to a GitHub repository

## Step 1: Create Azure Static Web App

1. Go to [Azure Portal](https://portal.azure.com)
2. Click **Create a resource**
3. Search for **"Static Web App"** and select it
4. Click **Create**

### Fill in the details:

- **Subscription**: Your Azure subscription
- **Resource Group**: Create new (e.g., `nuvsol-rg`)
- **Name**: `nuvsol-website` (or your preferred name)
- **Plan type**: **Free**
- **Region**: Choose closest to you (e.g., "East US 2")
- **Source**: **GitHub**
- **Sign in with GitHub**: Click and authorize Azure to access your GitHub
- **Organization**: Your GitHub username or organization
- **Repository**: Select your repository
- **Branch**: `main` (or `master`)
- **Build Presets**: **Custom**
- **App location**: `/`
- **Api location**: (leave empty)
- **Output location**: `out`

5. Click **Review + Create**, then **Create**

## Step 2: Get Deployment Token

1. After the resource is created, go to your **Static Web App** in Azure Portal
2. Click on **Manage deployment token** in the left menu
3. **Copy the token** - you'll need this for GitHub

## Step 3: Add GitHub Secret

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
5. Value: Paste the deployment token you copied from Azure
6. Click **Add secret**

## Step 4: Push Your Code

The CI/CD workflow is already set up! Just push your code:

```bash
git add .
git commit -m "Add Azure Static Web Apps CI/CD"
git push origin main
```

## Step 5: Monitor Deployment

1. **GitHub Actions**:
   - Go to your repo → **Actions** tab
   - You'll see the workflow running
   - Click on it to see build progress

2. **Azure Portal**:
   - Go to your Static Web App → **Overview**
   - Check deployment status
   - Once complete, click the **URL** to view your live site!

## How It Works

1. **Push to main branch** → GitHub Actions triggers automatically
2. **Build process**:
   - Installs Node.js 20
   - Installs dependencies (`npm ci`)
   - Builds Next.js app (`npm run build`)
   - Creates static files in `out` folder
3. **Deploy to Azure**:
   - Uploads `out` folder to Azure Static Web Apps
   - Your site goes live!

## Pull Request Previews

When you create a pull request:
- A **staging environment** is automatically created
- You get a preview URL to test changes
- When PR is merged, it deploys to production

## Custom Domain (Optional)

1. Go to Azure Portal → Your Static Web App → **Custom domains**
2. Click **Add**
3. Follow the instructions to verify your domain
4. SSL certificate is automatically provisioned (free!)

## Environment Variables

If you need environment variables:

1. Go to Azure Portal → Your Static Web App → **Configuration**
2. Click **Application settings**
3. Add your variables (they'll be available as `process.env.NEXT_PUBLIC_*`)

## Troubleshooting

### Build Fails
- Check GitHub Actions logs
- Verify `next.config.ts` has `output: 'export'`
- Ensure all dependencies are in `package.json`

### Deployment Fails
- Verify the GitHub secret `AZURE_STATIC_WEB_APPS_API_TOKEN` is set correctly
- Check that `output_location: "out"` matches your build output
- Review Azure Portal deployment logs

### Site Not Loading
- Check Azure Portal → **Overview** for errors
- Verify the build completed successfully
- Check browser console for errors

## Cost

- **Azure Static Web Apps Free Tier**: $0/month
  - 100 GB bandwidth/month
  - Custom domains
  - SSL certificates
  - Authentication (up to 50K users/month)
  
- **GitHub Actions**: 
  - Public repos: Free unlimited
  - Private repos: 2,000 free minutes/month

**Total Cost: $0** for typical usage! 🎉

## Next Steps

- Set up custom domain
- Configure environment variables
- Add staging/production branches
- Set up monitoring and analytics

---

**Your site is now live with automatic CI/CD!** 🚀

Every push to `main` automatically builds and deploys your site.

