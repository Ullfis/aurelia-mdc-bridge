# Aurelia Mdc Bridge

![version](https://img.shields.io/npm/v/aurelia-mdc-bridge.svg?style=flat-square)![downloads](https://img.shields.io/npm/dt/aurelia-mdc-bridge.svg?style=flat-square)![license](https://img.shields.io/npm/l/aurelia-mdc-bridge.svg?style=flat-square)

[Project page](https://ullfis.github.io/aurelia-mdc-bridge) | [GistRun](https://gist.run/?id=7e9a439b81c17ac94e40409cb1f4b14d)

_This plugin is in active development and your feedback is welcome_


### What is Aurelia Mdc Bridge?

Aurelia Mdc Bridge is a collection of wrappers for Material Design Components. You can easy use components and data-bind properties using Aurelia as your client framework.

### What is Aurelia?

[Aurelia](http://aurelia.io) is a JavaScript client framework for mobile, desktop and web leveraging simple conventions and empowering creativity.

### What is Material Components?

[Material Components](https://material.io/components/web/) provide a reliable development environment for apps and websites across Android, iOS, and the web.

Components are updated as the Material Design system evolves, ensuring consistent pixel-perfect implementation and adherence to Google’s front-end development standards, such as internationalization and accessibility support.

## Getting started

- Create a new or use an existing project with aurelia-cli.

```bash
au new material-test
...
cd material-test
```

- Install aurelia-mdc-bridge:

```bash
au install aurelia-mdc-bridge
```

- Include Material Design icons and fonts in index.html:

```html
<html class="mdc-typography">
  <head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    ...
```

- Register the plugin in your main.js in src folder:

```javascript
export function configure(aurelia) {
  ...
    aurelia.use.plugin('aurelia-mdc-bridge')
  ...
}
```

- Import the css in your app.html:

```html
<require from="material-components-web/material-components-web.css"></require>
```

- Use it:

```html
<mdc-text-field value.bind="value">          
  Username
</mdc-text-field>            
<button mdc-button="raised: true;">Submit</button>
```

```bash
au run -w
```

- Check out [project page](https://ullfis.github.io/aurelia-mdc-bridge) to add more components to your project.



## Build from source

Install dependencies:

```bash
npm install
```

Build and watch

```bash
npm start
```

Lint

```bash
npm run lint
```

Build only bridge components (production):

```bash
npm run build
```

Build only docs (production):

```bash
npm run docs
```

Build bridge, docs, update changelog and git add all changes (production)

```bash
npm run release
```


### Tests

Visual and console. No tests has been created yet. Contribute?


# Pull Requests

Yes, please!
