import { inject, bindable, bindingMode, customElement, containerless } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as util from '../util';

// @containerless()
@customElement('mdc-card')
@inject(Element)
export class MdcCard {
  @bindable() public height: string;
  @bindable() public width: string;
  @bindable() public class: string;
  private log: Logger;
  private cssString = '';

  constructor(private element: Element) {
    this.log = getLogger('mdc-card');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.createCss();
  }

  private heightChanged(newValue: string) {
    this.createCss();
  }
  private widthChanged(newValue: string) {
    this.createCss();
  }

  private createCss() {
    let value = '';
    if (this.height && this.height.length > 0) {
      value += 'height:' + this.height + ';';
    }
    if (this.width && this.width.length > 0) {
      value += 'width:' + this.width + ';';
    }
    this.cssString = value;
  }
}
