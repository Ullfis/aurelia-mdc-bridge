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
      // wrap element into div
      const parent = element.parentNode;
      const wrapper = document.createElement('div');

      // set the wrapper as child (instead of the element)
      parent.replaceChild(wrapper, element);
      // set element as child of wrapper
      wrapper.appendChild(element);
      wrapper.classList.add('mdc-select');
      element.classList.add('mdc-select__surface');

      // add bottom line
      const bottomLine = document.createElement('div');
      wrapper.appendChild(bottomLine);
      bottomLine.classList.add('mdc-select__bottom-line');
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
