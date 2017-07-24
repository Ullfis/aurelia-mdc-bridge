import { inject, bindable, bindingMode, containerless, customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as util from '../../util';

export interface IMdcSwitchEvent extends CustomEvent {

  /**
   * Switch status
   *
   * @type {boolean}
   */
  detail: boolean;
}

@containerless()
@customElement('mdc-switch')
@inject(Element)
export class MdcSwitch {
  private static id = 0;
  @bindable() public disabled = false;
  @bindable() public labelOff = '';
  @bindable() public labelOn = '';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public checked;
  private log: Logger;
  private inputElement: HTMLInputElement;
  private controlId = '';

  constructor(private element: Element) {
    this.controlId = `mdc-switch-${MdcSwitch.id++}`;
    this.log = getLogger('mdc-switch');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.checkedChanged(this.checked);
    this.inputElement.addEventListener('change', this.handleChange.bind(this));
  }
  private detached() {
    this.inputElement.removeEventListener('change', this.handleChange.bind(this));
  }
  private handleChange() {
    this.checked = this.inputElement.checked;
    util.fireEvent(this.element, 'on-change', this.checked);
    util.fireEvent(this.inputElement, 'blur');
  }
  private checkedChanged(newValue: boolean) {
    this.inputElement.checked = util.getBoolean(newValue);
  }
}
