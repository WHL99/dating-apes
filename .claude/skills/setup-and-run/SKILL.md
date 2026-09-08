---
name: setup-and-run
description: Set up and start the dating-apes dev environment (backend + client installs, .env check, run both dev servers). Use when the user asks to set up, install, or start this project.
---

Set up and run the dating-apes local dev environment.

1. Check root dependencies: if `node_modules/` is missing at the repo root, run `npm install` (this also cascades into `client/` via the root `install` script).
2. Check client dependencies: if `client/node_modules/` is missing, run `npm install` inside `client/`.
3. Check `.env` exists at the repo root. It must define:
   - `MONGODB_URI`
   - `TOKEN_SECRET`
   - `CLOUDINARY_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
   - `PORT` — set this to `5005` (see note below). Without it, the backend
     falls back to `5006`, which does NOT match the client proxy.

   If `.env` is missing, or any key above isn't present, stop and tell the user which keys are missing — don't guess values or print existing secret values.
4. Start both servers together from the repo root:
   ```bash
   npm run dev
   ```
   This runs the Express backend (`nodemon server.js`) and the React client
   concurrently via `concurrently`. The client (`client/package.json`
   `proxy`) is hardcoded to expect the backend at `http://localhost:5005`,
   but `server.js` defaults to port `5006` when `PORT` is unset — so `PORT`
   must be `5005` in `.env`, or the client's proxied API calls will fail to
   reach the backend.
