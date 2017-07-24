import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as util from '../util';

@customAttribute('mdc-button')
@inject(Element)
export class MdcButton {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public accent = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public primary = false;
  @bindable() public dense = false;
  @bindable() public raised = false;
  @bindable() public compact = false;
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
  }

  private detached() {
    const classes = [
      'mdc-button',
      'mdc-button--accent',
      'mdc-button--primary',
      'mdc-button--dense',
      'mdc-button--raised',
      'mdc-button--compact',
      'mdc-card__action'
    ];
    this.element.classList.remove(...classes);
  }

  private accentChanged(newValue) {
    const value = util.getBoolean(newValue);
    if (value) { this.primary = false; }
    this.element.classList[value ? 'add' : 'remove']('mdc-button--accent');
  }

  private primaryChanged(newValue) {
    const value = util.getBoolean(newValue);
    if (value) { this.accent = false; }
    this.element.classList[value ? 'add' : 'remove']('mdc-button--primary');
  }

  private denseChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--dense');
  }

  private raisedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--raised');
  }

  private compactChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.element.classList[value ? 'add' : 'remove']('mdc-button--compact');
  }
}
