import { Aurelia } from 'aurelia-framework';
import { Router, RouterConfiguration, NavigationInstruction } from 'aurelia-router';

export class App {
  private router: Router;

  private configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: '',                  moduleId: './index',                    nav: true,  title: '' },
      { route: 'buttons',           moduleId: './buttons/app',              nav: true,  title: 'Buttons' },
      { route: 'cards',             moduleId: './cards/card',               nav: true,  title: 'Cards' },
      { route: 'dialog',            moduleId: './dialog/dialog',            nav: true,  title: 'Dialog' },
      { route: 'grids',             moduleId: './grids/grids',              nav: true,  title: 'Grid' },
      { route: 'grid-list',         moduleId: './grid-list/grid-lists',     nav: true,  title: 'Grid List' },
      { route: 'inputs',            moduleId: './inputs/app',               nav: true,  title: 'Inputs' },
      { route: 'list',              moduleId: './list/list',                nav: true,  title: 'List' },
      { route: 'linear-progress',   moduleId: './progress/linear',          nav: true,  title: 'Linear Progress' },
      { route: 'ripple',            moduleId: './ripple/ripples',           nav: true,  title: 'Ripple' },
      { route: 'simple-menu',       moduleId: './simple-menu/simple-menu',  nav: true,  title: 'Simple Menu' },
      { route: 'snackbar',          moduleId: './snackbar/snackbar',        nav: true,  title: 'Snackbar' },
      { route: 'tabs',              moduleId: './tabs/tabs',                nav: true,  title: 'Tabs' },
      { route: 'toolbars',          moduleId: './toolbars/toolbar',         nav: true,  title: 'Toolbars' },
      { route: 'typography',        moduleId: './typography/typography',    nav: true,  title: 'Typography' }
    ]);
    this.router = router;
  }
}
