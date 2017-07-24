import { inject, bindable, bindingMode, customElement, containerless } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as util from '../util';

@containerless()
@customElement('mdc-card-media')
@inject(Element)
export class MdcCardMedia {
  @bindable() public class: string;
  @bindable() public image: string = null;
  @bindable() public size: string = null;
  @bindable() public repeat: string = null;
  @bindable() public height: string = null;
  private log: Logger;
  private cssString = '';

  constructor(private element: Element) {
    this.log = getLogger('mdc-card-media');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.createCss();
  }
  private imageChanged() {
    this.createCss();
  }
  private sizeChanged() {
    this.createCss();
  }
  private repeatChanged() {
    this.createCss();
  }
  private heightChanged() {
    this.createCss();
  }

  private createCss() {
    let value = '';
    if (this.image && this.image.length > 0) {
      value += 'background-image: url(\"' + this.image + '\");';
    }
    if (this.height && this.height.length > 0) {
      value += 'height:' + this.height + ';';
    }
    value += 'background-size:' + (this.size ? this.size : 'cover') + ';';
    value += 'background-repeat:' + (this.repeat ? this.repeat : 'no-repeat') + ';';
    this.cssString = value;
  }
}
