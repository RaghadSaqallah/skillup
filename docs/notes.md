# Technical Notes

## Biggest Docker problem and how I solved it

**Problem:** `docker compose build` failed at `RUN npm run build` with:

```
Error: Cannot find native binding.
Cannot find module '@tailwindcss/oxide-linux-x64-gnu'
```

**Causes (three combined):**

1. The first Dockerfile used `node:18`, but Tailwind CSS v4 requires Node 20 or newer.
2. The Dockerfile deleted `package-lock.json` and ran `npm install`. This triggers a known npm bug with optional dependencies, so the Linux native binary of Tailwind's Rust engine (`oxide`) was never installed. The install also took about 232 seconds.
3. `package.json` pointed to `./css/input.css`, while the real file is `src/css/input.css`. The final image also copied the whole `/app` folder, so the site would have been served under `/src/` together with `node_modules`.

**Solution:**

- Switched to `node:22-alpine`.
- Kept `package-lock.json` (it already contained the Linux bindings) and used `npm ci` for a fast, reproducible install.
- Fixed the paths in the npm scripts to `./src/css/...`.
- Used a **multi-stage build**: Node only compiles the CSS, and Nginx serves just the `src/` folder. The final image has no Node and no `node_modules`.

## Most important Git/GitHub lesson

Small commits with clear messages (`feat:`, `docker:`, `docs:`, `fix:`) make the history readable and make it easy to see where a problem was introduced. I also learned to keep generated and heavy files (like `node_modules`) out of the repository with `.gitignore`, and to use a feature branch plus a Pull Request instead of pushing everything directly to `main`.

> Edit this section in your own words before submitting.
