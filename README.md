# John Delatorre - Product Designer Portfolio

A modern, minimalist portfolio website showcasing product design work and case studies. Built with React, TypeScript, and TailwindCSS.

## 🌐 Live Site

Visit the live portfolio at: [www.johndelatorre.com](https://www.johndelatorre.com)

## ✨ Features

### Design System
- Clean, modern minimalist aesthetic
- Typography: Playfair Display (serif) for headings, Roboto (sans-serif) for body text
- Black and white color scheme with subtle gray accents
- Responsive design for desktop, tablet, and mobile
- Smooth animations and hover effects

### Navigation
- **Sticky Header**: Semi-transparent header with backdrop blur effect
- **Mobile-Friendly**: Hamburger menu with full-screen overlay on mobile
- **Smooth Scrolling**: Enhanced user experience with smooth page transitions

### Pages & Sections

#### Homepage
- Hero section with professional introduction
- Key accomplishments with Font Awesome icons
- Case studies showcase with interactive cards
- Responsive grid layout (3 columns desktop, 2 tablet, 1 mobile)

#### Case Study Pages
- Full-width header images with project details overlay
- **STAR Method** content structure:
  - **Situation**: Project context and challenges
  - **Task**: Design objectives and goals
  - **Action**: Design process and methodology
  - **Result**: Outcomes and impact
- Interactive image gallery with modal lightbox
- Navigation between case studies
- Figma prototype links

#### About Me Page
- Professional story and philosophy
- Skills and expertise showcase
- Career timeline with visual progression
- Personal interests and hobbies

#### Contact Page
- Contact form with validation
- Professional contact information
- Social media links
- Success/error states for form submission

### Case Studies

#### Featured Projects
1. **Relo Census Dashboard Builder** (2024)
   - Data visualization and dashboard design
   - B2B SaaS platform

2. **Relo Edge Platform Redesign** (2023)
   - Enterprise platform modernization
   - User experience optimization

3. **Relo SponsorPulse Integration** (2023)
   - Third-party API integration design
   - Data analytics platform

4. **Medable Design System Overhaul** (2022)
   - Scalable design foundation
   - Component library for healthcare

5. **Medable Translation Management Tool** (2022)
   - Clinical trial localization
   - Workflow optimization

6. **Elysium AI Analytics Dashboard** (2021)
   - AI/ML interface design
   - Business intelligence platform

## 🛠 Tech Stack

- **Frontend**: React 19.1.0 with TypeScript
- **Styling**: TailwindCSS 3.4.15
- **Routing**: React Router DOM 6.30.1
- **Icons**: Font Awesome (Solid & Brands)
- **Build Tool**: Vite 5.4.10
- **Fonts**: Google Fonts (Playfair Display, Roboto)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johndelatorre/jdlt.design.git
   cd jdlt.design
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🚀 Deployment

This project uses a **two-branch deployment strategy** for safe production releases:

### Branch Strategy
- **`main`** - Development and testing (you work here)
- **`production`** - Live production code (deployed to Vercel)

### Deploy to Production
```bash
# Switch to production branch
git checkout production

# Merge tested changes from main
git merge main

# Deploy to Vercel
git push origin production

# Return to development
git checkout main
```

### Live Sites
- **Production**: [www.johndelatorre.com](https://www.johndelatorre.com) (from `production` branch)
- **Development**: Continue working on `main` branch

See `DEPLOYMENT.md` for detailed workflow instructions.

## 📱 Responsive Design

The portfolio is fully responsive across all device sizes:

- **Desktop**: Full layout with sidebar navigation
- **Tablet**: Adapted grid layouts and touch-friendly interactions
- **Mobile**: Stacked layout with hamburger menu navigation

## 🎨 Customization

### Adding New Case Studies

1. Add case study data to `src/data/caseStudies.ts`
2. Include images in the `public/images/case-studies/` directory
3. The case study will automatically appear on the homepage and be accessible via `/case-study/{id}`

### Updating Personal Information

Edit `src/data/personalInfo.ts` to update:
- Contact information
- Professional experience
- Skills and interests
- Profile images

### Modifying Design System

Update design tokens in:
- `tailwind.config.js` - Colors, fonts, spacing
- `src/index.css` - Custom component classes

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Sticky navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Layout.tsx      # Page layout wrapper
│   ├── CaseStudyCard.tsx # Homepage case study cards
│   └── ImageModal.tsx  # Lightbox image viewer
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page
│   ├── CaseStudyPage.tsx # Dynamic case study template
│   ├── AboutPage.tsx   # About me page
│   └── ContactPage.tsx # Contact form page
├── data/               # Static data and content
│   ├── caseStudies.ts  # Case study content
│   ├── personalInfo.ts # Personal information
│   └── navigation.ts   # Navigation menu items
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting
- **Responsive**: Mobile-first approach
- **Accessibility**: ARIA labels and keyboard navigation

## 📄 License

© 2024 John Delatorre. All rights reserved.

## 📞 Contact

- **Email**: john@jdlt.design
- **LinkedIn**: [linkedin.com/in/johndelatorre](https://linkedin.com/in/johndelatorre)
- **Website**: [www.johndelatorre.com](https://www.johndelatorre.com)

---

Built with ❤️ by [John Delatorre](https://www.johndelatorre.com)
