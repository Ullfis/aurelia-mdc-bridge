import { inject, bindable, bindingMode, containerless, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCRadio } from '@material/radio';
import * as util from '../../util';

export interface IMdcRadioEvent extends CustomEvent {
  detail: {
    /**
     * Name of the radio group
     *
     * @type {string}
     */
    name: string;
    /**
     * Value of the selected radio
     *
     * @type {*}
     */
    value: any;
  };
}

@containerless()
@customElement('mdc-radio')
@inject(Element, TaskQueue)
export class MdcRadio {
  private static id = 0;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public checked = null;
  @bindable() public disabled = false;
  @bindable() public name = '';
  @bindable() public value;
  @bindable() public model;
  @bindable() public matcher = null;
  private log: Logger;
  private controlId = '';
  private mdcRadio: MDCRadio;
  private elementRadio: HTMLElement;
  private isModel = true;
  private compareValue;

  constructor(private element: Element, private taskQueue: TaskQueue) {
    this.controlId = `mdc-radio-${MdcRadio.id++}`;
    this.log = getLogger('mdc-radio');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.isModel = (this.value === undefined);
    this.taskQueue.queueTask(() => {
      this.mdcRadio = new MDCRadio(this.elementRadio);
      this.disabledChanged(this.disabled);
    });
  }
  private detached() {
    this.mdcRadio.destroy();
  }

  private disabledChanged(newValue) {
    this.mdcRadio.disabled = util.getBoolean(newValue);
  }
  private handleChange(e) {
    const event = {
      name: this.name,
      value: this.value || this.model
    };
    util.fireEvent(this.element, 'on-change', event);
  }
}
