import { inject, bindable, bindingMode, customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCDialog } from '@material/dialog';
import * as util from '../util';

export interface IMdcDialogClickEvent extends CustomEvent {

  /**
   * true = accept button clicked
   * false = cancel button clicked
   *
   * @type {boolean}
   */
  detail: boolean;
}

@customElement('mdc-dialog')
@inject(Element)
export class MdcDialog {
  private static id = 0;
  @bindable() public header = '';
  @bindable() public accept = '';
  @bindable() public cancel = '';
  @bindable() public scrollable = false;
  private log: Logger;
  private diagElement: HTMLElement;
  private mdcElement;
  private controlId = '';

  constructor(private element: Element) {
    this.controlId = `mdc-dialog-${MdcDialog.id++}`;
    this.log = getLogger('mdc-dialog');
  }

  public show(showDialog = true) {
    if (showDialog) {
      this.mdcElement.show();
    } else {
      this.mdcElement.close();
    }
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.scrollableChanged(this.scrollable);
    this.mdcElement = new MDCDialog(this.diagElement);
    this.mdcElement.listen('MDCDialog:accept', this.onButtonAccept.bind(this));
    this.mdcElement.listen('MDCDialog:cancel', this.onButtonCancel.bind(this));
  }
  private detached() {
    this.mdcElement.unlisten('MDCDialog:accept', this.onButtonAccept.bind(this));
    this.mdcElement.unlisten('MDCDialog:cancel', this.onButtonCancel.bind(this));
    this.mdcElement.destroy();
  }

  private onButtonAccept() {
    util.fireEvent(this.diagElement, 'on-click', true);
  }
  private onButtonCancel() {
    util.fireEvent(this.diagElement, 'on-click', false);
  }

  private scrollableChanged(newValue) {
    this.scrollable = util.getBoolean(newValue);
  }
}
