import { inject, bindable, bindingMode, containerless } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCToolbar } from '@material/toolbar';
import * as util from '../util';

export interface IMdcToolbarFlexibleChangeEvent extends CustomEvent {
  /**
   * The flexibleExpansionRatio property is a number from 0-1 representing the ratio
   * of flexible space that has already been collapsed divided by
   * the total amount of flexible space.
   *
   * @type {number}
   */
  detail: {
    flexibleExpansionRatio: number;
  };
}

@containerless()
@inject(Element)
export class MdcToolbar {
  @bindable() public class;
  @bindable() public fixed = false;
  @bindable() public waterfall = false;
  @bindable() public fixedLastrowOnly = false;
  @bindable() public flexible = false;
  @bindable() public flexibleDefault = false;
  private log: Logger;
  private elementToolbar: HTMLElement;
  private mdcToolbar;

  constructor(private element: Element) {
    this.log = getLogger('mdc-toolbar');
  }

  private bind() { /** */ }
  private unbind() {/** */ }

  private attached() {
    this.mdcToolbar = new MDCToolbar(this.elementToolbar);
    this.mdcToolbar.listen('MDCToolbar:change', this.onChange.bind(this));
    this.mdcToolbar.preventDefaultOnClick = true;

    this.fixedChanged(this.fixed);
    this.waterfallChanged(this.waterfall);
    this.fixedLastrowOnlyChanged(this.fixedLastrowOnly);
    this.flexibleChanged(this.flexible);
    this.flexibleDefaultChanged(this.flexibleDefault);
  }

  private detached() {
    this.mdcToolbar.unlisten('MDCToolbar:change', this.onChange.bind(this));
    this.mdcToolbar.destroy();
  }

  private onChange(evt) {
    util.fireEvent(this.element, 'on-change', { flexibleExpansionRatio: evt.detail.flexibleExpansionRatio });
  }

  private fixedChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--fixed');
    if (value) {
      const fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
      this.mdcToolbar.fixedAdjustElement = fixedAdjustElement;
    } else {
      this.mdcToolbar.fixedAdjustElement = null;
    }
  }

  private waterfallChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--waterfall');
  }

  private fixedLastrowOnlyChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--fixed-lastrow-only');
  }

  private flexibleChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--flexible');
  }

  private flexibleDefaultChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--flexible-default-behavior');
  }
}
