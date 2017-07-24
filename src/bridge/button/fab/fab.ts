import { bindable, customAttribute, inject } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as util from '../../util';

@customAttribute('mdc-fab')
@inject(Element)
export class MdcFab {
  @bindable() public mini = false;
  @bindable() public plain = false;
  @bindable() public ariaLabel = '';
  private log: Logger;

  constructor(private element: Element) {
    this.log = getLogger('mdc-fab');

    // icon is the element text
    const icon = this.element.firstChild;
    this.removeChildren();

    // add icon node
    const spanNode = document.createElement('span');
    spanNode.classList.add('mdc-fab__icon');
    if (icon) { spanNode.appendChild(icon); }
    this.element.appendChild(spanNode);
  }

  private attached() {
    this.element.classList.add('mdc-fab', 'material-icons');
  }

  private detached() {
    const classes = [
      'mdc-fab',
      'material-icons',
      'mdc-fab--mini',
      'mdc-fab--plain'
    ];
    this.element.classList.remove(...classes);
    this.element.removeAttribute('aria-label');
    this.removeChildren();
  }

  private miniChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-fab--mini');
  }

  private plainChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-fab--plain');
  }

  private ariaLabelChanged(newValue) {
    this.element.setAttribute('aria-label', newValue);
  }

  private removeChildren() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }

}
