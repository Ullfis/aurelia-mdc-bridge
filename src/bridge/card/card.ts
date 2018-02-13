import { inject, bindable, bindingMode, customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as util from '../util';

@customElement('mdc-card')
@inject(Element)
export class MdcCard {
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public height: string;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public width: string;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public stroked = false;
  private log: Logger;
  private cssString = '';
  private elementCard: HTMLDivElement;

  constructor(private element: Element) {
    this.log = getLogger('mdc-card');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.createCss();
    this.strokedChanged(this.stroked);
  }

  private heightChanged(newValue: string) {
    this.createCss();
  }
  private widthChanged(newValue: string) {
    this.createCss();
  }
  private strokedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementCard.classList[value ? 'add' : 'remove']('mdc-card--stroked');
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
