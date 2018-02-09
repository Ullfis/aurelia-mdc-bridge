import { inject, bindable, bindingMode, containerless, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCMenu, Corner } from '@material/menu';
import * as util from '../util';

export interface IMdcMenuSelectedEvent extends CustomEvent {

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
 * Helper to anchorCorner attribute
 */
export const MdcMenuAnchorCorner = {
  topLeft: 'top-left',
  topRight: 'top-right',
  topStart: 'top-start',
  topEnd: 'top-end',
  bottomLeft: 'bottom-left',
  bottomRight: 'bottom-right',
  bottomStart: 'bottom-start',
  bottomEnd: 'bottom-end'
};

@containerless()
@customElement('mdc-menu')
@inject(Element, TaskQueue)
export class MdcMenu {
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public openState: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public quickOpen: boolean = false;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public anchorCorner: string = null;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value;
  @bindable() public class: string;
  private log: Logger;
  private elementMenu: HTMLElement;
  private mdcMenu: MDCMenu;
  private internalValueChange = false;

  constructor(private element: Element, private taskQueue: TaskQueue) {
    this.log = getLogger('mdc-menu');
  }

  // Is menu Open?
  public get open(): boolean {
    return this.mdcMenu.open;
  }
  // Open/close menu
  public set open(value: boolean) {
    this.mdcMenu.open = value;
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
      this.mdcMenu.show({ focusIndex: options.focusIndex });
      return;
    }
    if (options && options.focusValue) {
      const index = this.findIndex(this.value);
      if (index === -1) {
        this.mdcMenu.show();
      } else {
        this.mdcMenu.show({ focusIndex: index });
      }
      return;
    }
    this.mdcMenu.show();
  }

  // Close menu
  public hide(): void {
    this.mdcMenu.hide();
  }

  private bind() {/** */}
  private unbind() {/** */}

  private attached() {
    if (util.getBoolean(this.openState)) {
      this.elementMenu.classList.add('mdc-menu--open');
    }
    this.mdcMenu = new MDCMenu(this.elementMenu);
    this.anchorCornerChanged(this.anchorCorner);

    this.mdcMenu.quickOpen = util.getBoolean(this.quickOpen);

    // TODO: temporary override of click event target
    // set target to closest parent element with class 'mdc-list-item'
    this.mdcMenu.foundation_.adapter_.getIndexForEventTarget = (target: Element) => {
      while (target) {
        if (target.classList.contains('mdc-list-item')) {
          if (target.attributes.getNamedItem('aria-disabled').value === 'true') { target = null; }
          break;
        } else if (target.classList.contains('mdc-menu')) {
          break;
        }
        target = target.parentElement;
      }
      return this.mdcMenu.items.indexOf(target);
    };

    this.mdcMenu.listen('MDCMenu:selected', this.raiseSelectEvent.bind(this));
    this.mdcMenu.listen('MDCMenu:cancel', this.raiseCancelEvent.bind(this));

    // if model bound items and openState is set, focus value item.
    this.taskQueue.queueMicroTask(() => {
      this.valueChanged(this.value);
    });
  }
  private detached() {
    this.mdcMenu.unlisten('MDCMenu:selected', this.raiseSelectEvent.bind(this));
    this.mdcMenu.unlisten('MDCMenu:cancel', this.raiseCancelEvent.bind(this));
    this.mdcMenu.destroy();
  }

  private raiseSelectEvent(e) {
    this.internalValueChange = true;
    this.value = e.detail.item.model;
    util.fireEvent(this.element, 'on-select', { item: e.detail.item, index: e.detail.index });
  }
  private raiseCancelEvent() {
    util.fireEvent(this.element, 'on-cancel');
  }

  private anchorCornerChanged(newValue) {
    if (this.mdcMenu) {
      this.log.debug('Anchor Corner:', newValue);
      switch (newValue) {
        case MdcMenuAnchorCorner.topLeft:
          this.mdcMenu.setAnchorCorner(Corner.TOP_LEFT);
          break;
        case MdcMenuAnchorCorner.topRight:
          this.mdcMenu.setAnchorCorner(Corner.TOP_RIGHT);
          break;
        case MdcMenuAnchorCorner.topStart:
          this.mdcMenu.setAnchorCorner(Corner.TOP_START);
          break;
        case MdcMenuAnchorCorner.topEnd:
          this.mdcMenu.setAnchorCorner(Corner.TOP_END);
          break;
        case MdcMenuAnchorCorner.bottomLeft:
          this.mdcMenu.setAnchorCorner(Corner.BOTTOM_LEFT);
          break;
        case MdcMenuAnchorCorner.bottomRight:
          this.mdcMenu.setAnchorCorner(Corner.BOTTOM_RIGHT);
          break;
        case MdcMenuAnchorCorner.bottomStart:
          this.mdcMenu.setAnchorCorner(Corner.BOTTOM_START);
          break;
        case MdcMenuAnchorCorner.bottomEnd:
          this.mdcMenu.setAnchorCorner(Corner.BOTTOM_END);
          break;
      }
    }
  }

  private valueChanged(newValue) {
    if (this.internalValueChange || this.open === false) {
      this.internalValueChange = false;
      return;
    }
    const index = this.findIndex(newValue);
    if (index === -1) { return; }
    this.mdcMenu.items[index].focus();
  }
  private findIndex(value): number {
    for (let index = 0; index < this.mdcMenu.items.length; index++) {
      const item = this.mdcMenu.items[index];
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
