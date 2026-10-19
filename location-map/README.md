# Location Map

Search for a place and see it pinned on a map. Built with TypeScript, Vite, and Leaflet.

Uses the [Nominatim](https://nominatim.openstreetmap.org/) API for geocoding — no API key needed.

## Run it

```bash
npm install
npm run dev
```

## What's going on under the hood

The search input calls Nominatim and returns up to 5 matching places with coordinates. Selecting one passes the lat/lon to the Leaflet map component, which re-centers and drops a marker. All typed — `Place.ts` defines the shape returned from the API.
