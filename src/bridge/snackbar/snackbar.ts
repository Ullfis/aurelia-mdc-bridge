import { inject, bindable, bindingMode } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCSnackbar } from '@material/snackbar';
import * as util from '../util';
import { DOMHelper } from '../dom-helper';

export interface IMdcSnackbarOptions {
  /** The text message to display. */
  message?: string;
  /** The amount of time in milliseconds to show the snackbar. */
  timeout?: number;
  /** The text to display for the action button. Required if actionHandler is set. */
  actionText?: string;
  /** Whether to show the action below the multiple lines of text */
  actionOnBottom?: boolean;
  /** The function to execute when the action is clicked. */
  actionHandler?: () => void;
  /** The text to display for the action button. */
  multiline?: boolean;
  /** Keep snackbar when the action button is pressed. */
  dismissesOnAction?: boolean;
  /** Align position to start */
  alignStart?: boolean;
}

@inject(Element)
export class MdcSnackbar {
  @bindable() public class: string;
  /** The text message to display. Required. */
  @bindable() public message = '';
  /** The amount of time in milliseconds to show the snackbar. Optional (default 2750). */
  @bindable() public timeout: number = 2750;
  /** The text to display for the action button. Required if actionHandler is set. */
  @bindable() public actionText: string;
  /** Whether to show the snackbar with space for multiple lines of text. Optional. */
  @bindable() public multiline = false;
  /** Whether to show the action below the multiple lines of text. Optional, applies when multiline is true. */
  @bindable() public actionOnBottom = false;
  /** Keep snackbar when the action button is pressed. Optional, default true. */
  @bindable() public dismissesOnAction = true;
  /** Align position to start */
  @bindable() public alignStart = false;

  private log: Logger;
  private elementSnackbar: HTMLDivElement;
  private elementTheme: HTMLDivElement;
  private mdcSnackbar: MDCSnackbar;

  constructor(private element?: HTMLElement) {
    this.log = getLogger('mdc-snackbar');
    if (!this.element) { this.addToElement(); }
  }

  /** Show Snackbar */
  public show(options?: IMdcSnackbarOptions): void {
    options = options || {};

    if (util.hasProp(options, 'alignStart')) { this.alignStart = options.alignStart; }
    if (util.hasProp(options, 'dismissesOnAction')) { this.dismissesOnAction = options.dismissesOnAction; }
    if (!util.hasProp(options, 'message')) { options.message = this.message; }
    if (!util.hasProp(options, 'timeout')) { options.timeout = this.timeout; }
    if (!util.hasProp(options, 'actionText')) { options.actionText = this.actionText; }
    if (!util.hasProp(options, 'multiline')) { options.multiline = util.getBoolean(this.multiline); }
    if (!util.hasProp(options, 'actionOnBottom')) { options.actionOnBottom = util.getBoolean(this.actionOnBottom); }
    if (!util.hasProp(options, 'actionHandler')) {
      if (options.actionText) { options.actionHandler = this.onAction.bind(this); }
    }
    this.mdcSnackbar.show(options);
  }

  private onAction() {
    util.fireEvent(this.elementSnackbar, 'on-action');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.mdcSnackbar = new MDCSnackbar(this.elementSnackbar);
    this.alignStartChanged(this.alignStart);
  }

  private detached() {
    this.mdcSnackbar.destroy();
  }

  private alignStartChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementSnackbar.classList[value ? 'add' : 'remove']('mdc-snackbar--align-start');
  }
  private dismissesOnActionChanged(newValue: boolean) {
    this.mdcSnackbar.dismissesOnAction = util.getBoolean(newValue);
  }

  private addToElement() {
    // this.element is undefined. try pointing it to body.main. Then main can handle theme and rtl.
    this.element = document.body;
    const bodyMain = document.body.getElementsByTagName('main');
    if (bodyMain && bodyMain.length > 0) { this.element = bodyMain[0] as HTMLElement; }

    this.elementTheme = DOMHelper.createChildElement('div', this.element) as HTMLDivElement;
    const main = DOMHelper.createChildElement('div', this.elementTheme) as HTMLDivElement;
    main.classList.add('mdc-snackbar');
    main.setAttribute('aria-live', 'assertive');
    main.setAttribute('aria-atomic', 'true');
    main.setAttribute('aria-hidden', 'true');

    const div1 = DOMHelper.createChildElement('div', main);
    div1.classList.add('mdc-snackbar__text');

    const div2 = DOMHelper.createChildElement('div', main);
    div2.classList.add('mdc-snackbar__action-wrapper');

    const button = DOMHelper.createChildElement('button', div2);
    button.classList.add('mdc-button', 'mdc-snackbar__action-button');
    button.setAttribute('type', 'button');

    this.elementSnackbar = main;
    this.attached();
    this.mdcSnackbar.foundation_.adapter_.registerTransitionEndHandler(this.onTransitionEndHandler.bind(this));
  }

  private onTransitionEndHandler(event) {
    if (event.target !== this.elementSnackbar) { return; }
    this.mdcSnackbar.foundation_.adapter_.deregisterTransitionEndHandler(this.onTransitionEndHandler.bind(this));
    this.mdcSnackbar.destroy();
    this.element.removeChild(this.elementTheme);
  }
}
