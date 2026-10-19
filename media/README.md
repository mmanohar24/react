# Media

A users/albums/photos browser. Each user can have albums, each album can have photos. Everything is expandable inline. Built to practice RTK Query and async thunks together.

Uses a local JSON server as the backend with a 1-second artificial delay to simulate real network conditions.

## Run it

You need two terminals:

```bash
# Terminal 1 — start the API (port 3005)
npx json-server --watch db.json --port 3005

# Terminal 2 — start the app
npm install
npm start
```

## What's going on under the hood

Albums and photos each have their own RTK Query API slice with `fetchBaseQuery`. Tags handle cache invalidation — adding or removing an album re-fetches only that user's album list, not everything. Users are fetched with an async thunk instead of RTK Query, so you can see both patterns side by side.

Fake data for new albums and photos comes from `@faker-js/faker`.
