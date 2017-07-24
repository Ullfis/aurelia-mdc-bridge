import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
  private router: Router;

  private configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: '',                  moduleId: './index',                nav: true,        title: '' },
      { route: 'offline',           moduleId: './offline/index',        nav: true,        title: 'Offline' },
      { route: 'material-icons',    moduleId: './material-icons/tips',  nav: true,        title: 'Material Icons' }
    ]);
    this.router = router;
  }
}
