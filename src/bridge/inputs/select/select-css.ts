import { children, inject, bindable, bindingMode, customAttribute } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCSelect } from '@material/select';
import * as util from '../../util';

export interface IMdcSelectCssChangeEvent extends CustomEvent {

  /**
   * mdc-select object
   *
   * @type {MDCSelect}
   */
  detail: MDCSelect;
}

@customAttribute('mdc-select-css')
@inject(Element)
export class MdcSelectCss {
  @children('option, optgroup') private options;
  private log: Logger;
  private isMultiple = false;
  private isPureCss = false;

  constructor(private element: Element) {
    this.log = getLogger('mdc-select-css');
  }

  private bind() {
    // pure css.
    if (this.element.nodeName === 'SELECT') {
      this.isPureCss = true;
      this.pureCss();
    }
  }

  private optionsChanged() {
    // set classes on multiple option items (css only)
    if (this.isMultiple && this.isPureCss) {
      this.setOptionClasses(this.element);
    }
  }

  private pureCss() {
    const element = this.element as HTMLSelectElement;
    if (element.hasAttribute('multiple')) {
      // multi select
      this.isMultiple = true;
      element.classList.add('mdc-multi-select', 'mdc-list');
      this.setOptionClasses(this.element);

    } else {
      element.classList.add('mdc-select');
    }
  }

  private setOptionClasses(el: Element) {
    for (let index = 0; index < el.children.length; index++) {
      const child = el.children[index];

      switch (child.nodeName) {
        case 'OPTION':
          if (child.getAttribute('role') === 'presentation') {
            child.classList.add('mdc-list-divider');
          } else {
            child.classList.add('mdc-list-item');
          }
          break;
        case 'OPTGROUP':
          child.classList.add('mdc-list-group');
          this.setOptionClasses(child);
          break;
      }
    }
  }
}
