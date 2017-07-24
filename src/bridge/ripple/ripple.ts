import { bindable, customAttribute, inject, DOM } from 'aurelia-framework';
import { MDCRipple } from '@material/ripple';
import * as util from '../util';

// import '@material/ripple/dist/mdc.ripple.css';

@customAttribute('mdc-ripple')
@inject(Element)
export class MdcRipple {
  @bindable() public unbounded = false;
  private mdcRipple;

  constructor(private element: Element) { }

  private bind() {
    this.mdcRipple = new MDCRipple(this.element);

    // set unbound values
    this.unboundedChanged(this.unbounded);
  }

  private unbind() {
    this.mdcRipple.destroy();
  }

  private attached() {
    this.element.classList.add('mdc-ripple-surface');
  }

  private detached() {
    this.element.classList.remove('mdc-ripple-surface');
  }

  private unboundedChanged(newValue) {
    this.mdcRipple.unbounded = util.getBoolean(newValue);
  }
}
