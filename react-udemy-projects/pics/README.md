# Pics

Search for images using the Unsplash API. Results show in a masonry-style grid.

## Setup

You need a free Unsplash API key. Copy `.env.example` to `.env` and fill it in:

```
REACT_APP_UNSPLASH_KEY=your_key_here
```

Get one at [unsplash.com/developers](https://unsplash.com/developers).

## Run it

```bash
npm install
npm start
```

## What's going on under the hood

The search bar is a controlled component that calls `searchImages` on submit. That function hits the Unsplash API via Axios with the key from the environment variable. Results come back as an array and get passed down to `ImageList`, which renders each one through `ImageShow`. CSS columns handle the masonry layout.
