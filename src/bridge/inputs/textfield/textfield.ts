import { autoinject, bindable, bindingMode, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCTextfield } from '@material/textfield';
import * as util from '../../util';

@customElement('mdc-textfield')
@autoinject()
export class MdcTextfield {
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
  private controlId = '';
  private helptextId = '';
  private mdcTextfield;
  private elementLabel: HTMLLabelElement;
  private elementMain: HTMLDivElement;
  private elementHelpText: HTMLParagraphElement;
  private elementInput: HTMLInputElement | HTMLTextAreaElement;
  private styleHelptext = 'display: none;';

  constructor(private element: Element, private taskQueue: TaskQueue) {
    this.controlId = `mdc-textfield-${MdcTextfield.id++}`;
    this.helptextId = `mdc-helptextfield-${MdcTextfield.id}`;
    this.log = getLogger('mdc-textfield');
  }

  public focus() {
    this.elementInput.focus();
  }

  public getNativeInput(): {value: string, disabled: boolean, badInput: boolean, checkValidity: () => boolean } {
    return this.mdcTextfield.foundation_.adapter_.getNativeInput();
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

    this.mdcTextfield = new MDCTextfield(this.elementMain);

    this.helptextShowChanged(this.helptextShow);
    this.disabledChanged(this.disabled);
    this.focusedChanged(this.focused);

    this.mdcTextfield.foundation_.adapter_.registerInputBlurHandler(this.onBlur.bind(this));
    this.mdcTextfield.foundation_.adapter_.registerInputFocusHandler(this.onFocus.bind(this));
  }

  private detached() {
    this.mdcTextfield.foundation_.adapter_.deregisterInputFocusHandler(this.onFocus.bind(this));
    this.mdcTextfield.foundation_.adapter_.deregisterInputBlurHandler(this.onBlur.bind(this));
    this.mdcTextfield.destroy();
  }

  private valueChanged(newValue: string) {
    // TODO: validation if value is updated from other controls or script
    const isAbove = this.elementLabel.classList.contains('mdc-textfield__label--float-above');

    if (newValue && newValue.length > 0) {
      if (!isAbove) {
        this.elementLabel.classList.add('mdc-textfield__label--float-above');
      }
    } else {
      if (isAbove) {
        this.elementLabel.classList.remove('mdc-textfield__label--float-above');
      }
    }
  }

  private focusedChanged(newValue) {
    if (util.getBoolean(newValue)) {
      this.taskQueue.queueTask(() => {
        this.elementInput.focus();
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
    this.focused = false;
  }

  private onFocus() {
    util.fireEvent(this.element, 'focus', null);
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

  private helptextShowChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.mdcTextfield.elementHelpText = value ? this.elementHelpText : null;
    this.styleHelptext = 'display: ' + (value ? 'block;' : 'none;');
  }
  private boxChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--box');
  }
  private multilineChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--multiline');
  }
  private denseChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--dense');
  }
  private fullwidthChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--fullwidth');
  }

  private prefilledChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--upgraded');
    this.elementLabel.classList[value ? 'add' : 'remove']('mdc-textfield__label--float-above');
  }

  private helptextPersistentChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementHelpText.classList[value ? 'add' : 'remove']('mdc-textfield-helptext--persistent');
  }
  private helptextValidationChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementHelpText.classList[value ? 'add' : 'remove']('mdc-textfield-helptext--validation-msg');
  }
}
