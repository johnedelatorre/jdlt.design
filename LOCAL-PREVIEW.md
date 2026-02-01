# How to See Your Latest Changes (Local Preview)

If the page doesn't reflect your latest code changes, it's usually **browser cache** or **viewing the wrong URL**.

## Why the page can look unchanged

1. **Browser cache** – The browser keeps old HTML/JS. When you open the preview URL, it may serve the previous build.
2. **Wrong URL** – You might have several preview tabs (e.g. 4173, 4175, 4177). An old tab can show an old build.
3. **Preview not restarted** – After `npm run build`, you must start (or restart) `npm run preview` so it serves the new `dist/` folder.

## Steps to always see the latest build

1. **Clean rebuild** (clears dist + Vite cache)
   ```bash
   npm run clean:build
   ```

2. **Start preview**
   ```bash
   npm run preview
   ```
   Use the URL it prints (e.g. `http://localhost:4178/`).

3. **Open in a private/incognito window**
   - Chrome/Edge: Ctrl+Shift+N (Windows) or Cmd+Shift+N (Mac)
   - Safari: File → New Private Window  
   Then paste the preview URL. That avoids cache.

   **Or** do a hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac).

4. **Confirm you're on the homepage**
   The URL should be exactly `http://localhost:PORT/` (no path). Other routes (e.g. `/about`) won’t show homepage changes.

## Dev server (optional)

To work with live reload without building each time:

```bash
npm run dev
```

Then open the URL it prints (e.g. `http://localhost:5173/`). This serves from source and updates as you edit.
