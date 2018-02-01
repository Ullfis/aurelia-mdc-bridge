import {
  inject,
  bindable,
  bindingMode,
  customElement,
  noView,
  processContent
} from 'aurelia-framework';

import { getLogger, Logger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import { CreateListItemComponent } from './create-components';
import * as drawerCommon from '../drawer/common';
import * as util from '../util';

export interface IMdcListItemClickEvent extends CustomEvent {

  /**
   * mdc-list-item
   *
   * @type {MdcListItem}
   */
  detail: MdcListItem;
}

@noView()
@customElement('mdc-list-item')
@processContent(CreateListItemComponent)
@inject(Element)
export class MdcListItem {
  @bindable() public class;
  // list item
  @bindable() public ripple = false;
  @bindable() public model;
  @bindable() public selected = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public disabled = false;
  // <a> tag
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public href: string;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public target: string = '_self';
  private log: Logger;
  private parentElement: HTMLElement;
  private elementListItem: HTMLElement;
  private isSimpleMenuItem = false;
  private isSelectMenuItem = false;
  private mdcRipple;
  private selectedClass = '';

  constructor(private element: Element) {
    this.log = getLogger('mdc-list-item');
  }

  private elementClick(e) {
    const event = util.fireEvent(this.element, 'on-click', this);
    const stopPropagation = event['propagationStopped'] ? true : false;
    return !stopPropagation;
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.parentElement = util.findAncestor(this.elementListItem, 'mdc-list') as HTMLElement;

    if (drawerCommon.isDrawer(this.element)) {
      this.selectedClass = 'mdc-list-item--activated';
    }

    this.selectMenuItem();
    this.simpleMenuItem();
    this.rippleEffect();
    this.disabledChanged(this.disabled);
    this.selectedChanged(this.selected);
  }

  private detached() {
    if (this.mdcRipple) { this.mdcRipple.destroy(); }
  }

  private simpleMenuItem() {
    this.isSimpleMenuItem = this.parentElement.classList.contains('mdc-simple-menu__items');
    // add role=option to select item
    if (this.isSimpleMenuItem) {
      this.elementListItem.setAttribute('role', this.isSelectMenuItem ? 'option' : 'menuitem');
    }
  }

  private selectMenuItem() {
    this.isSelectMenuItem = util.findAncestor(this.parentElement, 'mdc-select__menu') ? true : false;
  }

  private rippleEffect() {
    if (util.getBoolean(this.ripple)) {
      this.mdcRipple = new MDCRipple(this.elementListItem);
    }
  }

  private disabledChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    if (this.isSimpleMenuItem || this.isSelectMenuItem) {
      this.elementListItem.setAttribute('tabindex', value ? '-1' : '0');
      this.elementListItem.setAttribute('aria-disabled', value ? 'true' : 'false');
    }
  }

  private selectedChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    if (this.selectedClass !== '') {
      this.elementListItem.classList[value ? 'add' : 'remove'](this.selectedClass);
    }
  }
}
