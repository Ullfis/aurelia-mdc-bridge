import { inject, bindable, bindingMode, customElement, containerless } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCIconToggle } from '@material/icon-toggle';
import * as util from '../../util';

export interface IMdcIconToggleEvent extends CustomEvent {

  /**
   * Icon toggle on or off
   *
   * @type {boolean}
   */
  detail: boolean;
}

@containerless()
@customElement('mdc-icon-toggle')
@inject(Element)
export class MdcIconToggle {
  @bindable() public class: string;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public iconOn = 'star';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public iconOff = 'star_border';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public ariaLabelOn = 'On label';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public ariaLabelOff = 'Off label';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public primary = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public accent = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public on = false;
  private log: Logger;
  private mdcIconToggle;
  private elementI: HTMLElement;

  constructor(private element: Element) {
    this.log = getLogger('mdc-icon-toggle');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.mdcIconToggle = new MDCIconToggle(this.elementI);
    this.elementI.addEventListener('MDCIconToggle:change', this.raiseEvent.bind(this));

    this.primaryChanged(this.primary);
    this.accentChanged(this.accent);
  }

  private detached() {
    this.elementI.removeEventListener('MDCIconToggle:change', this.raiseEvent.bind(this));
    this.mdcIconToggle.destroy();
  }

  private raiseEvent() {
    this.on = this.mdcIconToggle.on;
    util.fireEvent(this.element, 'on-toggle', this.on);
  }

  private onChanged(newValue) {
    this.mdcIconToggle.on = util.getBoolean(newValue);
  }

  private primaryChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementI.classList[value ? 'add' : 'remove']('mdc-icon-toggle--primary');
    if (value) { this.accent = false; }
  }

  private accentChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementI.classList[value ? 'add' : 'remove']('mdc-icon-toggle--accent');
    if (value) { this.primary = false; }
  }
}
