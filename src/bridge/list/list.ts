import {
  bindable,
  bindingMode,
  customElement,
  processContent,
  containerless,
  noView
} from 'aurelia-framework';

import { getLogger, Logger } from 'aurelia-logging';
import { CreateListComponent } from './create-components';
import * as drawerCommon from '../drawer/common';
import * as util from '../util';

@noView()
@containerless()
@customElement('mdc-list')
@processContent(CreateListComponent)
export class MdcList {
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public tag = 'ul';
  @bindable() public class: string;
  @bindable() public dense = false;
  @bindable() public twoLine = false;
  @bindable() public avatar = false;
  private log: Logger;
  private elementList: HTMLElement;

  constructor() {
    this.log = getLogger('mdc-list');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    if (drawerCommon.isPermanentDrawer(this.elementList)) {
      this.elementList.classList.add('mdc-permanent-drawer__content');
    }
    if (drawerCommon.isPersistentDrawer(this.elementList)) {
      this.elementList.classList.add('mdc-persistent-drawer__content');
    }
    if (drawerCommon.isTemporaryDrawer(this.elementList)) {
      this.elementList.classList.add('mdc-temporary-drawer__content');
    }
    this.denseChanged(this.dense);
    this.twoLineChanged(this.twoLine);
    this.avatarChanged(this.avatar);
  }

  private denseChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementList.classList[value ? 'add' : 'remove']('mdc-list--dense');
  }
  private twoLineChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementList.classList[value ? 'add' : 'remove']('mdc-list--two-line');
  }
  private avatarChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementList.classList[value ? 'add' : 'remove']('mdc-list--avatar-list');
  }
}
