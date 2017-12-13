var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, bindable, bindingMode, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCTextField } from '@material/textfield';
import * as util from '../../util';
let MdcTextField = MdcTextField_1 = class MdcTextField {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.value = '';
        this.focused = false;
        this.type = '';
        this.multiline = false;
        this.box = false;
        this.multilineRows = '8';
        this.multilineCols = '40';
        this.disabled = false;
        this.placeholder = '';
        this.ariaLabel = '';
        this.dense = false;
        this.fullwidth = false;
        this.required = false;
        this.pattern = '';
        this.helptext = '';
        this.helptextShow = false;
        this.helptextPersistent = false;
        this.helptextValidation = false;
        this.prefilled = false;
        this.min = null;
        this.max = null;
        this.step = null;
        this.name = null;
        this.helptextId = '';
        this.styleHelptext = 'display: none;';
        this.stopFocusedChanged = false;
        MdcTextField_1.id++;
        this.helptextId = `mdc-helptextfield-${MdcTextField_1.id}`;
        this.log = getLogger('mdc-text-field');
    }
    focus() {
        this.elementInput.focus();
    }
    getNativeInput() {
        return this.mdcTextfield.foundation_.adapter_.getNativeInput();
    }
    bind() { }
    unbind() { }
    attached() {
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
    detached() {
        this.mdcTextfield.foundation_.adapter_.deregisterInputInteractionHandler('focus', this.onFocus.bind(this));
        this.mdcTextfield.foundation_.adapter_.deregisterInputInteractionHandler('blur', this.onBlur.bind(this));
        this.mdcTextfield.destroy();
    }
    isIcon(el) {
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
    valueChanged(newValue) {
        const isAbove = this.elementLabel.classList.contains('mdc-text-field__label--float-above');
        if (newValue && newValue.length > 0) {
            if (!isAbove) {
                this.elementLabel.classList.add('mdc-text-field__label--float-above');
            }
        }
        else {
            if (isAbove) {
                this.elementLabel.classList.remove('mdc-text-field__label--float-above');
            }
        }
    }
    focusedChanged(newValue) {
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
        }
        else {
            if (this.elementInput) {
                this.elementInput.blur();
            }
        }
    }
    onBlur() {
        if (util.getBoolean(this.prefilled)) {
            this.prefilledChanged(this.prefilled);
        }
        util.fireEvent(this.element, 'blur', null);
        this.stopFocusedChanged = true;
        this.focused = false;
    }
    onFocus() {
        util.fireEvent(this.element, 'focus', null);
        this.stopFocusedChanged = true;
        this.focused = true;
    }
    disabledChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.mdcTextfield.disabled = value;
    }
    placeholderChanged(newValue) {
        if (newValue && newValue.length > 0) {
            this.elementInput.setAttribute('placeholder', newValue);
        }
        else {
            this.elementInput.removeAttribute('placeholder');
        }
    }
    ariaLabelChanged(newValue) {
        if (newValue && newValue.length > 0) {
            this.elementInput.setAttribute('aria-label', newValue);
        }
        else {
            this.elementInput.removeAttribute('aria-label');
        }
    }
    patternChanged(newValue) {
        if (!newValue || newValue.length === 0) {
            this.elementInput.removeAttribute('pattern');
        }
        else {
            this.elementInput.setAttribute('pattern', newValue);
        }
    }
    boxChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementMain.classList[value ? 'add' : 'remove']('mdc-text-field--box');
    }
    multilineChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementMain.classList[value ? 'add' : 'remove']('mdc-text-field--textarea');
    }
    denseChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementMain.classList[value ? 'add' : 'remove']('mdc-text-field--dense');
    }
    fullwidthChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementMain.classList[value ? 'add' : 'remove']('mdc-text-field--fullwidth');
    }
    prefilledChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementMain.classList[value ? 'add' : 'remove']('mdc-text-field--upgraded');
        this.elementLabel.classList[value ? 'add' : 'remove']('mdc-text-field__label--float-above');
    }
    helptextShowChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.mdcTextfield.helperTextElement = value ? this.elementHelpText : null;
        this.styleHelptext = 'display: ' + (value ? 'block;' : 'none;');
    }
    helptextPersistentChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementHelpText.classList[value ? 'add' : 'remove']('mdc-text-field-helper-text--persistent');
    }
    helptextValidationChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementHelpText.classList[value ? 'add' : 'remove']('mdc-text-field-helper-text--validation-msg');
    }
};
MdcTextField.id = 0;
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcTextField.prototype, "value", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcTextField.prototype, "focused", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcTextField.prototype, "type", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcTextField.prototype, "multiline", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcTextField.prototype, "box", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "multilineRows", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "multilineCols", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "disabled", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "placeholder", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "ariaLabel", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "dense", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "fullwidth", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "required", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "pattern", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "helptext", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "helptextShow", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "helptextPersistent", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "helptextValidation", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextField.prototype, "prefilled", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Number)
], MdcTextField.prototype, "min", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Number)
], MdcTextField.prototype, "max", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Number)
], MdcTextField.prototype, "step", void 0);
__decorate([
    bindable(),
    __metadata("design:type", String)
], MdcTextField.prototype, "name", void 0);
MdcTextField = MdcTextField_1 = __decorate([
    customElement('mdc-text-field'),
    autoinject(),
    __metadata("design:paramtypes", [Element, TaskQueue])
], MdcTextField);
export { MdcTextField };
var MdcTextField_1;
