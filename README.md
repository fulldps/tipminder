# TipMinder

A small SPA for browsing merchant cards: a list, a detail page with a chart, and an agreement form. Data comes from [DummyJSON](https://dummyjson.com).

## Stack

- React + React Router
- Redux Toolkit and RTK Query
- Webpack
- Native CSS with CSS Modules
- Recharts for the chart

## Pages

- `/cards` — card list (from DummyJSON `/users`) with a status filter
- `/cards/:id` — card details
- `/agreement` — agreement form

## Running

```bash
npm install
npm start
```

Dev server runs at `http://localhost:3000`.

Production build:

```bash
npm run build
```

Output goes to `dist/`.

## Notes

Some DummyJSON data doesn't match the design, so the card status is derived from `id` and the chart data is hardcoded (the API has no time series).

## Deploy

<!-- link will be added after deploy -->
