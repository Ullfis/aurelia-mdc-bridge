import { inject, bindable, bindingMode, customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCTemporaryDrawer } from '@material/drawer';
import * as util from '../util';

@customElement('mdc-drawer-temporary')
@inject(Element)
export class MdcDrawerTemporary {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public open = false;
  private log: Logger;

  private elementDrawer: HTMLElement;
  private mdcDrawer: MDCTemporaryDrawer;

  constructor(private element: Element) {
    this.log = getLogger('mdc-drawer-temporary');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.mdcDrawer = new MDCTemporaryDrawer(this.elementDrawer);
    this.elementDrawer.addEventListener('MDCTemporaryDrawer:open', this.onOpenEvent.bind(this));
    this.elementDrawer.addEventListener('MDCTemporaryDrawer:close', this.onCloseEvent.bind(this));
    this.openChanged(this.open);
  }

  private detached() {
    this.elementDrawer.removeEventListener('MDCTemporaryDrawer:open', this.onOpenEvent.bind(this));
    this.elementDrawer.removeEventListener('MDCTemporaryDrawer:close', this.onCloseEvent.bind(this));
    this.mdcDrawer.destroy();
  }

  private openChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.mdcDrawer.open = value;
  }

  private onOpenEvent() {
    util.fireEvent(this.elementDrawer, 'on-open', {});
  }

  private onCloseEvent() {
    util.fireEvent(this.elementDrawer, 'on-close', {});
    this.open = false;
  }
}
