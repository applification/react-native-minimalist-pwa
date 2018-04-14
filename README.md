<div align="center">

# react-native-minimalist-pwa

![React Native Minimalist Logo](Minimalist-Logo.png)

</div>

---

## Progressive Web App Example

This is an example illustrating the usage of [react-native-minimalist](https://github.com/applification/react-native-minimalist) within a Gatsby based Progressive Web App (PWA).

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

* [Installation](#installation)
* [Running the PWA](#running-the-pwa)
* [Art Module Bug](#art-module-bug)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

`npm install`

## Usage

### Storybook

`npm run storybook`

### Development

`npm run develop`

### Production

`npm run build`

## Art Module Bug

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
