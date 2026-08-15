# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

# WhereToWatch

# Folder Structure

app/
├── root.tsx
├── routes.ts
├── app.css
│
├── routes/ ← ONLY route modules (1 file per URL)
│ ├── home.tsx → "/"
│ ├── search.tsx → "/search"
│ └── movie.$id.tsx            → "/movie/:id"   (or movie/$id.tsx, see note below)
│
├── components/ ← reusable, dumb/presentational UI
│ ├── ui/ ← generic primitives: Button, Card, Input, Spinner
│ └── movie/ ← domain-specific: MovieCard, MoviePoster, RatingBadge
│
├── features/ (optional) ← if a page gets complex, group its pieces here
│ └── search/
│ ├── SearchBar.tsx
│ └── useSearchResults.ts
│
├── lib/ ← non-UI logic: API clients, formatting, constants
│ ├── tmdb.ts (e.g. movie API wrapper)
│ └── utils.ts
│
├── hooks/ ← shared custom hooks
│
└── types/ ← shared TS types/interfaces
