import { inject, bindable, bindingMode, customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCPersistentDrawer } from '@material/drawer';
import * as util from '../util';

@customElement('mdc-drawer-persistent')
@inject(Element)
export class MdcDrawerPersistent {
  @bindable() public open = false;
  private log: Logger;

  private elementDrawer: HTMLElement;
  private mdcDrawer: MDCPersistentDrawer;

  constructor(private element: Element) {
    this.log = getLogger('mdc-drawer-persistent');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.mdcDrawer = new MDCPersistentDrawer(this.elementDrawer);
    this.elementDrawer.addEventListener('MDCPersistentDrawer:open', this.onOpenEvent.bind(this));
    this.elementDrawer.addEventListener('MDCPersistentDrawer:close', this.onCloseEvent.bind(this));
    this.openChanged(this.open);
  }

  private detached() {
    this.elementDrawer.removeEventListener('MDCPersistentDrawer:open', this.onOpenEvent.bind(this));
    this.elementDrawer.removeEventListener('MDCPersistentDrawer:close', this.onCloseEvent.bind(this));
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
  }
}
