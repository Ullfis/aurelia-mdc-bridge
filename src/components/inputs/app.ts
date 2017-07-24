import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  private router: Router;

  private configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: '',                moduleId: './checkbox/checkbox',        nav: true,  title: 'Checkbox' },
      { route: 'checkbox',        moduleId: './checkbox/checkbox',        nav: true,  title: 'Checkbox' },
      { route: 'radio',           moduleId: './radio/radio',              nav: true,  title: 'Radio' },
      { route: 'selects-css',     moduleId: './select/selects-css',       nav: true,  title: 'Select-Css' },
      { route: 'selects',         moduleId: './select/selects',           nav: true,  title: 'Select' },
      { route: 'slider',          moduleId: './slider/slider',            nav: true,  title: 'Slider' },
      { route: 'switches',        moduleId: './switches/switches',        nav: true,  title: 'Switches' },
      { route: 'textfield',       moduleId: './textfield/textfield',      nav: true,  title: 'Textfield' }
    ]);
    this.router = router;
  }
}
