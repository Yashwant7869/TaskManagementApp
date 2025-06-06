# Deployment Guide

## Prerequisites
1. MongoDB Atlas account (free tier available)
2. Vercel account (free tier available)

## Step 1: Set up MongoDB Atlas
1. Go to https://www.mongodb.com/atlas/database
2. Create a free account
3. Create a new cluster (choose free tier)
4. Create a database user with username/password
5. Whitelist your IP addresses (or use 0.0.0.0/0 for all IPs)
6. Get your connection string from the "Connect" button

## Step 2: Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to link your project
4. Set environment variables in Vercel dashboard:
   - MONGODB_URI: Your MongoDB Atlas connection string
   - NEXTAUTH_SECRET: Generate a strong random string
   - NEXTAUTH_URL: Your Vercel app URL
   - JWT_SECRET: Generate another strong random string

## Step 3: Environment Variables
In Vercel dashboard, add these environment variables:
- `MONGODB_URI` = mongodb+srv://username:password@cluster.mongodb.net/database
- `NEXTAUTH_SECRET` = your-secret-key (generate with: `openssl rand -base64 32`)
- `NEXTAUTH_URL` = https://your-app.vercel.app
- `JWT_SECRET` = your-jwt-secret (generate with: `openssl rand -base64 32`)

## Alternative Hosting Options
- **Netlify**: Good for static sites, requires serverless functions
- **Railway**: Easy deployment with database included
- **Render**: Free tier with automatic deployments
- **AWS/Google Cloud/Azure**: More complex but powerful options

## Quick Deploy Commands
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables (or use Vercel dashboard)
vercel env add MONGODB_URI
vercel env add NEXTAUTH_SECRET
vercel env add NEXTAUTH_URL
vercel env add JWT_SECRET
```
