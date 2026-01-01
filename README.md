# ARP Digital API Documentation

This application uses [Zudoku](https://zudoku.dev/) to generate interactive API documentation from OpenAPI schemas.

## Setup

### Prerequisites

- Node.js v18+ (v20 or v22 recommended)
- npm 10.8.2+ (managed via `packageManager` field)

### Installation

From the **root of the monorepo**, run:

```bash
npm install
```

This will:

1. Install all workspace dependencies
2. Run the postinstall script to generate Prisma client
3. Automatically create symlinks for React dependencies in the api-docs workspace

### Running the Dev Server

#### Option 1: From the root directory

```bash
npm run dev
```

This will start all services including the api-docs on port 3000.

#### Option 2: Run only api-docs

From the root:

```bash
npm run dev --workspace=apps/api-docs
```

Or from the api-docs directory:

```bash
cd apps/api-docs
npm run dev
```

The documentation will be available at: **http://localhost:3000**

## Troubleshooting

### React Module Not Found Error

If you encounter an error like:

```
Error: ENOENT: no such file or directory, open '.../node_modules/react/package.json'
```

This happens because Zudoku expects React in the local `node_modules`, but the monorepo hoists dependencies to the root. The postinstall script should handle this automatically, but if it doesn't:

**Manual fix:**

```bash
cd apps/api-docs/node_modules
ln -sf ../../../node_modules/react react
ln -sf ../../../node_modules/react-dom react-dom
```

### Schema Warnings

You may see warnings about OpenAPI schema validation. These don't prevent the server from running but should be addressed in the schema files under `schema/` directory.

## Project Structure

```
apps/api-docs/
├── schema/              # OpenAPI schema files
├── pages/              # Custom documentation pages
├── public/             # Static assets
├── src/                # Source code
├── zudoku.config.tsx   # Zudoku configuration
└── zudoku.build.ts     # Build configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Configuration

The main configuration is in `zudoku.config.tsx`. See [Zudoku documentation](https://zudoku.dev/docs) for available options.

##
