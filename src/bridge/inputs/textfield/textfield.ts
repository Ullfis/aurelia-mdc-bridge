import { autoinject, bindable, bindingMode, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCTextField } from '@material/textfield';
import * as util from '../../util';

@customElement('mdc-text-field')
@autoinject()
export class MdcTextField {
  private static id = 0;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public value = '';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public focused = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public type = '';
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public multiline = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public box = false;
  @bindable() public multilineRows = '8';
  @bindable() public multilineCols = '40';
  @bindable() public disabled = false;
  @bindable() public placeholder = '';
  @bindable() public ariaLabel = '';
  @bindable() public dense = false;
  @bindable() public fullwidth = false;
  @bindable() public required = false;
  @bindable() public pattern = '';
  @bindable() public helptext = '';
  @bindable() public helptextShow = false;
  @bindable() public helptextPersistent = false;
  @bindable() public helptextValidation = false;
  @bindable() public prefilled = false;
  @bindable() public min: number = null;
  @bindable() public max: number = null;
  @bindable() public step: number = null;
  @bindable() public name: string = null;
  private log: Logger;
  private helptextId = '';
  private mdcTextfield;

  private elementMain: HTMLLabelElement;
  private leadingIconSlot: HTMLDivElement;
  private elementInput: HTMLInputElement | HTMLTextAreaElement;
  private elementLabel: HTMLSpanElement;
  private trailingIconSlot: HTMLDivElement;
  private elementHelpText: HTMLParagraphElement;

  private styleHelptext = 'display: none;';
  private stopFocusedChanged = false;

  constructor(private element: Element, private taskQueue: TaskQueue) {
    MdcTextField.id++;
    this.helptextId = `mdc-helptextfield-${MdcTextField.id}`;
    this.log = getLogger('mdc-text-field');
  }

  public focus() {
    this.elementInput.focus();
  }

  public getNativeInput(): {value: string, disabled: boolean, badInput: boolean, checkValidity: () => boolean } {
    return this.mdcTextfield.foundation_.adapter_.getNativeInput();
  }

  public get valid(): boolean {
    if (this.mdcTextfield) {
      return this.mdcTextfield.valid;
    }
    return true;
  }

  public set valid(value: boolean) {
    if (this.mdcTextfield) {
      this.mdcTextfield.valid = value;
    }
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.boxChanged(this.box);
    this.multilineChanged(this.multiline);
    this.denseChanged(this.dense);
    this.fullwidthChanged(this.fullwidth);

    this.patternChanged(this.pattern);
    this.placeholderChanged(this.placeholder);
    this.ariaLabelChanged(this.ariaLabel);

    this.helptextPersistentChanged(this.helptextPersistent);
    this.helptextValidationChanged(this.helptextValidation);

    this.prefilledChanged(this.prefilled);

    this.mdcTextfield = new MDCTextField(this.elementMain);

    this.helptextShowChanged(this.helptextShow);
    this.disabledChanged(this.disabled);
    this.focusedChanged(this.focused);

    if (this.isIcon(this.leadingIconSlot)) {
      this.elementMain.classList.add('mdc-text-field--with-leading-icon');
    }
    if (this.isIcon(this.trailingIconSlot)) {
      this.elementMain.classList.add('mdc-text-field--with-trailing-icon');
    }

    this.mdcTextfield.foundation_.adapter_.registerInputInteractionHandler('blur', this.onBlur.bind(this));
    this.mdcTextfield.foundation_.adapter_.registerInputInteractionHandler('focus', this.onFocus.bind(this));
  }

  private detached() {
    this.mdcTextfield.foundation_.adapter_.deregisterInputInteractionHandler('focus', this.onFocus.bind(this));
    this.mdcTextfield.foundation_.adapter_.deregisterInputInteractionHandler('blur', this.onBlur.bind(this));
    this.mdcTextfield.destroy();
  }

  // check if there is an leading or trailing icon child
  // and add classes if so
  private isIcon(el: HTMLDivElement): boolean {
    for (let i = 0; i < el.children.length; i++) {
      const item = el.children[i];
      if (item.tagName === 'I') {
        if (!el.children[i].classList.contains('mdc-text-field__icon')) {
          el.children[i].classList.add('mdc-text-field__icon');
        }
        return true;
      }
    }
    return false;
  }

  private valueChanged(newValue: string) {
    // TODO: validation if value is updated from other controls or script
    const isAbove = this.elementLabel.classList.contains('mdc-text-field__label--float-above');

    if (newValue && newValue.length > 0) {
      if (!isAbove) {
        this.elementLabel.classList.add('mdc-text-field__label--float-above');
      }
    } else {
      if (isAbove) {
        this.elementLabel.classList.remove('mdc-text-field__label--float-above');
      }
    }
  }

  private focusedChanged(newValue) {
    // do not focus or blur if focused variable
    // is changed from focus or blur events.
    if (this.stopFocusedChanged) {
      this.stopFocusedChanged = false;
      return;
    }
    if (util.getBoolean(newValue)) {
      this.taskQueue.queueTask(() => {
        if (this.elementInput) {
          this.elementInput.focus();
        }
      });
    } else {
      if (this.elementInput) {
        this.elementInput.blur();
      }
    }
  }

  private onBlur() {
    if (util.getBoolean(this.prefilled)) {
      this.prefilledChanged(this.prefilled);
    }
    util.fireEvent(this.element, 'blur', null);
    this.stopFocusedChanged = true;
    this.focused = false;
  }

  private onFocus() {
    util.fireEvent(this.element, 'focus', null);
    this.stopFocusedChanged = true;
    this.focused = true;
  }

  private disabledChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.mdcTextfield.disabled = value;
  }

  private placeholderChanged(newValue: string) {
    if (newValue && newValue.length > 0) {
      this.elementInput.setAttribute('placeholder', newValue);
    } else {
      this.elementInput.removeAttribute('placeholder');
    }
  }

  private ariaLabelChanged(newValue: string) {
    if (newValue && newValue.length > 0) {
      this.elementInput.setAttribute('aria-label', newValue);
    } else {
      this.elementInput.removeAttribute('aria-label');
    }
  }

  private patternChanged(newValue: string) {
    if (!newValue || newValue.length === 0) {
      this.elementInput.removeAttribute('pattern');
    } else {
      this.elementInput.setAttribute('pattern', newValue);
    }
  }

  private boxChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementMain.classList[value ? 'add' : 'remove']('mdc-text-field--box');
  }
  private multilineChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementMain.classList[value ? 'add' : 'remove']('mdc-text-field--textarea');
  }
  private denseChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementMain.classList[value ? 'add' : 'remove']('mdc-text-field--dense');
  }
  private fullwidthChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementMain.classList[value ? 'add' : 'remove']('mdc-text-field--fullwidth');
  }

  private prefilledChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementMain.classList[value ? 'add' : 'remove']('mdc-text-field--upgraded');
    this.elementLabel.classList[value ? 'add' : 'remove']('mdc-text-field__label--float-above');
  }

  private helptextShowChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.mdcTextfield.helperTextElement = value ? this.elementHelpText : null;
    this.styleHelptext = 'display: ' + (value ? 'block;' : 'none;');
  }
  private helptextPersistentChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementHelpText.classList[value ? 'add' : 'remove']('mdc-text-field-helper-text--persistent');
  }
  private helptextValidationChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementHelpText.classList[value ? 'add' : 'remove']('mdc-text-field-helper-text--validation-msg');
  }
}
