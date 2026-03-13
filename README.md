# Adarsh Jaiswal Portfolio

A modern, full-stack portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring an Express.js backend.

## 🚀 Features

- **Modern Frontend**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Smooth Animations**: Professional animations and transitions
- **Interactive Components**: Dynamic content with engaging user interactions
- **Backend API**: Express.js server with health check endpoint
- **SEO Optimized**: Meta tags and proper HTML structure
- **Performance Optimized**: Lazy loading and optimized assets

## 📁 Project Structure

```
website/
├── components/          # Reusable React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   └── Footer.tsx
├── pages/              # Next.js pages
│   ├── index.tsx       # Home page
│   ├── about.tsx       # About page
│   ├── projects.tsx    # Projects page
│   ├── certificates.tsx # Certificates page
│   ├── videos.tsx      # Videos page
│   └── contact.tsx     # Contact page
├── public/             # Static assets
│   └── assets/        # Images, videos, audio files
├── server/             # Express.js backend
│   └── index.js       # Server configuration
├── styles/             # CSS files
│   └── globals.css    # Global styles
├── types/              # TypeScript type definitions
├── package.json        # Dependencies and scripts
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── .env.local         # Environment variables
```

## 🛠️ Technologies Used

### Frontend
- **Next.js 14** - React framework with SSR/SSG
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Inter)

### Backend
- **Express.js** - Node.js web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # .env.local is already configured
   # You can modify values if needed
   ```

4. **Run the development servers**
   
   **Option 1: Run both frontend and backend together**
   ```bash
   npm run dev:full
   ```
   
   **Option 2: Run separately**
   ```bash
   # Terminal 1 - Frontend
   npm run dev
   
   # Terminal 2 - Backend
   npm run server
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - Health Check: http://localhost:3001/api/health

## 📱 Available Pages

- **Home** (`/`) - Hero section with introduction
- **About** (`/about`) - Detailed about page with timeline and gallery
- **Projects** (`/projects`) - Project portfolio with filtering
- **Certificates** (`/certificates`) - Professional certificates showcase
- **Videos** (`/videos`) - Video content and tutorials
- **Contact** (`/contact`) - Contact form and information

## 🔧 Development Scripts

```bash
npm run dev          # Start Next.js development server
npm run server       # Start Express.js backend server
npm run dev:full     # Run both servers concurrently
npm run build        # Build Next.js for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy frontend**
   ```bash
   vercel --prod
   ```

3. **Deploy backend** (Optional - for API endpoints)
   - Create a separate Vercel project for the backend
   - Deploy the `server/` directory

### Render

1. **Frontend Deployment**
   - Connect your GitHub repository to Render
   - Set build command: `npm run build`
   - Set start command: `npm run start`
   - Set environment variables

2. **Backend Deployment**
   - Create a new Web Service
   - Set build command: `npm install`
   - Set start command: `npm run server`
   - Add environment variable: `NODE_ENV=production`

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `out` directory** to Netlify

### Docker Deployment

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   
   COPY . .
   RUN npm run build
   
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and run**
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
NODE_ENV=development
PORT=3001
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 📊 API Endpoints

### Health Check
```
GET /api/health
```

**Response:**
```json
{
  "status": "Server running",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456,
  "environment": "development"
}
```

### API Info
```
GET /api
```

**Response:**
```json
{
  "message": "Adarsh Jaiswal Portfolio API",
  "version": "1.0.0",
  "endpoints": {
    "health": "/api/health",
    "info": "/api"
  }
}
```

## 🎨 Customization

### Adding New Pages

1. Create a new file in `pages/` directory
2. Use existing pages as templates
3. Add navigation link in `components/Navbar.tsx`

### Modifying Styles

1. Edit `styles/globals.css` for global styles
2. Use Tailwind classes for component-specific styles
3. Modify `tailwind.config.js` for custom theme

### Adding Components

1. Create component in `components/` directory
2. Export as default
3. Import and use in pages

## 🚀 Performance Optimizations

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Components and images
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Analysis**: Built-in Next.js analyzer

## 🔍 SEO Features

- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: adarshjaiswalxadyo@gmail.com
- **Portfolio**: https://your-portfolio-url.com
- **GitHub**: https://github.com/adarshjaiswalxadyo-spec

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Tailwind CSS for styling
- Next.js team for the amazing framework

---

**Built with ❤️ using modern web technologies**
