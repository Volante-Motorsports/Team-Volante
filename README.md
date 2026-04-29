# Team Volante - Next.js Migration

This is the migrated Next.js version of the Team Volante racing club website. The migration preserves all the original styling and functionality while adding the benefits of Next.js.

## ✅ Migration Completed Successfully

### What Was Migrated:

1. **Static HTML Pages** → **Next.js App Router Pages**

   - `index.html` → `src/app/page.tsx` (Home page)
   - `feature.html` → `src/app/feature/page.tsx` (Virtual Buggy page)
   - `Surprise.html` → `src/app/surprise/page.tsx` (Racing game page)

2. **CSS Files** → **Next.js Styles**

   - `stylev.css` → `src/styles/stylev.css` (Main styles)
   - `buggy.css` → `src/styles/buggy.css` (Feature page styles)
   - `modal.css` → `src/styles/modal.css` (Modal styles)

3. **JavaScript** → **React Components**

   - `Vapp.js` → Interactive client components with React hooks
   - All original functionality preserved (sliders, tabs, forms, etc.)

4. **Assets**
   - All images copied to `public/imagesvolante/`
   - Sitemap and manifest files preserved

### Key Features Preserved:

✅ **Exact Same Visual Design** - All CSS and styling maintained  
✅ **Interactive Elements** - Tabs, sliders, navigation, forms  
✅ **Responsive Design** - Mobile-friendly layout  
✅ **3D Spline Viewers** - Interactive 3D models  
✅ **Contact Form** - Google Sheets integration  
✅ **SEO Optimization** - Meta tags and social media cards  
✅ **Animations** - AOS animations and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation & Development

1. **Navigate to the project directory:**

   ```bash
   cd team-volante
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Open [http://localhost:3000](http://localhost:3000)

### Building for Production

1. **Build the application:**

   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

### Deployment Options

The website is configured for static export and can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

For static deployment:

```bash
npm run build
```

This creates an `out` folder with static files ready for deployment.

## 📁 Project Structure

```
team-volante/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   ├── feature/
│   │   │   └── page.tsx        # Virtual buggy page
│   │   ├── surprise/
│   │   │   └── page.tsx        # Racing game page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── HomeClient.tsx      # Main interactive component
│   │   └── SplineViewer.tsx    # 3D viewer component
│   └── styles/
│       ├── stylev.css          # Main stylesheet
│       ├── buggy.css           # Feature page styles
│       └── modal.css           # Modal styles
├── public/
│   ├── imagesvolante/          # All website images
│   └── sitemap.xml
├── package.json
├── next.config.js
└── tsconfig.json
```

## 🔧 Technical Details

### Technologies Used:

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **React 19** - Component library
- **Spline** - 3D interactive models
- **AOS** - Scroll animations
- **Font Awesome** - Icons

### Key Components:

- **HomeClient**: Main client-side component handling all interactivity
- **SplineViewer**: Custom component for 3D model rendering
- **Layout**: SEO optimization and global configuration

### Performance Features:

- Static site generation
- Image optimization ready
- Lazy loading support
- Modern JavaScript features

## 🎯 Original Functionality Maintained

1. **Navigation Menu** - Mobile hamburger menu and desktop navigation
2. **Team Photo Slider** - Auto-playing carousel with manual controls
3. **About Tabs** - Interactive tabbed content sections
4. **Timeline Animation** - Animated achievement timeline
5. **Contact Form** - Google Sheets integration maintained
6. **Sponsor Cards** - Hover effects and responsive grid
7. **Progress Indicator** - Scroll progress with smooth scroll to top
8. **3D Models** - Interactive buggy and racing game
9. **Responsive Design** - Mobile-first approach
10. **Social Media Links** - All external links preserved

## 🆚 Benefits of Next.js Migration

### Performance Improvements:

- ⚡ Faster page loads with code splitting
- ⚡ Optimized images and assets
- ⚡ Better caching strategies
- ⚡ Improved Core Web Vitals

### SEO Enhancements:

- 🔍 Server-side rendering capabilities
- 🔍 Better meta tag management
- 🔍 Structured data support
- 🔍 Improved social media sharing

### Developer Experience:

- 🛠️ TypeScript integration
- 🛠️ Hot reload in development
- 🛠️ Component-based architecture
- 🛠️ Better code organization

### Deployment Advantages:

- 🚀 Multiple deployment options
- 🚀 Static site generation
- 🚀 Automatic optimization
- 🚀 CDN-ready builds

## 📞 Support

For any issues or questions regarding the migrated website:

- **Original Website**: [Team Volante GitHub](https://github.com/Team-Volante)
- **Email**: Volante@msrit.edu
- **Instagram**: @team_volante

## 🏁 Ready to Race!

Your Team Volante website has been successfully migrated to Next.js while preserving every detail of the original design and functionality. The website is now more performant, SEO-friendly, and ready for modern deployment platforms.

**Live Development Server**: http://localhost:3000

Enjoy your upgraded racing club website! 🏎️💨

---

## Deploying to GitHub Pages (static export)

This project is configured to produce a static `out/` folder via the Next.js build. You can publish that to GitHub Pages.

1. Install deps (if you haven't already):

```powershell
npm install
```

2. Build and export:

```powershell
# If deploying to https://<user>.github.io/Team-Volante, set GH_PAGES_BASE to '/Team-Volante'
$env:GH_PAGES_BASE = '/Team-Volante'
npm run prepare-export
```

3. Publish the `out/` folder to the `gh-pages` branch:

```powershell
npm run deploy
```

Note: `npm run deploy` uses the `gh-pages` package to push the `out/` directory. If you prefer, you can manually push the `out/` folder to a branch or host it on any static hosting provider.

If you'd like, I can attempt to run `npm run deploy` from here—I'll need the git remote configured and permission to push to the repository.
