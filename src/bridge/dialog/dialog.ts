import { inject, bindable, bindingMode, customElement } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCDialog, MDCDialogFoundation, util as MDCUtil } from '@material/dialog';
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
  @bindable() public acceptAction = false;
  @bindable() public cancelAction = false;
  @bindable() public acceptDisabled = false;
  @bindable() public scrollable = false;
  @bindable() public focusAt: HTMLElement;
  private log: Logger;
  private diagElement: HTMLElement;
  private acceptButtonElement: HTMLButtonElement;
  private cancelButtonElement: HTMLButtonElement;
  private mdcElement: MDCDialog;
  private mdcDialogFoundation: MDCDialogFoundation;
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

  public get foundation(): any {
    if (this.mdcElement) {
      return this.mdcElement.foundation_;
    }
    return null;
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.scrollableChanged(this.scrollable);
    this.mdcElement = new MDCDialog(this.diagElement);
    this.mdcDialogFoundation = this.mdcElement.foundation_.adapter_;
    this.mdcDialogFoundation.registerTransitionEndHandler(this.onTransitionEnd.bind(this));

    // check if accept button is present
    if (this.acceptButtonElement) {
      this.mdcElement.listen('MDCDialog:accept', this.onButtonAccept.bind(this));
      this.acceptActionChanged(this.acceptAction);
    }
    // check if cancel button is present
    if (this.cancelButtonElement) {
      this.mdcElement.listen('MDCDialog:cancel', this.onButtonCancel.bind(this));
      this.cancelActionChanged(this.cancelAction);
    }

    // not working with mdc-textfield (it works with input type="text")
    // <input type="text" ref="focusMeOnOpen" ..
    // <mdc-dialog focus-at.bind="focusMeOnOpen" ..
    if (this.focusAt) {
      this.log.debug('this.focusAt:', this.focusAt);
      this.mdcElement.focusTrap_ = MDCUtil.createFocusTrapInstance(this.mdcElement.dialogSurface_, this.focusAt);
    }
  }
  private detached() {
    this.mdcElement.unlisten('MDCDialog:accept', this.onButtonAccept.bind(this));
    this.mdcElement.unlisten('MDCDialog:cancel', this.onButtonCancel.bind(this));
    this.mdcDialogFoundation.deregisterTransitionEndHandler(this.onTransitionEnd.bind(this));
    this.mdcDialogFoundation = null;
    this.mdcElement.destroy();
  }

  private onButtonAccept() {
    util.fireEvent(this.diagElement, 'on-click', true);
  }
  private onButtonCancel() {
    util.fireEvent(this.diagElement, 'on-click', false);
  }
  private acceptActionChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.acceptButtonElement.classList[value ? 'add' : 'remove']('mdc-dialog__action');
  }
  private cancelActionChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.cancelButtonElement.classList[value ? 'add' : 'remove']('mdc-dialog__action');
  }
  private scrollableChanged(newValue) {
    this.scrollable = util.getBoolean(newValue);
  }
  private onTransitionEnd(evt) {
    if (this.mdcDialogFoundation.isDialog(evt.target)) {
      if (evt.propertyName === 'opacity') {
        if (this.mdcElement.open) {
          util.fireEvent(this.diagElement, 'on-opened', {});
        } else {
          util.fireEvent(this.diagElement, 'on-closed', {});
        }
      }
    }
  }
}
