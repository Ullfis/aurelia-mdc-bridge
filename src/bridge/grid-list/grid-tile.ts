import { inject, bindable, bindingMode, customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import * as util from '../util';

@customElement('mdc-grid-tile')
@inject(Element)
export class MdcGlidTile {
  @bindable() public imgSrc: string = '';
  @bindable() public imgClass: string = '';
  @bindable() public supportIcon: string = '';
  @bindable() public supportText: string = '';
  @bindable() public actionIcon = '';
  private log: Logger;
  private elementGridTile: HTMLDivElement;
  private elementShowTitle: HTMLDivElement;
  private isImg = true;
  private isClass = false;

  private isTitle = true;
  private isSupport = false;
  private isSupportIcon = false;
  private isSupportText = false;
  private isActionIcon = false;
  private isSecondary = true;

  constructor(private element: Element) {
    this.log = getLogger('mdc-grid-tile');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    if (this.elementShowTitle) { this.isTitle = false; }
    this.showPrimary();
    this.showSecondary();
  }

  private onClick() {
    util.fireEvent(this.element, 'on-click', null);
  }
  private onSecondaryAction() {
    util.fireEvent(this.element, 'on-secondary', null);
  }

  private imgSrcChanged(newValue) {
    this.showPrimary();
  }
  private imgClassChanged(newValue) {
    this.showPrimary();
  }
  private showPrimary() {
    this.isClass = (this.imgClass && this.imgClass.length > 0);
    this.isImg = (this.imgSrc && this.imgSrc.length > 0);
    if (this.isImg && this.isClass) { this.isClass = false; }
  }

  private supportIconChanged(newValue) {
    this.showSecondary();
  }
  private supportTextChanged(newValue) {
    this.showSecondary();
  }
  private actionIconChanged(newValue) {
    this.showSecondary();
  }
  private showSecondary() {
    this.isSupportIcon = (this.supportIcon && this.supportIcon.length > 0);
    this.isSupportText = (this.supportText && this.supportText.length > 0);
    this.isActionIcon = (this.actionIcon && this.actionIcon.length > 0);
    this.isSupport = this.isSupportIcon || this.isSupportText;
    this.isSecondary = this.isSupport || this.isTitle || this.isActionIcon;
  }
}
