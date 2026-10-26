ANAS TECH PWA — GitHub Pages setup

Upload these files to the ROOT of the existing "software" repository:
- index.html (replace existing index.html)
- manifest.json
- sw.js

The manifest uses your original Google Drive logo's direct Googleusercontent image URL.
No icons folder is needed in this version.

Then commit changes and wait for GitHub Pages deployment.
Open https://anas-tech-p.github.io/software/ in Android Chrome.
Use Chrome menu (⋮) > Install app / Add to Home screen.

Notes:
- This does not make the app work offline.
- Login and application data continue to use the existing Google Apps Script API.
- If the original logo is not publicly viewable, make the Drive file accessible to anyone with the link.
