# Sandeep's Cloud Engineer Portfolio

A modern, responsive portfolio website showcasing cloud engineering expertise and DevOps skills. Built with Next.js, TypeScript, and Tailwind CSS.

## Overview

This portfolio website is specifically designed for job search in Ireland. It highlights:
- Multi-cloud expertise (AWS, Azure, GCP, OCI)
- DevOps and Infrastructure as Code experience
- Internship and Cloud/DevOps Engineer opportunities
- Master's studies in Cloud Computing at NCI Ireland (Starting September 2026)

## Features

✨ **Modern Design**
- Dark theme with gradient accents for tech aesthetic
- Glass-morphism UI components
- Smooth animations and hover effects
- Fully responsive design (mobile, tablet, desktop)

🚀 **Sections**
- **Hero**: Eye-catching introduction with call-to-action
- **About**: Background, education, and career journey
- **Skills**: Categorized technical skills with proficiency levels
- **Projects**: Showcase of 6+ impactful cloud projects
- **Contact**: Contact form and employment opportunities highlight
- **Footer**: Social links and quick navigation

💼 **Callouts for Ireland Job Search**
- Internship opportunities during studies (2026-2028)
- Cloud Engineer and DevOps Engineer roles
- Highlighted employment interest and relocation details

## Tech Stack

- **Framework**: Next.js 16.2.1 with TypeScript
- **Styling**: Tailwind CSS 4.2
- **Deployment**: Vercel (optimized for Next.js)
- **Development**: React 19.2

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production
```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration (Recommended)
1. Push this repository to GitHub:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

2. Go to [Vercel Dashboard](https://vercel.com/new)
3. Import your GitHub repository
4. Configure and deploy (Vercel auto-detects Next.js)

### Option 3: Direct Vercel Upload
1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Upload this project folder
3. Click "Deploy"

## Customization

### Update Personal Information
Edit these files to personalize:
- `src/components/Hero.tsx` - Main introduction
- `src/components/About.tsx` - Background and timeline
- `src/components/Contact.tsx` - Contact details and email
- `src/components/Footer.tsx` - Social links

### Add Your Projects
Modify the `projects` array in `src/components/Projects.tsx` to showcase your actual projects.

### Update Skills
Edit the `skillCategories` array in `src/components/Skills.tsx` to match your expertise.

### Change Colors & Theme
Modify `tailwind.config.ts` to customize the color scheme and theme.

## Environment Variables
Create a `.env.local` file if you add backend services:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## Performance
- ✅ Optimized images
- ✅ Code splitting
- ✅ CSS minification
- ✅ Fast page loads
- ✅ SEO optimized metadata

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## For Ireland Job Market

### Key Highlights
- Highlight cloud certifications and hands-on experience
- Emphasize your MS studies at NCI Ireland
- Show readiness for internships during studies
- Demonstrate DevOps automation skills
- Include multi-cloud expertise

### SEO & Discoverability
- Responsive design for all devices
- Meta tags optimized for search
- Fast loading times (Vercel CDN)
- Mobile-first approach

## Future Enhancements
- [ ] Add blog section for technical articles
- [ ] Integrate contact form with backend
- [ ] Add testimonials/recommendations section
- [ ] Add more detailed case studies
- [ ] Implement dark/light mode toggle
- [ ] Add PDF resume download

## Support

For issues or questions:
1. Check existing implementation in component files
2. Review Next.js and Tailwind CSS documentation
3. Test locally with `npm run dev`

## License

Feel free to use this portfolio as a template for your own portfolio website.

---

**Ready to deploy?** Push to GitHub and connect to Vercel for automatic deployments!

**Need help customizing?** Review the component files in `src/components/` for structure and styling patterns.
