import { inject, bindable, bindingMode, containerless, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCSimpleMenu } from '@material/menu';
import * as util from '../util';

export interface IMdcSimpleMenuSelectedEvent extends CustomEvent {

  detail: {
    /**
     * The DOM element for the selected item
     *
     * @type {HTMLElement}
     */
    item: HTMLElement;

    /**
     * The index of the selected item
     *
     * @type {number}
     */
    index: number;
  };
}

/**
 * Helper to openFrom attribute
 */
export const MdcSimpleMenuOpenFrom = {
  topLeft: 'top-left',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottomRight: 'bottom-right'
};

@containerless()
@customElement('mdc-simple-menu')
@inject(Element, TaskQueue)
export class MdcSimpleMenu {
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public openState: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public openFrom: string = null;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value;
  @bindable() public class: string;
  private log: Logger;
  private elementSimpleMenu: HTMLElement;
  private mdcSimpleMenu: MDCSimpleMenu;
  private internalValueChange = false;

  constructor(private element: Element, private taskQueue: TaskQueue) {
    this.log = getLogger('mdc-simple-menu');
  }

  // Is menu Open?
  public get open(): boolean {
    return this.mdcSimpleMenu.open;
  }
  // Open/close menu
  public set open(value: boolean) {
    this.mdcSimpleMenu.open = value;
  }

  // Show menu and focus menu item at focusIndex index
  public show(options?: {
    /**
     * Show menu and focus menu item at focusIndex index
     *
     * @type {number}
     */
    focusIndex?: number,
    /**
     * Show menu and focus menu item with model equal value
     *
     * @type {boolean}
     */
    focusValue?: boolean }): void {

    if (options && options.focusIndex) {
      this.mdcSimpleMenu.show({ focusIndex: options.focusIndex });
      return;
    }
    if (options && options.focusValue) {
      const index = this.findIndex(this.value);
      if (index === -1) {
        this.mdcSimpleMenu.show();
      } else {
        this.mdcSimpleMenu.show({ focusIndex: index });
      }
      return;
    }
    this.mdcSimpleMenu.show();
  }

  // Close menu
  public hide(): void {
    this.mdcSimpleMenu.hide();
  }

  private bind() {/** */}
  private unbind() {/** */}

  private attached() {
    if (util.getBoolean(this.openState)) { this.elementSimpleMenu.classList.add('mdc-simple-menu--open'); }
    this.openFromChanged(this.openFrom);
    this.mdcSimpleMenu = new MDCSimpleMenu(this.elementSimpleMenu);
    this.mdcSimpleMenu.listen('MDCSimpleMenu:selected', this.raiseSelectEvent.bind(this));
    this.mdcSimpleMenu.listen('MDCSimpleMenu:cancel', this.raiseCancelEvent.bind(this));

    // if model bound items and openState is set, focus value item.
    this.taskQueue.queueMicroTask(() => {
      this.valueChanged(this.value);
    });
  }
  private detached() {
    this.mdcSimpleMenu.unlisten('MDCSimpleMenu:selected', this.raiseSelectEvent.bind(this));
    this.mdcSimpleMenu.unlisten('MDCSimpleMenu:cancel', this.raiseCancelEvent.bind(this));
    this.mdcSimpleMenu.destroy();
  }

  private raiseSelectEvent(e) {
    this.internalValueChange = true;
    this.value = e.detail.item.model;
    util.fireEvent(this.element, 'on-select', { item: e.detail.item, index: e.detail.index });
  }
  private raiseCancelEvent() {
    util.fireEvent(this.element, 'on-cancel');
  }

  private openFromChanged(newValue) {
    this.elementSimpleMenu.classList.remove('mdc-simple-menu--open-from-' + MdcSimpleMenuOpenFrom.topLeft);
    this.elementSimpleMenu.classList.remove('mdc-simple-menu--open-from-' + MdcSimpleMenuOpenFrom.topRight);
    this.elementSimpleMenu.classList.remove('mdc-simple-menu--open-from-' + MdcSimpleMenuOpenFrom.bottomLeft);
    this.elementSimpleMenu.classList.remove('mdc-simple-menu--open-from-' + MdcSimpleMenuOpenFrom.bottomRight);
    if (newValue) {
      this.elementSimpleMenu.classList.add('mdc-simple-menu--open-from-' + newValue);
    }
  }

  private valueChanged(newValue) {
    if (this.internalValueChange || this.open === false) {
      this.internalValueChange = false;
      return;
    }
    const index = this.findIndex(newValue);
    if (index === -1) { return; }
    this.mdcSimpleMenu.items[index].focus();
  }
  private findIndex(value): number {
    for (let index = 0; index < this.mdcSimpleMenu.items.length; index++) {
      const item = this.mdcSimpleMenu.items[index];
      if (item.model && this.compareModels(item.model, value)) {
        this.log.debug('item index', index);
        return index;
      }
    }
    return -1;
  }
  private compareModels(model1, model2): boolean {
    return (model1 === model2);
  }
}
