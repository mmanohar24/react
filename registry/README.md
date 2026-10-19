# Registry

An NPM package browser. The home page shows a few featured packages, and you can search for any package by name and see its details.

Built with TypeScript, Vite, and React Router v6 data loaders.

## Run it

```bash
npm install
npm run dev
```

## What's going on under the hood

Each route has a `loader` function that fetches data before the component renders — no loading states needed inside components. The home page loader fetches a hardcoded list of featured packages in parallel with `Promise.all`. The search and details loaders fetch from the NPM registry API based on URL params.

Types for the API responses live in `src/api/types/`.
