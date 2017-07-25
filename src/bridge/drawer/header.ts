import { customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as drawerCommon from './common';
import * as util from '../util';

@customElement('mdc-drawer-header')
export class MdcDrawerHeader {
  private log: Logger;

  private elementHeader: HTMLElement;
  private elementContent: HTMLElement;

  constructor() {
    this.log = getLogger('mdc-drawer-header');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    if (drawerCommon.isPermanentDrawer(this.elementHeader)) {
      this.elementHeader.classList.add('mdc-permanent-drawer__header');
      this.elementContent.classList.add('mdc-permanent-drawer__header-content');
    }
    if (drawerCommon.isPersistentDrawer(this.elementHeader)) {
      this.elementHeader.classList.add('mdc-persistent-drawer__header');
      this.elementContent.classList.add('mdc-persistent-drawer__header-content');
    }
    if (drawerCommon.isTemporaryDrawer(this.elementHeader)) {
      this.elementHeader.classList.add('mdc-temporary-drawer__header');
      this.elementContent.classList.add('mdc-temporary-drawer__header-content');
    }
  }
}
