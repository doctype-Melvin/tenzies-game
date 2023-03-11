# Tenzies Game

[Play the game](https://shinytenzies.netlify.app/)

I made this game during the Scrimba React course.
This project was a nice and comprehensive
introduction to React components and hooks.

## Insights

How to deploy a Vite React App with legacy peer dependencies:

- you need a build to deploy successfully!!
- <mark><b>npm run build</b></mark>
- go to netlify cli and `netlify deploy --open`
- if this deployment fails with something like:<br>
  `npm ERR! this command with --force, or --legacy-peer-deps` <br>

  1. `netlify open`
  2. go to "Site settings" > "Environment variables"
  3. "Add a variable" > `key: CI` `value: false`
  4. "Add a variable" > `key: NPM_FLAGS` `value: --legacy-peer-deps`

- now redeploy the site `netlify deploy --open`
