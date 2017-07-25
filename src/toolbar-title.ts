import { inject, bindable, containerless } from 'aurelia-framework';
import { App } from './app';

@containerless()
export class ToolbarTitle {
  @bindable() public showMenu = false;
  private title = App.title;
  private titleSmall = App.titleSmall;
  private parent;

  constructor(private element: Element) {}

  private bind(bindingContext) {
    this.parent = bindingContext;
  }

  private onClick() {
    this.parent.onClick();
  }
}
