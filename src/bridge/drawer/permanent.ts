import { inject, customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as util from '../util';

@customElement('mdc-drawer-permanent')
@inject(Element)
export class MdcDrawerPermanent {
  private elementDrawer: HTMLElement;
  private log: Logger;

  constructor(private element: Element) {
    this.log = getLogger('mdc-drawer-permanent');
  }

  private bind() { /** */ }
  private attached() { /** */ }
}
