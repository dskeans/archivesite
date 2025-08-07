# replit.md

## Overview

arcHIVE is a media integrity platform built for the digital age, designed to provide cryptographic authentication and provenance tracking for digital media content. The application focuses on combating deepfakes, AI-generated content, and media manipulation by implementing content authenticity standards and blockchain-based verification systems. The platform serves multiple use cases including civic journalism, educational portfolios, legal evidence preservation, and digital art ownership protection.

## Current Implementation

The website is a single-page application showcasing arcHIVE's solutions across industries with:
- Fixed sidebar navigation with smooth scrolling between full-height sections
- About section explaining C2PA, blockchain, and IPFS technology
- Industry-specific problem/solution format covering Insurance, Artists, Journalism, Education, and Law
- Real-world news headline callouts between sections highlighting authenticity crises
- "The Future" section addressing AI company oversight issues and creator protection strategies
- Investor section with market opportunity and contact information
- Contact email: thearchivemint@mail.com for investment inquiries and general outreach

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI System**: Shadcn/ui component library built on Radix UI primitives
- **Styling**: TailwindCSS with CSS variables for theming and dark mode support
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Component Structure**: Modular component architecture with reusable UI components and custom hooks

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix routing
- **Development Setup**: Hot module reloading with Vite integration for seamless development experience
- **Error Handling**: Centralized error handling middleware with structured error responses

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema evolution
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Schema Location**: Shared schema definitions in `/shared/schema.ts` for type consistency across frontend and backend

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL storage backend
- **User Model**: Basic user entity with username/password authentication
- **Type Safety**: Shared TypeScript types between client and server using Zod validation schemas

### External Dependencies
- **Database**: Neon Database (serverless PostgreSQL) via `@neondatabase/serverless`
- **Media Integrity**: C2PA (Coalition for Content Provenance and Authenticity) standards implementation
- **Blockchain Integration**: Ethereum-based content anchoring (Sepolia testnet for development, mainnet for production)
- **File Storage**: IPFS (InterPlanetary File System) for decentralized content storage
- **Cryptography**: Device-specific key signing and content hashing for authenticity verification
- **UI Components**: Extensive Radix UI component library for accessible, customizable interface elements
- **Development Tools**: Replit-specific plugins for development environment integration and error overlay