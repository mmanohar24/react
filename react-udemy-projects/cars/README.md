# Cars

Add cars with a name and cost, search the list by name, and see the total value of whatever matches. Built to practice Redux Toolkit.

## Run it

```bash
npm install
npm start
```

## What's going on under the hood

Two Redux slices: one for the car list (add/remove), one for the search form input. The `CarValue` component derives its total by filtering `cars.data` against `cars.searchTerm` on every render — no separate derived state, just a selector.

State management uses Redux Toolkit's `createSlice` with Immer under the hood, so mutations in reducers are fine.
