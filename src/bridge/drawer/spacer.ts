import { customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as drawerCommon from './common';
import * as util from '../util';

@customElement('mdc-drawer-spacer')
export class MdcDrawerSpacer {
  private log: Logger;
  private elementSpacer: HTMLElement;

  constructor() {
    this.log = getLogger('mdc-drawer-spacer');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    if (drawerCommon.isPermanentDrawer(this.elementSpacer)) {
      this.elementSpacer.classList.add('mdc-permanent-drawer__toolbar-spacer');
    }
    if (drawerCommon.isPersistentDrawer(this.elementSpacer)) {
      this.elementSpacer.classList.add('mdc-persistent-drawer__toolbar-spacer');
    }
    if (drawerCommon.isTemporaryDrawer(this.elementSpacer)) {
      this.elementSpacer.classList.add('mdc-temporary-drawer__toolbar-spacer');
    }
  }
}
