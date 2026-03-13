# 🚀 Deployment Guide

## 📋 Quick Start for GitHub + Vercel Deployment

### 1. GitHub पर Upload करें

```bash
# Git repository initialize करें
git init
git add .
git commit -m "Initial commit - Portfolio Website"

# GitHub पर push करें
git branch -M main
git remote add origin https://github.com/adarshjaiswalxadyo-spec/portfolio.git
git push -u origin main
```

### 2. Vercel पर Deploy करें

#### Method 1: Vercel CLI (Recommended)
```bash
# Vercel CLI install करें
npm i -g vercel

# Deploy करें
vercel --prod

# Custom domain add करने के लिए
vercel --prod --name your-portfolio-name
```

#### Method 2: Vercel Dashboard
1. [vercel.com](https://vercel.com) पर जाएं
2. GitHub account से login करें
3. "Import Project" पर click करें
4. अपना GitHub repository select करें
5. Settings confirm करें और "Deploy" पर click करें

### 3. Environment Variables (Vercel पर)

Vercel dashboard में जाकर ये environment variables add करें:

```
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://your-app-name.vercel.app
```

### 4. Backend Deploy (Optional)

अगर आपको backend भी deploy करना है:

#### Vercel Serverless Functions
```bash
# api/ folder बनाएं
mkdir api

# server/index.js को api/health.js में copy करें
cp server/index.js api/health.js
```

#### Render पर Backend Deploy
1. [render.com](https://render.com) पर जाएं
2. New Web Service बनाएं
3. GitHub repository connect करें
4. Build Command: `npm install`
5. Start Command: `npm run server`

## 🔧 Configuration Files

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### render.yaml
```yaml
services:
  - type: web
    name: portfolio-frontend
    env: node
    buildCommand: npm run build
    startCommand: npm run start
    plan: free
    envVars:
      - key: NODE_ENV
        value: production
```

## 📱 Local Development

```bash
# Dependencies install करें
npm install

# Development server start करें
npm run dev

# Backend server start करें (अलग terminal में)
npm run server

# या दोनों together run करें
npm run dev:full
```

## 🌐 Access Links

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health

## 🎯 Important Notes

1. **Node_modules** GitHub पर न डालें (`.gitignore` में add है)
2. **Environment variables** को Vercel dashboard में set करें
3. **Custom domain** के लिए Vercel settings में जाएं
4. **Build errors** आएं तो `npm run build` locally test करें

## 🚨 Troubleshooting

### Common Issues

1. **Build Failed**
   ```bash
   npm run build
   # Local test करें
   ```

2. **Asset Not Found**
   - Check `public/` folder में files हैं या नहीं
   - Paths correct हैं या नहीं

3. **API Connection Failed**
   - Environment variables check करें
   - Backend properly deployed है या नहीं

### Support

- **Vercel Docs**: https://vercel.com/docs
- **Render Docs**: https://render.com/docs
- **Next.js Docs**: https://nextjs.org/docs

---

**🎉 Ready to Deploy!** 

अब आपका portfolio GitHub + Vercel पर deploy करने के लिए तैयार है!
