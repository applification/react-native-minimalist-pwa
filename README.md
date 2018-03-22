# Gatsby PWA with React Native Web

Art NPM Module has a bug that prevents SSR / PreRender to fix just add the following to `node_modules/art/modes/fast-noSideEffects.js`

```JavaScript
var hasCanvas = function() {
  var canvas =
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement &&
    document.createElement('canvas')
  return canvas && !!canvas.getContext
}
```

The default Gatsby starter.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

And run from your CLI:

```sh
gatsby new gatsby-example-site
```

Then you can run it by:

```sh
cd gatsby-example-site
npm run develop
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
