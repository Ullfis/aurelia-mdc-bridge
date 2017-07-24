import { inject, customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as drawerCommon from './common';
import * as util from '../util';

@customElement('mdc-drawer-header')
@inject(Element)
export class MdcDrawerHeader {
  private log: Logger;

  private elementHeader: HTMLElement;
  private elementContent: HTMLElement;

  constructor(private element: Element) {
    this.log = getLogger('mdc-drawer-header');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    if (drawerCommon.isPermanentDrawer(this.element)) {
      this.elementHeader.classList.add('mdc-permanent-drawer__header');
      this.elementContent.classList.add('mdc-permanent-drawer__header-content');
    }
    if (drawerCommon.isPersistentDrawer(this.element)) {
      this.elementHeader.classList.add('mdc-persistent-drawer__header');
      this.elementContent.classList.add('mdc-persistent-drawer__header-content');
    }
    if (drawerCommon.isTemporaryDrawer(this.element)) {
      this.elementHeader.classList.add('mdc-temporary-drawer__header');
      this.elementContent.classList.add('mdc-temporary-drawer__header-content');
    }
  }
}
