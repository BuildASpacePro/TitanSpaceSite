# TITAN SPACE

Official website for Titan Space Ltd - Designing, building, and operating the next generation of satellites.

## Overview

A minimal, high-performance website inspired by SpaceX and Anduril design principles. Features a dark theme, smooth animations, and visual-first storytelling.

## Technology Stack

- **Build Tool**: Vite 5.x
- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: Pure CSS with CSS Variables
- **Typography**: Inter (Google Fonts)

## Project Structure

```
TitanSpaceSite/
├── src/
│   ├── styles/
│   │   └── main.css          # Complete design system
│   └── scripts/
│       └── main.js            # Navigation, animations, interactions
├── public/
│   ├── images/                # Satellite imagery (to be added)
│   └── videos/                # Background videos (to be added)
├── index.html                 # Landing page
├── mission.html               # Mission & vision
├── products.html              # Satellite platforms & services
├── contact.html               # Contact form & information
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:3000`

## Design System

### Color Palette

- **Background**: Pure black (#000000)
- **Surface**: Dark gray (#0a0a0a, #141414)
- **Text**: White (#ffffff), Gray (#a0a0a0, #666666)
- **Accent**: Blue (#0066ff)

### Typography

- **Font**: Inter (300, 400, 600, 700 weights)
- **Scale**: Fluid typography using clamp() for responsive sizing
- **Letter-spacing**: Tight for headings, normal for body text

### Layout Principles

- Full-screen hero sections with minimal text
- Generous whitespace and padding
- Mobile-first responsive design
- Grid-based layouts for content sections

## Features

### Landing Page
- Full-screen hero with satellite imagery
- Core capabilities showcase (Design, Build, Operate)
- Statistics counter animations
- Call-to-action sections

### Mission Page
- Vision statement
- Core capabilities breakdown
- Differentiators

### Products Page
- Satellite platform showcase (TITAN-1, TITAN-X, TITAN-PRO)
- Services grid
- Technical specifications

### Contact Page
- Contact form with validation
- Office information
- Business development contacts

## Performance Optimizations

- Lazy-loaded animations using Intersection Observer
- Smooth scroll behavior
- Optimized CSS with minimal specificity
- Mobile-optimized navigation
- Preload critical fonts

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] Add high-quality satellite imagery
- [ ] Implement background video for hero section
- [ ] Add 3D satellite models (Three.js)
- [ ] Implement actual form submission backend
- [ ] Add loading animations
- [ ] Implement parallax scrolling effects
- [ ] Add case studies/projects section
- [ ] Integrate analytics

## License

Copyright © 2024 Titan Space Ltd. All rights reserved.
