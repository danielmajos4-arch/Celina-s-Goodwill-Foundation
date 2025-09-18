# Celina's Goodwill Foundation Landing Page

## Overview

This is a React-based landing page for Celina's Goodwill Foundation, a mental health advocacy organization dedicated to breaking mental health stigma. The application is built as a single-page website that tells the story of Celina Mbgogo Okwuokei and promotes mental health awareness through community support, education, and advocacy services.

The site features multiple interactive sections including hero messaging, statistics displays, testimonials, partnership opportunities, social media integration, and contact forms. The design follows a sophisticated visual approach inspired by premium nonprofit websites, emphasizing emotional storytelling and professional presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom design system and shadcn/ui component library
- **UI Components**: Radix UI primitives for accessible, unstyled components

### Component Structure
- **Layout Components**: Header with navigation, Footer with site links
- **Content Sections**: Hero, Statistics, Story, Mission, Partnership, Social Media, Testimonials, Contact
- **Interactive Elements**: Floating action buttons, scroll animations, newsletter signup
- **Utility Components**: Toast notifications, form handling, mobile responsiveness

### Design System
- **Color Palette**: Blue (primary), Green (healing), Pink (compassion) with gradient applications
- **Typography**: Inter font family with semantic weight hierarchy
- **Spacing**: Tailwind spacing scale (4, 8, 12, 16 units)
- **Components**: Consistent card layouts, hover animations, accessibility considerations

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Development**: Hot module replacement via Vite middleware integration
- **Storage Interface**: Abstract storage layer with in-memory implementation
- **API Structure**: RESTful endpoints under `/api` prefix (currently minimal)

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User management with username/password authentication
- **Migrations**: Drizzle Kit for schema migrations and database management

### Form Handling
- **Validation**: React Hook Form with Zod schema validation
- **Contact Forms**: Multi-step contact form with inquiry type selection
- **Newsletter**: Email subscription with validation and error handling
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## External Dependencies

### Core Framework Dependencies
- React ecosystem: React 18, React DOM, React Router (Wouter)
- TypeScript for type safety and developer experience
- Vite for build tooling and development server

### UI and Styling
- Tailwind CSS for utility-first styling approach
- Radix UI component primitives for accessibility
- Lucide React for consistent iconography
- Class Variance Authority for component variant management

### Database and Backend
- Drizzle ORM with PostgreSQL adapter
- Neon Database serverless PostgreSQL hosting
- Express.js for server framework
- Connect PG Simple for session storage

### Development Tools
- ESBuild for production server bundling
- PostCSS with Autoprefixer for CSS processing
- TanStack Query for data fetching and caching

### Form and Interaction
- React Hook Form for form state management
- Zod for runtime type validation
- Date-fns for date manipulation
- Embla Carousel for testimonial sliders

The application is designed to be deployed as a full-stack application with PostgreSQL database support, though it currently includes mock data and can run with in-memory storage for development purposes.