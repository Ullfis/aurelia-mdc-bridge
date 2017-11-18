import { inject, bindable, bindingMode, customElement } from 'aurelia-framework';
import { MDCLinearProgress } from '@material/linear-progress';
import * as util from '../util';

@customElement('mdc-linear-progress')
export class MdcLinearProgress {
  @bindable() public class: string;
  @bindable() public indeterminate: boolean = false;
  @bindable() public reversed: boolean = false;
  // Sets the progress bar to this value. Value should be between [0, 1].
  @bindable() public progress: number;
  // Sets the buffer bar to this value. Value should be between [0, 1].
  @bindable() public buffer: number;
  @bindable() public open: boolean = true;
  private elementDiv: HTMLDivElement;
  private mdcElement: MDCLinearProgress;

  private bind() {/** */}
  private attached() {
    this.mdcElement = new MDCLinearProgress(this.elementDiv);
    this.indeterminateChanged(this.indeterminate);
    this.reversedChanged(this.reversed);
    this.progressChanged(this.progress);
    this.bufferChanged(this.buffer);
    this.openChanged(this.open);
  }
  private detached() {
    this.mdcElement.destroy();
  }

  private indeterminateChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementDiv.classList[value ? 'add' : 'remove']('mdc-linear-progress--indeterminate');
  }
  private reversedChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementDiv.classList[value ? 'add' : 'remove']('mdc-linear-progress--reversed');
  }
  private progressChanged(newValue: number) {
    this.mdcElement.progress = newValue;
  }
  private bufferChanged(newValue: number) {
    this.mdcElement.buffer = newValue;
  }
  private openChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    if (value) {
      this.mdcElement.open();
    } else {
      this.mdcElement.close();
    }
  }
}
