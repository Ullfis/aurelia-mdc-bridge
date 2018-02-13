import { inject, bindable, bindingMode, customElement, containerless } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as util from '../util';

@customElement('mdc-card-media')
@containerless()
@inject(Element)
export class MdcCardMedia {
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public class: string = null;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public image: string = null;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public size: string = null;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public repeat: string = null;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public height: string = null;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public scaled: string = null;
  private log: Logger;
  private cssString = '';
  private elementMedia: HTMLDivElement;

  constructor(private element: Element) {
    this.log = getLogger('mdc-card-media');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.createCss();
    this.scaledChanged(this.scaled);
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
  private scaledChanged(newValue: string) {
    if (this.elementMedia) {
      this.elementMedia.classList.remove(
        'mdc-card__media--square',
        'mdc-card__media--16-9'
      );
      switch (newValue) {
        case 'square':
          this.elementMedia.classList.add('mdc-card__media--square');
          break;
        case '16-9':
          this.elementMedia.classList.add('mdc-card__media--16-9');
          break;
      }
    }
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
