import { inject, bindable, customElement, containerless } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as util from '../util';
import * as common from './common';

@containerless()
@customElement('mdc-list-divider')
@inject(Element)
export class MdcListDivider {
  @bindable() public class;
  @bindable() public inset = false;
  private log: Logger;
  private elementDivider: HTMLElement;
  private isUlDivider = false;
  private isNavDivider = false;

  constructor(private element: Element) {
    this.log = getLogger('mdc-list-divider');
    const parentListElement = common.getParentList(this.element);

    if (parentListElement) {
      const tag = parentListElement.tagName || 'ul';
      if (tag.toLowerCase() === 'ul') {
        this.isUlDivider = true;
      } else {
        this.isNavDivider = true;
      }
    } else {
      this.isUlDivider = true;
    }
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.insetChanged(this.inset);
  }

  private insetChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementDivider.classList[value ? 'add' : 'remove']('mdc-list-divider--inset');
  }
}
