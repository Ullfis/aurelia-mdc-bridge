import { inject, bindable, bindingMode, customElement, containerless } from 'aurelia-framework';

import { getLogger, Logger } from 'aurelia-logging';
import * as util from '../util';

export type tMdcGridListAspect = '1x1' | '16x9' | '2x3' | '3x2' | '4x3' | '3x4';

@customElement('mdc-grid-list')
@inject(Element)
export class MdcGlidList {
  @bindable() public headerTop = false;
  @bindable() public twoLine = false;
  @bindable() public iconStart = false;
  @bindable() public iconEnd = false;
  @bindable() public aspect: tMdcGridListAspect = '1x1';
  @bindable() public gutter = '4';
  private elementGridlist: HTMLDivElement;
  private log: Logger;

  constructor(private element: Element) {
    this.log = getLogger('mdc-grid-list');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.headerTopChanged(this.headerTop);
    this.twoLineChanged(this.twoLine);
    this.iconStartChanged(this.iconStart);
    this.iconEndChanged(this.iconEnd);
    this.aspectChanged(this.aspect);
    this.gutterChanged(this.gutter);
  }

  private widthChanged(newValue) {
    // tile width
  }
  private headerTopChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementGridlist.classList[value ? 'add' : 'remove']('mdc-grid-list--header-caption');
  }
  private twoLineChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementGridlist.classList[value ? 'add' : 'remove']('mdc-grid-list--twoline-caption');
  }
  private iconStartChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementGridlist.classList[value ? 'add' : 'remove']('mdc-grid-list--with-icon-align-start');
  }
  private iconEndChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementGridlist.classList[value ? 'add' : 'remove']('mdc-grid-list--with-icon-align-end');
  }
  private aspectChanged(newValue: tMdcGridListAspect) {
    const allowed = ['1x1', '16x9', '2x3', '3x2', '4x3', '3x4'];
    if (allowed.indexOf(newValue) === -1) {
      this.log.error('aspect has to be one of following values:', allowed);
      return;
    }
    allowed.forEach(x => {
      this.elementGridlist.classList.remove('mdc-grid-list--tile-aspect-' + x);
    });
    this.elementGridlist.classList.add('mdc-grid-list--tile-aspect-' + newValue);
  }
  private gutterChanged(newValue: string) {
    this.elementGridlist.className = this.elementGridlist.className.replace(/\bmdc-grid-list--tile-gutter-\b\d+/g, '');
    // default
    if (newValue === '4') { return; }
    this.elementGridlist.classList.add('mdc-grid-list--tile-gutter-' + newValue);
  }
}
