# Minecraft Discontinued Features Tools
This is a generator of interactive tools for Minecraft Discontinued Features (MCDF) Wiki, using Minecraft Wiki's "mcw-calc" technology, running on GitHub Pages (mcdf-static.github.io).

# Usage
Requirements:
* NodeJS v20
* pnpm

After cloning reposistory, head to `src/tools` and create a folder. This will be the name of the tool. All pages must have
* index.html (main entry point for users)
* main.ts (innitializes Vue app)
* App.vue (main development area)

For index.html, locate the line `<script type="module" src="/tools/TOOLNAME/main.ts"></script>` and edit the `TOOLNAME` to match tool. Everything else should work fine. Make sure App.vue has the `<template>` tag.

To test it run:
```pnpm run dev```

Then navigate to `/tools/TOOLNAME` to test the tool.

# Deploy
For deploying, use:
```pnpm run build```

This should generate a folder `dist` with subfolders `assets` and `tools`. These subfolders are then uploaded to the GitHub Pages repository. After that, they are ready to be used on any wiki.