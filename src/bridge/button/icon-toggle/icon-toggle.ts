import { inject, bindable, bindingMode, customElement } from 'aurelia-framework';
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

@customElement('mdc-icon-toggle')
@inject(Element)
export class MdcIconToggle {
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public iconOn = 'star';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public iconOff = 'star_border';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public ariaLabelOn = 'On label';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public ariaLabelOff = 'Off label';
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public disabled = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public on = false;
  private log: Logger;
  private mdcIconToggle;
  private tabindex = 0;
  private elementI: HTMLElement;

  constructor(private element: Element) {
    this.log = getLogger('mdc-icon-toggle');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.mdcIconToggle = new MDCIconToggle(this.elementI);
    this.elementI.addEventListener('MDCIconToggle:change', this.raiseEvent.bind(this));
    this.disabledChanged(this.disabled);
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

  private disabledChanged(newValue) {
    this.mdcIconToggle.disabled = util.getBoolean(newValue);
  }
}
