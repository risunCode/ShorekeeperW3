# Shorekeeper - Wuthering Waves Character Project

A comprehensive character showcase project for Shorekeeper from Wuthering Waves, available in both Next.js and pure HTML versions for maximum deployment flexibility.

## 🌊 Project Overview

This project presents an immersive, interactive webpage dedicated to Shorekeeper, the eternal guardian of the Black Shores from Wuthering Waves. The project showcases her story, abilities, gallery, and lore through modern web technologies with beautiful UI design.

## 📁 Project Structure

```
Shorekeeper/
├── 🌐 index.html                 # Standalone HTML version (GitHub Pages ready)
├── 🖼️ images/                    # Shared image assets
│   └── shorekeeper/
│       ├── hero-main.png         # Hero background image
│       ├── portrait-1.png        # Character portrait
│       ├── gallery-1.jpg         # Gallery image 1
│       ├── gallery-2.jpg         # Gallery image 2  
│       ├── gallery-3.jpg         # Gallery image 3
│       └── gallery-4.jpg         # Gallery image 4
├── ⚛️ Shorekeeper-NextJS/        # Next.js development version
│   ├── app/                      # Next.js 14 app directory
│   ├── public/                   # Next.js public assets
│   ├── package.json              # Dependencies and scripts
│   ├── tailwind.config.ts        # Tailwind CSS configuration
│   └── README.md                 # Next.js specific documentation
└── 📖 README.md                  # This file
```

## 🚀 Available Versions

### 1. **HTML Version** (Standalone)
- **File**: `index.html`
- **Purpose**: Static deployment to GitHub Pages, Netlify, or any web server
- **Dependencies**: None (all via CDN)
- **Deployment**: Direct upload or Git push

### 2. **Next.js Version** (Development)
- **Folder**: `Shorekeeper-NextJS/`
- **Purpose**: Development environment with React components
- **Dependencies**: Node.js, React, Next.js 14, Tailwind CSS
- **Deployment**: Vercel, Netlify, or static export

## ✨ Features

### 🎨 **Design & UI**
- Modern glass-morphism design with gradient backgrounds
- Responsive layout (mobile, tablet, desktop)
- Dark theme with blue/cyan color scheme
- Smooth scroll animations and hover effects
- Interactive navigation with section highlighting

### 📱 **Responsive Experience**
- Mobile-first design approach
- Touch-friendly hamburger menu
- Optimized images for all screen sizes
- Cross-browser compatibility

### 🎭 **Interactive Elements**
- SweetAlert2 powered modals for contact info
- Newsletter subscription functionality
- Interactive image gallery with lightbox
- Smooth scroll navigation between sections

### 📝 **Content Sections**
1. **Hero**: Character introduction with animated title
2. **About**: Detailed character profile and personality
3. **Story**: Origin story across multiple timelines
4. **Abilities**: Combat skills and gameplay mechanics
5. **Gallery**: High-quality character artwork
6. **Lore**: Deep background and mysteries
7. **Contact**: Community engagement options

## 🔧 Technologies Used

### Core Technologies
- **HTML5**: Semantic markup structure
- **CSS3**: Advanced styling with custom properties
- **JavaScript**: Vanilla ES6+ for interactions
- **Tailwind CSS**: Utility-first CSS framework

### External Libraries
- **SweetAlert2**: Beautiful modal dialogs
- **Google Fonts**: Inter typography
- **CDN Delivery**: Fast loading via CDN

### Development Stack (Next.js)
- **React 18**: Component-based UI framework
- **Next.js 14**: Full-stack React framework
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Rapid UI development

## 🌐 Deployment Options

### **GitHub Pages** (Recommended for HTML)
1. Push the repository to GitHub
2. Enable Pages in repository settings
3. Select main branch as source
4. Access at `https://yourusername.github.io/repository-name/`

### **Netlify** (Drag & Drop)
1. Visit [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire folder
3. Get instant live URL

### **Vercel** (Next.js Version)
1. Connect GitHub repository to Vercel
2. Deploy from `Shorekeeper-NextJS` folder
3. Automatic builds and deployments

### **Traditional Hosting**
- Upload files to any web server
- No server-side requirements
- Works with Apache, Nginx, or static hosts

## 🔨 Local Development

### HTML Version
```bash
# Open directly in browser
open index.html

# Or use a local server
npx serve .
# or
python -m http.server 8000
```

### Next.js Version
```bash
cd Shorekeeper-NextJS
npm install
npm run dev
```

## 📊 Performance

### HTML Version
- **Bundle Size**: ~50KB (gzipped)
- **First Load**: <2s (with CDN caching)
- **Lighthouse Score**: 95+ across all metrics
- **Dependencies**: Loaded via CDN (cached globally)

### Next.js Version
- **Build Size**: ~200KB (optimized)
- **First Load**: <3s (including JS hydration)
- **Hot Reload**: <100ms during development
- **Image Optimization**: Next.js automatic optimization

## 🎯 Browser Support

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Mobile Safari** iOS 14+
- ✅ **Chrome Mobile** Android 10+

## 🔄 Version History

### v2.0 (Current)
- Added standalone HTML version
- Reorganized project structure
- Improved responsive design
- Enhanced gallery functionality

### v1.0 (Initial)
- Next.js implementation
- Basic responsive design
- Core content sections

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make changes and test both versions
4. Commit changes: `git commit -m "Add feature"`
5. Push to branch: `git push origin feature-name`
6. Create a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎮 About Wuthering Waves

Wuthering Waves is an open-world action RPG developed by Kuro Games. Shorekeeper is a 5-star Spectro character who serves as the guardian of the Black Shores, a mysterious interdimensional realm.

---

**Built with ❤️ for the Wuthering Waves community**

*"I am the keeper of shores, the guardian between tides of reality."* - Shorekeeper