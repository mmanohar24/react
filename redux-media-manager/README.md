# API-Driven Component System

A React app that manages a Users → Albums → Photos hierarchy. Each level loads from a json-server backend and expands inline. Built to practice two different approaches to async data in Redux Toolkit: async thunks for users, and RTK Query for albums and photos.

## Features

- Add and remove users (random names via faker.js)
- Expand a user to see their albums, expand an album to see its photos
- Loading skeletons while data is fetching
- Each async operation tracks its own loading and error state

## Stack

- React, Redux Toolkit, RTK Query
- json-server (local REST backend)
- Axios, faker.js, Tailwind CSS, react-icons

## Setup

```bash
npm install

# Start the backend (runs on port 3005)
npx json-server --watch db.json --port 3005

# Start the app (in a new terminal)
npm start
```

App is at `http://localhost:3000`. The API runs at `http://localhost:3005`.

## Project structure

```
src/
├── components/
│   ├── UsersList.js         # Fetches and renders all users
│   ├── UsersListItem.js     # Single user row with expand + delete
│   ├── AlbumsList.js        # Albums for a given user (RTK Query)
│   ├── AlbumsListItem.js    # Single album row with expand + delete
│   ├── PhotosList.js        # Photos for a given album (RTK Query)
│   ├── PhotosListItems.js   # Single photo tile
│   ├── Button.js            # Reusable button with loading state
│   ├── ExpandablePanel.js   # Collapsible panel used across all levels
│   ├── Panel.js             # Basic card wrapper
│   └── Skeleton.js          # Loading placeholder
├── hooks/
│   └── use-thunk.js         # Custom hook to run a thunk and track its state
├── store/
│   ├── apis/
│   │   ├── albumsApi.js     # RTK Query endpoints for albums
│   │   └── photosApi.js     # RTK Query endpoints for photos
│   ├── slices/
│   │   └── usersSlice.js    # Handles fetch/add/remove with extraReducers
│   └── thunks/
│       ├── fetchUsers.js
│       ├── addUser.js
│       └── removeUser.js
└── index.js
```

## What I worked on

- Two async patterns side by side: classic async thunks (users) vs RTK Query (albums, photos) — useful to see how they differ in practice
- Custom `useThunk` hook to track loading and error state for any thunk without repeating that logic in every component
- RTK Query cache invalidation so deleting an album automatically removes its photos from the cache
- Reusable components (Button, ExpandablePanel, Skeleton) used consistently at every level of the hierarchy
