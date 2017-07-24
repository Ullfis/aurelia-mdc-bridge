import { inject, bindable, bindingMode, customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCCheckbox } from '@material/checkbox';
import * as util from '../../util';

export interface IMdcCheckboxEvent extends CustomEvent {

  /**
   * Checkbox status
   *
   * @type {boolean}
   */
  detail: boolean;
}

@customElement('mdc-checkbox')
@inject(Element)
export class MdcCheckbox {
  private static id = 0;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public checked = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public indeterminate = false;
  @bindable() public disabled = false;
  private log: Logger;
  private controlId = '';
  private elementCheckbox: HTMLElement;
  private mdcCheckbox;

  constructor(private element: Element) {
    this.controlId = `mdc-checkbox-${MdcCheckbox.id++}`;
    this.log = getLogger('mdc-checkbox');
  }

  private bind() {
    this.mdcCheckbox = new MDCCheckbox(this.elementCheckbox);
    this.disabledChanged(this.disabled);
    this.indeterminateChanged(this.indeterminate);
    this.mdcCheckbox.checked = this.checked;
  }
  private unbind() {
    this.mdcCheckbox.destroy();
  }

  private handleChange(e: Event) {
    this.checked = this.mdcCheckbox.checked;
    e.stopPropagation();
  }
  private checkedChanged(newValue) {
    this.indeterminate = false;
    const value = util.getBoolean(newValue);
    if (this.mdcCheckbox.checked !== value) { this.mdcCheckbox.checked = value; }
    util.fireEvent(this.element, 'on-change', value);
  }
  private disabledChanged(newValue) {
    this.mdcCheckbox.disabled = util.getBoolean(newValue);
  }
  private indeterminateChanged(newValue) {
    this.mdcCheckbox.indeterminate = util.getBoolean(newValue);
  }
}
