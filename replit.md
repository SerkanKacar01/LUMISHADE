# SunShade & Window Decorations Webshop

## Overview

This is a modern e-commerce webshop built with React, TypeScript, and Express for selling ready-made sunshades and window decorations. The application features a client-side React frontend with a Node.js/Express backend, using Drizzle ORM for database operations with PostgreSQL.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI components with shadcn/ui styling
- **Styling**: Tailwind CSS with custom design tokens
- **State Management**: TanStack Query for server state, React hooks for local state
- **Routing**: Wouter for client-side routing
- **Shopping Cart**: Local storage-based cart management

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage (development) with PostgreSQL session store capability
- **API Structure**: RESTful endpoints with `/api` prefix

### Database Schema
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Migrations**: Located in `./migrations` directory

## Key Components

### Frontend Components
- **Product Management**: Product grid, detail modals, and filtering
- **Shopping Cart**: Cart modal with quantity management
- **Checkout System**: Order form with customer information
- **UI Components**: Comprehensive set of accessible UI components from Radix UI
- **Navigation**: Header with cart indicator, smooth scrolling navigation

### Backend Components
- **Express Server**: Main application server with middleware
- **Route Registration**: Centralized route management in `server/routes.ts`
- **Storage Interface**: Abstract storage layer with in-memory implementation
- **Development Tools**: Vite integration for hot module replacement

### Data Management
- **Product Data**: Static product catalog with categories and specifications
- **Cart State**: Client-side cart management with localStorage persistence
- **User Data**: Basic user schema for future authentication features

## Data Flow

1. **Product Display**: Static product data is loaded and displayed in categorized grids
2. **Cart Operations**: Users add products to cart, stored locally in browser
3. **Checkout Process**: Order form collects customer information
4. **Order Submission**: Orders are processed client-side (no payment integration)
5. **State Persistence**: Cart state persists across browser sessions

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with PostCSS processing
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Utilities**: Class variance authority, clsx, date-fns

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL) with Drizzle ORM
- **Session Store**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin
- **Development Server**: Express with Vite middleware integration
- **TypeScript**: Strict type checking with path mapping
- **Database Tools**: Drizzle Kit for schema management and migrations

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: tsx for TypeScript execution with automatic restarts
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Production Build
- **Frontend**: Vite build outputs to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Assets**: Frontend assets served from Express in production
- **Database**: Production PostgreSQL database with Drizzle migrations

### Environment Configuration
- **Development**: NODE_ENV=development with Vite integration
- **Production**: NODE_ENV=production with static file serving
- **Database**: DATABASE_URL environment variable required
- **Session**: Session configuration for production deployment

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns, utilizing industry-standard tools and patterns for a scalable e-commerce solution.