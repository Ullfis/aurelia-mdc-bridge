import { IMdcSliderEvent } from '../../../bridge/index';

export class Slider {
  private max = 10;
  private min = 0;
  private value = 2;
  private step = 1;
  private disabled = false;
  private inputValue;

  private onInput(event: IMdcSliderEvent) {
    this.inputValue = event.detail;
  }
}
