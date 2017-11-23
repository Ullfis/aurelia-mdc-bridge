import { Aurelia } from 'aurelia-framework';
import { Router, RouterConfiguration, NavigationInstruction } from 'aurelia-router';

export class App {
  private router: Router;

  private configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      // tslint:disable:max-line-length
      { route: ['', 'permanent-above'], moduleId: './permanent-above/drawer', nav: true,  title: 'Permanent Above Toolbar' },
      { route: 'permanent-below',       moduleId: './permanent-below/drawer', nav: true,  title: 'Permanent Below Toolbar' },
      { route: 'persistent',            moduleId: './persistent/drawer',      nav: true,  title: 'Persistent' },
      { route: 'temporary',             moduleId: './temporary/drawer',       nav: true,  title: 'Temporary' }
    ]);
    this.router = router;
  }
}
