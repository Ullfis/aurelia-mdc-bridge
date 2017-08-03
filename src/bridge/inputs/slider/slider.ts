import { inject, bindable, bindingMode, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCSlider } from '@material/slider';
import * as util from '../../util';

export interface IMdcSliderEvent extends CustomEvent {

  /**
   * Input changed.
   * Whenever the slider value is changed by way of a user event,
   * e.g. when a user is dragging the slider or changing the value
   * using the arrow keys.
   *
   * @type {number}
   */
  detail: number;
}

@customElement('mdc-slider')
@inject(Element, TaskQueue)
export class MdcSlider {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value = 0;
  @bindable() public min = 0;
  @bindable() public max = 10;
  @bindable() public step = 1;
  @bindable() public ariaLabel = 'Slider';
  @bindable() public disabled = false;
  private log: Logger;
  private elementSlider: HTMLDivElement;
  private mdcSlider: MDCSlider;
  private stopChangeEvent = false;
  private lastInputEventValue;

  constructor(private element: Element, private taskQueue: TaskQueue) {
    this.log = getLogger('mdc-slider');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.taskQueue.queueTask(() => {
      this.mdcSlider = new MDCSlider(this.elementSlider);
      this.mdcSlider.listen('MDCSlider:change', this.onChange.bind(this));
      this.mdcSlider.listen('MDCSlider:input', this.onInput.bind(this));
    });
  }
  private detached() {
    this.mdcSlider.unlisten('MDCSlider:change', this.onChange.bind(this));
    this.mdcSlider.unlisten('MDCSlider:input', this.onInput.bind(this));
    this.mdcSlider.destroy();
  }

  private onChange() {
    this.stopChangeEvent = true;
    this.value = +this.mdcSlider.value;
  }

  private onInput() {
    if (this.lastInputEventValue === this.mdcSlider.value) { return; }
    this.lastInputEventValue = this.mdcSlider.value;
    util.fireEvent(this.elementSlider, 'on-input', this.mdcSlider.value);
  }

  private valueChanged(newValue) {
    if (this.stopChangeEvent) {
      this.stopChangeEvent = false;
      return;
    }
    const value = parseFloat(newValue);
    this.mdcSlider.value = value;
  }

  private stepChanged(newValue) {
    const value = Math.max(parseFloat(newValue), 0);
    this.mdcSlider.step = value;
  }

  private minChanged(newValue) {
    const minValue = parseFloat(newValue);

    // min greater then max?
    if (minValue > this.mdcSlider.max) {
      this.log.error('min greater than max');
      return;
    }
    this.mdcSlider.min = minValue;
  }

  private maxChanged(newValue) {
    const maxValue = parseFloat(newValue);

    // min greater then max?
    if (maxValue < this.mdcSlider.min) {
      this.log.error('max lesser than min');
      return;
    }
    this.mdcSlider.max = maxValue;
  }

  private disabledChanged(newValue: boolean) {
    this.mdcSlider.disabled = util.getBoolean(newValue);
  }
}
