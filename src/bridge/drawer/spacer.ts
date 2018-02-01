import { customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';

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
    this.elementSpacer.classList.add('mdc-drawer__toolbar-spacer');
  }
}
