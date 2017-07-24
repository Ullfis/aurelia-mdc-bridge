import { inject, bindable } from 'aurelia-framework';
import { App } from '../../app';
import * as util from '../../bridge/util';

@inject(Element)
export class SampleToolbar {
  @bindable() public fixed = false;
  @bindable() public waterfall= false;
  @bindable() public showMenu = false;

  private title = App.title;
  private titleMedium = App.titleMedium;
  private titleMini = App.titleMini;

  constructor(private element: Element) {}

  private onClick() {
    util.fireEvent(this.element, 'on-menu', {});
  }
}
