# Plan: Cinematic Production Company Website

Create a high-end cinematic production company website named "NOIR STUDIOS" with a dark, professional aesthetic.

## 1. Design & Theme
- **Style**: Dark Mode (OLED) / Cinematic Luxury.
- **Colors**: Background (#0A0A0A), Accents (Gold #D4AF37, Amber, White).
- **Typography**: Playfair Display (via Google Fonts import) for headings, Inter for body.
- **Components**: shadcn/ui (Button, Input, Textarea, Card, Badge, Tabs, Carousel).
- **Animations**: framer-motion for smooth section reveals and hover states.

## 2. Page Sections
- **Navigation**: Sticky translucent navbar with "Request Quote" CTA.
- **Hero**: Immersive cinematic image background, bold headline, "Watch Reel" modal trigger.
- **Stats**: Quick counters for projects, awards, and clients.
- **Portfolio**: Filterable grid (Commercials, Narrative, Documentaries, Music Videos).
- **Services**: Production, Post-Production, Equipment Rental, Creative Strategy.
- **Process**: "From Script to Screen" - 4-step interactive production flow.
- **Behind The Scenes**: Visual masonry gallery showing the craft.
- **Team**: Highlight key creative leads (Director, Cinematographer, Editor).
- **Testimonials**: Sleek carousel of client quotes.
- **Equipment Rental**: Catalog of high-end gear available for rent.
- **Contact**: Multi-purpose form with validation and success state.
- **Footer**: Brand links, social media, and newsletter signup.

## 3. Implementation Details
- `App.tsx`: Main entry point with layout and section management.
- `components/`:
    - `Navbar.tsx`: Responsive navigation.
    - `Hero.tsx`: High-impact landing.
    - `Portfolio.tsx`: Project showcase.
    - `Services.tsx`: Service offerings.
    - `Process.tsx`: Production lifecycle.
    - `BehindTheScenes.tsx`: BTS content.
    - `Team.tsx`: Creative profiles.
    - `Equipment.tsx`: Gear rental catalog.
    - `ContactForm.tsx`: Lead generation.
- `lib/utils.ts`: Tailwind merging helper.
- `index.css`: Custom variables for the cinematic theme.

## 4. Assets
- Use generated cinematic images from `generate_images_bulk`.
- Icons: `lucide-react`.
- Animations: `framer-motion`.
- Alerts: `sonner`.
