# Book Tracker

A simple CRUD app for managing a reading list. Built to practice React Context API with a real backend.

You can add books, edit titles inline, and delete them. All changes go through a local JSON server so they persist across refreshes.

## Run it

You need two terminals:

```bash
# Terminal 1 — start the API
npx json-server --watch db.json --port 3001

# Terminal 2 — start the app
npm install
npm start
```

App runs at `http://localhost:3000`, API at `http://localhost:3001/books`.

## What's going on under the hood

State lives in a Context provider (`src/context/books.js`). Every component that needs books pulls from it via a custom hook. `useCallback` wraps the fetch functions so consumers don't re-render on every keystroke.

All four operations go through Axios to the JSON server. Local state updates only after the API responds.
