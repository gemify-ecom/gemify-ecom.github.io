# Gemify Website

Marketing website for Gemify Shopify apps. Professional, fast, accessible SPA built with React 19 + TypeScript + Tailwind CSS.

**Live:** [gemify-ecom.github.io](https://gemify-ecom.github.io) | **Status:** v1.0.0 (Production Ready)

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check code quality
npm run lint
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | React 19 + TypeScript |
| Build | Vite 7.2.4 |
| Styling | Tailwind CSS 4.1.17 |
| Routing | React Router 7.10.1 |
| Icons | Lucide React |

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── header.tsx      # Navigation bar
│   ├── footer.tsx      # Footer (contains the language switcher)
│   ├── language-switcher.tsx
│   ├── screencast-page-layout.tsx
│   └── layout.tsx      # Page wrapper
├── i18n/               # Localization (en, ja, de, fr, es)
│   ├── locales.ts             # Supported locales
│   ├── locale-paths.ts        # /ja prefix helpers
│   ├── locale-detection.ts    # ?locale=, storage, browser language
│   ├── locale-context.ts      # Locale context object
│   ├── locale-provider.tsx    # Reads the locale from the URL
│   ├── locale-url-sync.tsx    # Redirects to the canonical locale URL
│   ├── use-locale.ts          # useLocale / useTranslations / useLocalePath
│   ├── use-document-locale.ts # <html lang>, title, canonical, hreflang
│   ├── localized-link.tsx     # Locale-aware <Link>
│   ├── rich-text.tsx          # {placeholder} interpolation
│   └── translations/          # en/ ja/ de/ fr/ es/ dictionaries per page
├── pages/              # Page-level components
│   ├── home-page.tsx
│   ├── faq-page.tsx
│   ├── privacy-policy-page.tsx
│   ├── bulk-delete-orders-page.tsx
│   ├── default-address-lock-page.tsx
│   └── llms-txt-page.tsx
├── App.tsx             # Routing setup (each page registered per locale)
├── main.tsx            # Entry point
└── index.css           # Global styles + tokens
```

---

## Routes

| Path | Page | Purpose |
|------|------|---------|
| `/` | Home | Landing page with 7 sections |
| `/faq` | FAQ | 43 Q&As across 7 categories |
| `/privacy-policy` | Privacy | Legal compliance + data handling |
| `/apps/bulk-delete-orders` | App Detail | Bulk Delete Orders features + install CTA |
| `/apps/bulk-delete-orders/screencast` | Screencast | Bulk Delete Orders demo video |
| `/apps/default-address-lock` | App Detail | Product features, pricing, testimonials |
| `/apps/default-address-lock/screencast` | Screencast | Default Address Lock demo video |
| `/apps/llms-txt` | App Detail | LLMs-full.txt features, how it works, install CTA |
| `/apps/llms-txt/screencast` | Screencast | LLMs-full.txt demo video |

Every route also exists under a language prefix (`/ja/faq`, `/de/faq`, `/fr/faq`, `/es/faq`, …) for the Japanese, German, French, and Spanish versions.

---

## Localization

The site ships in English (default), Japanese, German, French, and Spanish.

| Mechanism | Behavior |
|-----------|----------|
| URL prefix | `/faq` is English; `/ja/faq`, `/de/faq`, `/fr/faq`, `/es/faq` are the translated versions. The URL is the source of truth. |
| `?locale=ja` | Forces a language on any URL, remembers the choice, then redirects to the canonical `/ja/...` URL. `?locale=en` does the reverse. |
| Browser language | On the first page of a visit to an unprefixed URL, `navigator.languages` decides the language. |
| Saved choice | A switcher click or `?locale=` is stored in `localStorage` and wins over the browser language on later visits. |
| Switcher | Footer bottom bar; switches language while staying on the same page. |
| SEO | `<html lang>`, `<title>`, description, canonical, and `hreflang` (one per language plus `x-default`) are set per route at runtime. |

Copy lives in `src/i18n/translations/{en,ja,de,fr,es}/`, one file per page. The
English dictionaries define the shape, so a missing or extra key in any other
language is a type error. Strings can carry `{placeholder}` tokens that
components replace with links or emphasised text.

Merchant testimonials on the home page are quoted verbatim from the Shopify App
Store and stay in English in every language.

---

## Available Scripts

```bash
npm run dev       # Start dev server with hot reload
npm run build     # TypeScript check + production build
npm run lint      # ESLint code quality check
npm run preview   # Preview production build locally
```

---

## Key Features

### Home Page
- **Hero Section** - Social proof badge, responsive headline, dual CTAs
- **Featured Apps** - 3 app cards (Bulk Delete Orders, Default Address Lock, LLMs-full.txt)
- **Testimonials** - Merchant quotes demonstrating trust
- **Why Choose** - 4 benefits with Lucide icons
- **About** - Company mission & expertise
- **Marketplace** - Teaser for app ecosystem
- **Contact** - Form for merchant inquiries

### FAQ Page
43 questions organized into 7 categories:
- General, Bulk Delete Orders, Default Address Lock, LLMs-full.txt
- Pricing & Billing, Privacy & Security, Technical

### Privacy Policy
16 comprehensive sections covering:
- Data collection, usage, sharing, retention, user rights
- Security, cookies, GDPR, CCPA compliance

### App Detail Page
Complete product showcase for Default Address Lock:
- Problem statement, solution explanation
- Features, pricing (3 tiers), testimonials
- Installation guide, FAQ, CTA buttons

---

## Design System

### Colors
| Use | Hex |
|-----|-----|
| Primary | `#00A87B` |
| Primary Dark | `#008060` |
| Text | `#202223` |
| Background | `#F6F6F7` |

### Typography
- **Headlines:** Poppins (700/800 weight)
- **Body:** Inter (400/500/600 weight)
- **Responsive:** 48px (mobile) → 96px (desktop)

### Components
- **Cards:** 16px rounded, subtle shadows, hover lift
- **Buttons:** Primary (green), Secondary (text link)
- **Icons:** 32px Lucide icons
- **Animations:** Fade-in-up with staggered delays

**Full details:** [Design Guidelines](./docs/design-guidelines.md)

---

## Accessibility

✓ **WCAG AA Compliant**
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators (2px outline)
- Animations respect `prefers-reduced-motion`
- Screen reader friendly (sr-only, alt text)
- Sufficient color contrast (4.5:1)

---

## Performance

**Target Metrics:**
- Lighthouse Performance: > 85
- Page Load: < 2s
- Core Web Vitals: All green
- JavaScript Bundle: < 100kb gzipped

**Current Bundle:** ~50kb gzipped (React + Router + code)

---

## Documentation

Comprehensive documentation available in `./docs/`:

| Document | Purpose |
|----------|---------|
| [project-overview-pdr.md](./docs/project-overview-pdr.md) | Vision, goals, requirements, roadmap |
| [codebase-summary.md](./docs/codebase-summary.md) | Directory structure, components, patterns |
| [system-architecture.md](./docs/system-architecture.md) | Technical architecture, data flow, build pipeline |
| [code-standards.md](./docs/code-standards.md) | Typography, CSS patterns, icons |
| [design-guidelines.md](./docs/design-guidelines.md) | Colors, typography, spacing, animations |

---

## Development Guidelines

### Code Quality
- **TypeScript:** Strict mode enabled
- **Linting:** ESLint checks on all files
- **Formatting:** Consistent with Prettier (future)
- **Testing:** Jest setup ready (future)

### Component Patterns
```tsx
// Functional component with TypeScript
interface ComponentProps {
  title: string;
  children?: React.ReactNode;
}

export function Component({ title, children }: ComponentProps) {
  return <div>{title}{children}</div>;
}
```

### Styling Approach
- **Utility-first:** Tailwind CSS for layout/spacing
- **Custom CSS:** Global styles in index.css
- **Design tokens:** CSS variables for consistency
- **Responsive:** Mobile-first with breakpoints (sm/md/lg/xl)

### Animation Pattern
```tsx
// Staggered entrance animations
<div className="animate-fade-in-up-delay-1">Content 1</div>
<div className="animate-fade-in-up-delay-2">Content 2</div>
<div className="animate-fade-in-up-delay-3">Content 3</div>
```

---

## Future Enhancements

**Phase 1.1:**
- Form backend integration
- Blog/resources section
- Email newsletter signup

**Phase 1.2:**
- Advanced app comparison
- User ratings & reviews
- Case studies

**Phase 2.0:**
- Community forum
- Developer documentation
- API reference
- Advanced analytics

See [Project Roadmap](./docs/project-overview-pdr.md#roadmap) for full details.

---

## Deployment

Automatically deployed via GitHub Actions on push to `master` branch.

**URL:** https://gemify-ecom.github.io

**Workflow:** `.github/workflows/deploy.yml`
- Builds with Node 20
- Deploys to GitHub Pages
- Includes 404.html for SPA routing

---

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Optimizations

✓ Tree shaking (unused code removed)
✓ CSS purging (unused styles removed)
✓ Asset minification
✓ Font preconnect optimization
✓ CSS animations (GPU accelerated)
✓ Gzip compression

---

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3000
```

### TypeScript Errors
```bash
# Type check
npx tsc --noEmit

# Fix type issues in files
```

### ESLint Errors
```bash
# Fix auto-fixable errors
npm run lint -- --fix
```

### Build Failures
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## Dependencies

### Runtime (4)
- react@^19.2.0
- react-dom@^19.2.0
- react-router-dom@^7.10.1
- lucide-react@^0.555.0

### Dev (13)
- vite@^7.2.4
- typescript@~5.9.3
- tailwindcss@^4.1.17
- eslint@^9.39.1
- @vitejs/plugin-react@^5.1.1

Total: ~50kb gzipped

---

## Contributing

1. Create feature branch (`git checkout -b feature/name`)
2. Make changes + test locally
3. Lint code (`npm run lint`)
4. Build successfully (`npm run build`)
5. Create pull request with description
6. Address code review feedback
7. Merge to main

---

## Support

**Issues/Questions?**
- Check [FAQ](./docs/project-overview-pdr.md#acceptance-criteria)
- Review [Code Standards](./docs/code-standards.md)
- See [Architecture Docs](./docs/system-architecture.md)
- Contact: [contact@gemify.dev](mailto:contact@gemify.dev)

---

## License

Proprietary. See LICENSE file for details.

---

## Team

- **Product Owner:** Gemify Leadership
- **Development:** [Your Team]
- **Design:** [Your Team]
- **QA:** [Your Team]

---

## Changelog

### v1.0.0 (2025-12-05)
- Initial launch
- 4 main pages (Home, FAQ, Privacy, App Detail)
- Design system implementation
- Responsive design
- Accessibility compliance (WCAG AA)
- Performance optimized
- Documentation complete

---

**Last Updated:** 2025-12-05 | [Full Documentation](./docs/)
