import { bindable, bindingMode, containerless } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as util from '../util';

@containerless()
export class MdcTab {
  @bindable() public class: string;
  @bindable() public href = '';
  @bindable() public active = false;
  @bindable() public ariaLabel = '';
  private elementTab: HTMLElement;
  private log: Logger;
  private isIcon = false;
  private isIconText = false;
  private showIcon = true;
  private showIconText = true;
  private ariaHidden = false;

  constructor() {
    this.log = getLogger('mdc-tab');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    if (this.isIcon) { this.showIcon = false; }
    if (this.isIconText) {
      this.showIconText = false;
    } else {
      this.ariaHidden = true;
    }
    this.elementTab.classList[this.showIcon ? 'add' : 'remove']('amb-tab-is-icon');
    this.elementTab.classList[this.showIconText ? 'add' : 'remove']('amb-tab-is-text');
    this.activeChanged(this.active);
  }

  private aClicked(event) {
    if (this.href === '') { event.preventDefault(); }
  }

  private activeChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementTab.classList[value ? 'add' : 'remove']('mdc-tab--active');
  }
}
