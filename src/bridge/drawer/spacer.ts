import { inject, customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as drawerCommon from './common';
import * as util from '../util';

@customElement('mdc-drawer-spacer')
@inject(Element)
export class MdcDrawerSpacer {
  private log: Logger;
  private elementSpacer: HTMLElement;

  constructor(private element: Element) {
    this.log = getLogger('mdc-drawer-spacer');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    if (drawerCommon.isPermanentDrawer(this.element)) {
      this.elementSpacer.classList.add('mdc-permanent-drawer__toolbar-spacer');
    }
    if (drawerCommon.isPersistentDrawer(this.element)) {
      this.elementSpacer.classList.add('mdc-persistent-drawer__toolbar-spacer');
    }
    if (drawerCommon.isTemporaryDrawer(this.element)) {
      this.elementSpacer.classList.add('mdc-temporary-drawer__toolbar-spacer');
    }
  }
}
