# ARP Digital API Documentation - Project Context

## Overview
This project generates interactive API documentation for ARP Digital's financial technology platform using Zudoku. ARP Digital provides APIs for international money transfers, cryptocurrency trading, digital wallet management, and payment processing.

## Key Features
- Multi-currency support (150+ currencies)
- Global reach (200+ countries)
- Real-time processing
- HMAC SHA256 authentication
- Comprehensive APIs: Remittance, Trade, Checkout, Wallet, OTC
- Webhook integration
- Sandbox environment for testing

## Technology Stack
- **Framework**: Zudoku (React-based documentation generator)
- **Language**: TypeScript/JavaScript
- **Build Tool**: npm workspaces (monorepo setup)
- **APIs**: OpenAPI 3.0 schemas
- **Search**: Pagefind
- **Deployment**: Vercel

## Project Structure
```
api-docs/
├── schema/              # OpenAPI 3.0 schema files
│   ├── remittance-openapi.json
│   ├── trade-openapi.json
│   ├── checkout-openapi.json
│   ├── wallet-openapi.json
│   └── otc-openapi.json
├── pages/               # Custom documentation pages (Markdown)
├── public/              # Static assets (images, CSS, etc.)
├── src/                 # React components and custom pages
├── zudoku.config.tsx    # Main configuration file
├── zudoku.build.ts      # Build configuration
├── package.json         # Dependencies and scripts
└── README.md           # Setup and usage instructions
```

## APIs Overview

### Remittance API
Handles international money transfers with competitive rates and fast processing.

### Trade API
Provides access to global cryptocurrency markets with advanced trading features.

### Checkout API
Offers hosted checkout solutions for seamless payment acceptance.

### Wallet API
Enables programmatic management of digital wallets, bank accounts, and balances.

### OTC API
Supports over-the-counter cryptocurrency trades for better rates on large transactions.

## Configuration
- Main config: `zudoku.config.tsx`
- Defines navigation structure, API endpoints, themes, and plugins
- Supports custom pages and components
- Integrates search functionality

## Development Setup
1. Node.js v18+ required
2. Run `npm install` from monorepo root
3. Development server: `npm run dev`
4. Documentation available at http://localhost:3000

## Key Files for Understanding
- `README.md`: Setup instructions and troubleshooting
- `zudoku.config.tsx`: Navigation and API configuration
- `pages/index.md`: Landing page content
- Schema files in `schema/`: API specifications
- Custom components in `src/`: React components for special pages

## Authentication
All API requests require:
- X-API-Key header
- X-Timestamp header
- X-Signature header (HMAC SHA256)
- X-Environment header

## Support
- Documentation: Interactive docs with examples
- Support: support@arpdigital.com
- Dashboard: https://dashboard.arpdigital.com

## Recent Updates
- Zudoku-based documentation system
- Multiple API integrations
- Enhanced navigation structure
- Search functionality with Pagefind
- Custom landing page and components

This context provides the foundation for understanding and contributing to the ARP Digital API documentation project.
