# Sangam Kitchen - Interior Design & Kitchen Setup Website

A modern, responsive website for Sangam Kitchen, showcasing interior design and kitchen setup services with a clean, minimal aesthetic.

## Features

- 🎨 Modern, fluid design with elegant color palette
- 📱 Fully responsive across mobile, tablet, and desktop
- ⚡ Built with Vite + React for optimal performance
- 🎭 Smooth animations with AOS (Animate On Scroll)
- 🧭 React Router for seamless navigation
- 📧 Contact form with validation
- 🖼️ Project gallery with lightbox functionality
- 🎪 Interactive testimonial carousel
- 🔍 Project filtering and search

## Pages

1. **Home** - Hero section, services preview, testimonials, and featured projects
2. **About** - Company story, timeline, team, and values
3. **Services** - Detailed service offerings with process overview
4. **Projects** - Portfolio gallery with filtering and lightbox
5. **Contact** - Contact form, business information, and map

## Technologies Used

- **Frontend**: React 18, Vite
- **Routing**: React Router DOM
- **Animations**: AOS (Animate On Scroll), Framer Motion
- **Icons**: React Icons
- **Carousel**: Swiper.js
- **Forms**: React Hook Form
- **Styling**: Custom CSS with CSS Variables

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## Deployment to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy via Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite React app
   - Click "Deploy"
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Configuration Files

- ✅ `vercel.json` - Vercel deployment configuration
- ✅ `vite.config.js` - Vite build settings  
- ✅ SPA routing support for React Router
- ✅ Automatic builds on GitHub push

### Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Navigate to Settings → Domains
3. Add your custom domain
4. Update your domain's DNS records as instructed by Vercel

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Button.jsx
│   ├── ServiceCard.jsx
│   ├── ProjectCard.jsx
│   └── TestimonialCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── styles/
│   └── globals.css
└── App.jsx
```

## Color Palette

- **Background**: #fefaf6 (cream)
- **Primary**: #800000 (maroon)
- **Secondary**: #ffffff (white)
- **Text**: #333333 (dark gray)
- **Accent**: #f5f5f5 (light gray)

## Customization

### Adding New Images

Replace the placeholder Unsplash images with your actual project photos:

1. Add images to `public/assets/images/`
2. Update image paths in the respective components
3. Optimize images for web (WebP format recommended)

### Updating Contact Information

Edit the contact details in `src/pages/Contact.jsx`:
- Phone number
- Email address
- Business address
- Operating hours

### Modifying Services

Update service information in `src/pages/Services.jsx` and `src/pages/Home.jsx`.

## Performance Optimizations

- Lazy loading for images
- Code splitting with React Router
- Optimized animations
- Responsive images
- Minimal CSS bundle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Contact

For support or inquiries, contact Sangam Kitchen at:
- Email: info@sangamkitchen.com
- Phone: +91 99999 88888