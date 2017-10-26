import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import * as util from '../util';

@customAttribute('mdc-button')
@inject(Element)
export class MdcButton {
  @bindable() public compact = false;
  @bindable() public dense = false;
  @bindable() public raised = false;
  @bindable() public stroked = false;
  @bindable() public unelevated = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public ripple = true;
  private log: Logger;

  constructor(private element: Element) {
    this.log = getLogger('mdc-button');
  }

  private attached() {
    this.element.classList.add('mdc-button');
    // is this a card action section?
    const parentNode = this.element.parentNode as HTMLElement;
    if (parentNode && parentNode.classList.contains('mdc-card__actions')) {
      this.element.classList.add('mdc-card__action');
      this.compact = true;
    }

    this.compactChanged(this.compact);
    this.denseChanged(this.dense);
    this.raisedChanged(this.raised);
    this.strokedChanged(this.stroked);
    this.unelevatedChanged(this.unelevated);

    // add ripple effect
    if (util.getBoolean(this.ripple)) {
      MDCRipple.attachTo(this.element);
    }
  }

  private detached() {
    const classes = [
      'mdc-button',
      'mdc-button--dense',
      'mdc-button--raised',
      'mdc-button--compact',
      'mdc-button--stroked',
      'mdc-button--unelevated',
      'mdc-card__action'
    ];
    this.element.classList.remove(...classes);
  }

  private compactChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--compact');
  }

  private denseChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--dense');
  }

  private raisedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--raised');
  }

  private strokedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--stroked');
  }

  private unelevatedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--unelevated');
  }
}
