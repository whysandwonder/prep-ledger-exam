# Preparation Ledger — install on your phone or tablet

These files make the Ledger installable as an app on Android and iPad. Nothing here
is a server: the page runs entirely on your device and your data never leaves it.

## Files
- `index.html` ............ the app itself
- `manifest.webmanifest` .. name, icons, colours, standalone display
- `sw.js` ................. service worker; makes it work with no internet at all
- `icon-*.png` ............ launcher icons

All of them must sit in the same folder, side by side.

## Put them online once (GitHub Pages, free)
1. Make a GitHub account if you don't have one.
2. Create a new repository — name it anything, e.g. `ledger`. Private is fine.
3. Upload all seven files into the root of the repository (drag and drop works).
4. Repository → Settings → Pages → under "Branch" pick `main` and `/ (root)` → Save.
5. Wait about a minute. The page gives you a link like
   `https://<your-username>.github.io/ledger/`

## Install it on Android
1. Open that link in Chrome on your phone.
2. Let it load fully once — this is when the offline copy is saved.
3. Chrome shows an "Install app" prompt, or the Ledger shows its own
   "Install as an app" button in Settings. Either works.
   No prompt? Chrome menu (⋮) → "Add to Home screen" → "Install".
4. Open it from your home screen. No address bar, works in flight mode.

## Install on iPad or iPhone
Safari → open the link → Share button → "Add to Home Screen".
(Safari only installs from its own Share menu; Chrome on iOS cannot.)

## Updating later
Replace `index.html` in the repository with a newer one and bump `CACHE` in
`sw.js` (`ledger-v1` → `ledger-v2`). Open the app twice and it refreshes.
Your saved data is untouched by updates.

## Your data
Stored on the device, in the browser engine behind the app. It survives updates
and reboots. It does NOT survive "clear site data", uninstalling, or moving to a
new phone — so use Settings → Export backup now and then, and Import on the new
device. The backup reminder appears every 7 days by itself.
