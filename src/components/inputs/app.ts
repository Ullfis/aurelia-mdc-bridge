import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  private router: Router;

  private configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: '',                 moduleId: './checkboxes/checkboxes',       nav: true,  title: 'Checkboxes' },
      { route: 'checkboxes',       moduleId: './checkboxes/checkboxes',       nav: true,  title: 'Checkboxes' },
      { route: 'radio-buttons',    moduleId: './radio-buttons/radio-buttons', nav: true,  title: 'Radio Buttons' },
      { route: 'select-menus',     moduleId: './select-menus/selects',        nav: true,  title: 'Select Menus' },
      { route: 'sliders',          moduleId: './sliders/sliders',             nav: true,  title: 'Sliders' },
      { route: 'switches',         moduleId: './switches/switches',           nav: true,  title: 'Switches' },
      { route: 'text-fields',      moduleId: './text-fields/text-fields',     nav: true,  title: 'Text Fields' }
    ]);
    this.router = router;
  }
}
