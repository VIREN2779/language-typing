# Language typing

Language typing is a frontend-only developer typing-race app inspired by TypeRacer. Instead of prose, it generates random programming-code snippets and measures how quickly and accurately you can reproduce them.

## Stack

- React + Vite
- JavaScript
- Tailwind CSS
- `@whitep4nth3r/random-code`
- `lucide-react`
- Browser LocalStorage for settings, race history, and derived progress

There is **no backend, API server, database, authentication, API key, or deployment service**.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

For a production build:

```bash
npm run build
npm run preview
```