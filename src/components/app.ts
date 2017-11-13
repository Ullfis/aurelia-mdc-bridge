import { Aurelia } from 'aurelia-framework';
import { Router, RouterConfiguration, NavigationInstruction } from 'aurelia-router';

export class App {
  private router: Router;

  private configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: '',                moduleId: './index',                           nav: true, title: '' },
      { route: 'buttons',         moduleId: './buttons/app',                     nav: true, title: 'Buttons' },
      { route: 'cards',           moduleId: './cards/cards',                     nav: true, title: 'Cards' },
      { route: 'dialogs',         moduleId: './dialogs/dialogs',                 nav: true, title: 'Dialogs' },
      { route: 'grid-lists',      moduleId: './grid-lists/grid-lists',           nav: true, title: 'Grid Lists' },
      { route: 'inputs',          moduleId: './inputs/app',                      nav: true, title: 'Inputs' },
      { route: 'layout-grids',    moduleId: './layout-grids/layout-grids',       nav: true, title: 'Layout Grid' },
      { route: 'linear-progress', moduleId: './linear-progress/linear-progress', nav: true, title: 'Linear Progress' },
      { route: 'lists',           moduleId: './lists/lists',                     nav: true, title: 'Lists' },
      { route: 'menus',           moduleId: './menus/menus',                     nav: true, title: 'Menus' },
      { route: 'ripples',         moduleId: './ripples/ripples',                 nav: true, title: 'Ripples' },
      { route: 'snackbars',       moduleId: './snackbars/snackbars',             nav: true, title: 'Snackbars' },
      { route: 'tabs',            moduleId: './tabs/tabs',                       nav: true, title: 'Tabs' },
      { route: 'toolbars',        moduleId: './toolbars/toolbars',               nav: true, title: 'Toolbars' },
      { route: 'typography',      moduleId: './typography/typography',           nav: true, title: 'Typography' }
    ]);
    this.router = router;
  }
}
