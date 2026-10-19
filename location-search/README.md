# Location Search

Same idea as location-map but rebuilt with Tailwind CSS for styling. Search for a place, pick from the results, see it on a Leaflet map.

Uses the [Nominatim](https://nominatim.openstreetmap.org/) API — no API key needed.

## Run it

```bash
npm install
npm run dev
```

## What's going on under the hood

Built with TypeScript and Vite. The search API call is in `src/api/search.ts` — it hits Nominatim, parses the GeoJSON response, and returns a typed array of `Place` objects. Tailwind handles all the layout and styling.
