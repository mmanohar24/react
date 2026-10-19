# Component Library

A set of reusable UI components built from scratch, without any component library. There's a sidebar to navigate between them.

Components included: accordion, dropdown, modal, button group, sortable table, and a counter with `useReducer`.

The router is also custom — no React Router. It reads `window.location.pathname` and renders the matching page component.

## Run it

```bash
npm install
npm start
```

## What's going on under the hood

Each component lives in `src/components/` with its own hook in `src/hooks/` where needed. The custom router wraps navigation state in a Context provider so any component can push to history with `useNavigation()`. The sortable table uses a `useSort` hook that tracks the active column and direction.
