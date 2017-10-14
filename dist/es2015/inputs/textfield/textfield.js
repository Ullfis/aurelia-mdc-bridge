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
import { MDCTextfield } from '@material/textfield';
import * as util from '../../util';
let MdcTextfield = MdcTextfield_1 = class MdcTextfield {
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
        this.controlId = '';
        this.helptextId = '';
        this.styleHelptext = 'display: none;';
        this.stopFocusedChanged = false;
        this.controlId = `mdc-textfield-${MdcTextfield_1.id++}`;
        this.helptextId = `mdc-helptextfield-${MdcTextfield_1.id}`;
        this.log = getLogger('mdc-textfield');
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
        this.mdcTextfield = new MDCTextfield(this.elementMain);
        this.helptextShowChanged(this.helptextShow);
        this.disabledChanged(this.disabled);
        this.focusedChanged(this.focused);
        this.mdcTextfield.foundation_.adapter_.registerInputInteractionHandler('blur', this.onBlur.bind(this));
        this.mdcTextfield.foundation_.adapter_.registerInputInteractionHandler('focus', this.onFocus.bind(this));
    }
    detached() {
        this.mdcTextfield.foundation_.adapter_.deregisterInputInteractionHandler('focus', this.onFocus.bind(this));
        this.mdcTextfield.foundation_.adapter_.deregisterInputInteractionHandler('blur', this.onBlur.bind(this));
        this.mdcTextfield.destroy();
    }
    valueChanged(newValue) {
        const isAbove = this.elementLabel.classList.contains('mdc-textfield__label--float-above');
        if (newValue && newValue.length > 0) {
            if (!isAbove) {
                this.elementLabel.classList.add('mdc-textfield__label--float-above');
            }
        }
        else {
            if (isAbove) {
                this.elementLabel.classList.remove('mdc-textfield__label--float-above');
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
    helptextShowChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.mdcTextfield.elementHelpText = value ? this.elementHelpText : null;
        this.styleHelptext = 'display: ' + (value ? 'block;' : 'none;');
    }
    boxChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--box');
    }
    multilineChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--multiline');
    }
    denseChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--dense');
    }
    fullwidthChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--fullwidth');
    }
    prefilledChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--upgraded');
        this.elementLabel.classList[value ? 'add' : 'remove']('mdc-textfield__label--float-above');
    }
    helptextPersistentChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementHelpText.classList[value ? 'add' : 'remove']('mdc-textfield-helptext--persistent');
    }
    helptextValidationChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementHelpText.classList[value ? 'add' : 'remove']('mdc-textfield-helptext--validation-msg');
    }
};
MdcTextfield.id = 0;
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "value", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "focused", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "type", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "multiline", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "box", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "multilineRows", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "multilineCols", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "disabled", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "placeholder", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "ariaLabel", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "dense", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "fullwidth", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "required", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "pattern", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "helptext", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "helptextShow", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "helptextPersistent", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "helptextValidation", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTextfield.prototype, "prefilled", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Number)
], MdcTextfield.prototype, "min", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Number)
], MdcTextfield.prototype, "max", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Number)
], MdcTextfield.prototype, "step", void 0);
__decorate([
    bindable(),
    __metadata("design:type", String)
], MdcTextfield.prototype, "name", void 0);
MdcTextfield = MdcTextfield_1 = __decorate([
    customElement('mdc-textfield'),
    autoinject(),
    __metadata("design:paramtypes", [Element, TaskQueue])
], MdcTextfield);
export { MdcTextfield };
var MdcTextfield_1;
