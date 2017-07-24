import { bindable, customAttribute, inject } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import * as util from '../util';

// import '@material/ripple/dist/mdc.ripple.css';

@customAttribute('mdc-ripple')
@inject(Element)
export class MdcRipple {
  @bindable() public unbounded = false;
  @bindable() public accent = false;
  @bindable() public primary = false;
  private log: Logger;
  private mdcRipple: MDCRipple;

  constructor(private element: Element) {
    this.log = getLogger('mdc-ripple');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.element.classList.add('mdc-ripple-surface');
    this.mdcRipple = new MDCRipple(this.element);

    this.unboundedChanged(this.unbounded);
    this.accentChanged(this.accent);
    this.primaryChanged(this.primary);
  }

  private detached() {
    const classes = [
      'mdc-ripple-surface',
      'mdc-ripple-surface--primary',
      'mdc-ripple-surface--accent'
    ];
    this.element.classList.remove(...classes);
    this.mdcRipple.destroy();
  }

  private unboundedChanged(newValue) {
    this.mdcRipple.unbounded = util.getBoolean(newValue);
  }
  private accentChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-ripple-surface--accent');
  }
  private primaryChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-ripple-surface--primary');
  }
}
