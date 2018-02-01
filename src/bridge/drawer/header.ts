import { customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';

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
    this.elementHeader.classList.add('mdc-drawer__header');
    this.elementContent.classList.add('mdc-drawer__header-content');
  }
}
