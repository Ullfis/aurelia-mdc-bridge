import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import * as util from '../../util';

@customAttribute('mdc-fab')
@inject(Element)
export class MdcFab {
  @bindable() public mini = false;
  @bindable() public plain = false;
  @bindable() public ariaLabel = '';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public ripple = true;
  private log: Logger;
  private icon = null;

  constructor(private element: Element) {
    this.log = getLogger('mdc-fab');

    // icon is the element child
    this.icon = this.element.firstChild;
    this.removeChildren();
  }

  private attached() {
    this.element.classList.add('mdc-fab', 'material-icons');

    // add icon node
    const spanNode = document.createElement('span');
    spanNode.classList.add('mdc-fab__icon');
    if (this.icon) { spanNode.appendChild(this.icon); }
    this.element.appendChild(spanNode);

    this.miniChanged(this.mini);
    this.plainChanged(this.plain);
    this.ariaLabelChanged(this.ariaLabel);

    // add ripple effect
    if (util.getBoolean(this.ripple)) {
      MDCRipple.attachTo(this.element);
    }
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
