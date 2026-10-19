# React Projects

Projects I built while working through a React course on Udemy. Practice code, kept here so I don't lose it.

## What's in here

- **book** — CRUD app using React Context API. Books can be created, edited, and deleted. Uses a local JSON server as the backend.
- **cars** — Car list and search with Redux Toolkit. Add cars, search by name, see the total value of matching results.
- **comps** — A collection of UI components: accordion, modal, dropdown, sortable table, counter, and a custom router built without React Router.
- **media** — Users, albums, and photos browser built with RTK Query and async thunks.
- **location-map** — TypeScript + Vite app. Search a location and see it on a Leaflet map.
- **location-search** — Same idea as location-map but with Tailwind CSS added.
- **pics** — Image search app that pulls results from the Unsplash API.
- **registry** — NPM package browser using React Router v6 data loaders and TypeScript.

Not included: `animals`, `jsx`, `pdas`. Short intro exercises, not worth keeping.

## Running a project

Each folder is its own app. Pick one and run:

```bash
cd book
npm install
npm start
```

Same process for any other folder.

## Notes

**pics** needs an Unsplash API key to work. Copy `.env.example` to `.env` inside the `pics` folder and add your key:

```
REACT_APP_UNSPLASH_KEY=your_key_here
```

Free keys at [unsplash.com/developers](https://unsplash.com/developers).

**book** uses a JSON server mock backend. Run it in a separate terminal:

```bash
cd book
npm run server
```
