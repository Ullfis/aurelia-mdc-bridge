import { inject, bindable } from 'aurelia-framework';
import * as util from '../../bridge/util';

@inject(Element)
export class SampleToolbar {
  @bindable() public fixed = false;
  @bindable() public waterfall= false;
  @bindable() public showMenu = false;

  constructor(private element: Element) {}

  // called from toolbar-title
  private onClick() {
    util.fireEvent(this.element, 'on-menu', {});
  }
}
