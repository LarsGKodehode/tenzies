# ABOUT
GitHub Action for Vite continuous build and deployment

# SETUP

#1 - Copy node.js.yml into root/.github/workflows
#2 - Edit node.js.yml:
    - {on: push: branches:} to listen for actions on wanted branch
    - Ensure {publish_dir:} reflects youre vite.config file
#3 - Wait for first run
#4 - Change GitHub Pages to deploy from branch {gh-pages}