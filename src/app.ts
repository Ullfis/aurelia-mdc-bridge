import { Aurelia, inject } from 'aurelia-framework';
import { Router, RouterConfiguration, NavigationInstruction, Next } from 'aurelia-router';

@inject(Element)
export class App {
  public static title = 'Aurelia Mdc Bridge';
  public static titleSmall = 'Mdc';
  public title = App.title;
  public titleSamll = App.titleSmall;
  private router: Router;

  constructor(private element: Element) {}

  private configureRouter(config: RouterConfiguration, router: Router) {

    config.title = this.title;
    config.addPipelineStep('postcomplete', PostCompleteStep);
    config.map([
      { route: '',                  moduleId: 'index',                  nav: true, title: '', name: 'welcome' },
      { route: 'documentation',     moduleId: 'documentation/app',      nav: true, title: 'Documentation' },
      { route: 'components/drawer', moduleId: 'components/drawer/app',  nav: true, title: 'Drawer' },
      { route: 'components',        moduleId: 'components/app',         nav: true, title: 'Samples' }
    ]);
    this.router = router;
  }
}

/**
 * Scroll to top when navigating to a new page/route
 */
class PostCompleteStep {
  public run(instruction: NavigationInstruction, next: Next) {
    if (!instruction.config.settings.noScrollToTop) {
      window.scrollTo(0, 0);
    }
    return next();
  }
}
