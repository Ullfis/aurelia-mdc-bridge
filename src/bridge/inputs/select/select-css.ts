import { inject, customAttribute } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';

@customAttribute('mdc-select-css')
@inject(Element)
export class MdcSelectCss {
  private log: Logger;

  constructor(private element: Element) {
    this.log = getLogger('mdc-select-css');
  }

  private bind() {
    // pure css.
    if (this.element.nodeName === 'SELECT') {
      const element = this.element as HTMLSelectElement;
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
}
