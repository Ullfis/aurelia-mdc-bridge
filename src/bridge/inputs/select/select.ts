import { children, inject, bindable, bindingMode, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCSelect, MDCSelectFoundation } from '@material/select';
import * as util from '../../util';

export interface IMdcSelectChangeEvent extends CustomEvent {

  /**
   * mdc-select object
   *
   * @type {MDCSelect}
   */
  detail: MDCSelect;
}

@customElement('mdc-select')
@inject(Element, TaskQueue)
export class MdcSelect {
  @bindable() public class;
  @bindable() public disabled = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public matcher: (a: any, b: any) => boolean;
  @children('.mdc-list-item') private listItems;
  private elementSelect: HTMLElement;
  private mdcSelect: MDCSelect;
  private log: Logger;
  private internalValueChanged = false;

  constructor(private element: Element, private taskQueue: TaskQueue) {
    this.log = getLogger('mdc-select');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.taskQueue.queueTask(() => {
      this.mdcSelect = new MDCSelect(this.elementSelect);
      this.mdcSelect.listen('MDCSelect:change', this.raiseChangeEvent.bind(this));
      const mdcSelectFoundation = this.mdcSelect.foundation_.adapter_;

      // override fundation getTextForOptionAtIndex to support items with icons
      mdcSelectFoundation.getTextForOptionAtIndex = this.getTextForOptionAtIndex.bind(this);
      // override fundation. value returns model
      mdcSelectFoundation.getValueForOptionAtIndex = this.getValueForOptionAtIndex.bind(this);

      this.disabledChanged(this.disabled);

      // if value is set, find option index and select it
      if (!this.value) { return; }
      this.mdcSelect.selectedIndex = this.findIndex(this.value);
    });
  }

  private detached() {
    this.mdcSelect.unlisten('MDCSelect:change', this.raiseChangeEvent.bind(this));
    this.mdcSelect.destroy();
  }

  // option items has been added/removed. set role and tabindex attributes
  private listItemsChanged() {
    for (let index = 0; index < this.listItems.length; index++) {
      const item = this.listItems[index];
      item.setAttribute('role', 'option');
      item.setAttribute('tabindex', '0');
    }
  }

  private disabledChanged(newValue) {
    this.mdcSelect.disabled = util.getBoolean(newValue);
  }

  // find index and select item
  private valueChanged(newValue) {
    // do not select if value is changed in raiseChangeEvent
    if (this.internalValueChanged) {
      this.internalValueChanged = false;
      return;
    }
    const index = this.findIndex(newValue);
    this.mdcSelect.selectedIndex = index;
  }

  // search through option`s, compare model and value and return index
  private findIndex(value): number {
    for (let index = 0; index < this.mdcSelect.options.length; index++) {
      if (this.compareModels(this.mdcSelect.item(index).model, value)) {
        return index;
      }
    }
    return -1;
  }

  // compare models. if matcher is defined, use it
  private compareModels(model1, model2): boolean {
    if (this.matcher) {
      return this.matcher(model1, model2);
    } else {
      return (model1 === model2);
    }
  }

  // item has been selected. set value and raise event
  private raiseChangeEvent(e) {
    this.internalValueChanged = true;
    this.value = this.mdcSelect.value;
    util.fireEvent(this.element, 'on-change', e.detail);
  }

  // override fundation function
  // getTextForOptionAtIndex: (index) => this.options[index].textContent,
  private getTextForOptionAtIndex(index: number): string {
    const item = this.mdcSelect.options[index];
    if (!item) {  return null; }
    const textArea = item.getElementsByClassName('amb-mdc-list-item-text');
    if (textArea && textArea.length > 0) {
      return (textArea[0] as HTMLElement).innerText;
    } else {
      return item.textContent;
    }
  }

  // override fundation function
  // getValueForOptionAtIndex: (index) => this.options[index].id || this.options[index].textContent,
  private getValueForOptionAtIndex(index: number): any {
    const item = this.mdcSelect.options[index];
    if (!item) { return null; }
    return item.model;
  }

}
