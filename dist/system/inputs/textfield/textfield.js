System.register(["aurelia-framework", "aurelia-logging", "@material/textfield", "../../util"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_logging_1, textfield_1, util, MdcTextfield;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (textfield_1_1) {
                textfield_1 = textfield_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcTextfield = (function () {
                function MdcTextfield(element, taskQueue) {
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
                    this.controlId = "mdc-textfield-" + MdcTextfield_1.id++;
                    this.helptextId = "mdc-helptextfield-" + MdcTextfield_1.id;
                    this.log = aurelia_logging_1.getLogger('mdc-textfield');
                }
                MdcTextfield_1 = MdcTextfield;
                MdcTextfield.prototype.focus = function () {
                    this.elementInput.focus();
                };
                MdcTextfield.prototype.getNativeInput = function () {
                    return this.mdcTextfield.foundation_.adapter_.getNativeInput();
                };
                MdcTextfield.prototype.bind = function () { };
                MdcTextfield.prototype.unbind = function () { };
                MdcTextfield.prototype.attached = function () {
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
                    this.mdcTextfield = new textfield_1.MDCTextfield(this.elementMain);
                    this.helptextShowChanged(this.helptextShow);
                    this.disabledChanged(this.disabled);
                    this.focusedChanged(this.focused);
                    if (this.isIcon(this.leadingIconSlot)) {
                        this.elementMain.classList.add('mdc-textfield--with-leading-icon');
                    }
                    if (this.isIcon(this.trailingIconSlot)) {
                        this.elementMain.classList.add('mdc-textfield--with-trailing-icon');
                    }
                    this.mdcTextfield.foundation_.adapter_.registerInputInteractionHandler('blur', this.onBlur.bind(this));
                    this.mdcTextfield.foundation_.adapter_.registerInputInteractionHandler('focus', this.onFocus.bind(this));
                };
                MdcTextfield.prototype.detached = function () {
                    this.mdcTextfield.foundation_.adapter_.deregisterInputInteractionHandler('focus', this.onFocus.bind(this));
                    this.mdcTextfield.foundation_.adapter_.deregisterInputInteractionHandler('blur', this.onBlur.bind(this));
                    this.mdcTextfield.destroy();
                };
                MdcTextfield.prototype.isIcon = function (el) {
                    for (var i = 0; i < el.children.length; i++) {
                        var item = el.children[i];
                        if (item.tagName === 'I') {
                            if (!el.children[i].classList.contains('mdc-textfield__icon')) {
                                el.children[i].classList.add('mdc-textfield__icon');
                            }
                            return true;
                        }
                    }
                    return false;
                };
                MdcTextfield.prototype.valueChanged = function (newValue) {
                    var isAbove = this.elementLabel.classList.contains('mdc-textfield__label--float-above');
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
                };
                MdcTextfield.prototype.focusedChanged = function (newValue) {
                    var _this = this;
                    if (this.stopFocusedChanged) {
                        this.stopFocusedChanged = false;
                        return;
                    }
                    if (util.getBoolean(newValue)) {
                        this.taskQueue.queueTask(function () {
                            if (_this.elementInput) {
                                _this.elementInput.focus();
                            }
                        });
                    }
                    else {
                        if (this.elementInput) {
                            this.elementInput.blur();
                        }
                    }
                };
                MdcTextfield.prototype.onBlur = function () {
                    if (util.getBoolean(this.prefilled)) {
                        this.prefilledChanged(this.prefilled);
                    }
                    util.fireEvent(this.element, 'blur', null);
                    this.stopFocusedChanged = true;
                    this.focused = false;
                };
                MdcTextfield.prototype.onFocus = function () {
                    util.fireEvent(this.element, 'focus', null);
                    this.stopFocusedChanged = true;
                    this.focused = true;
                };
                MdcTextfield.prototype.disabledChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.mdcTextfield.disabled = value;
                };
                MdcTextfield.prototype.placeholderChanged = function (newValue) {
                    if (newValue && newValue.length > 0) {
                        this.elementInput.setAttribute('placeholder', newValue);
                    }
                    else {
                        this.elementInput.removeAttribute('placeholder');
                    }
                };
                MdcTextfield.prototype.ariaLabelChanged = function (newValue) {
                    if (newValue && newValue.length > 0) {
                        this.elementInput.setAttribute('aria-label', newValue);
                    }
                    else {
                        this.elementInput.removeAttribute('aria-label');
                    }
                };
                MdcTextfield.prototype.patternChanged = function (newValue) {
                    if (!newValue || newValue.length === 0) {
                        this.elementInput.removeAttribute('pattern');
                    }
                    else {
                        this.elementInput.setAttribute('pattern', newValue);
                    }
                };
                MdcTextfield.prototype.helptextShowChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.mdcTextfield.elementHelpText = value ? this.elementHelpText : null;
                    this.styleHelptext = 'display: ' + (value ? 'block;' : 'none;');
                };
                MdcTextfield.prototype.boxChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--box');
                };
                MdcTextfield.prototype.multilineChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--textarea');
                };
                MdcTextfield.prototype.denseChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--dense');
                };
                MdcTextfield.prototype.fullwidthChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--fullwidth');
                };
                MdcTextfield.prototype.prefilledChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementMain.classList[value ? 'add' : 'remove']('mdc-textfield--upgraded');
                    this.elementLabel.classList[value ? 'add' : 'remove']('mdc-textfield__label--float-above');
                };
                MdcTextfield.prototype.helptextPersistentChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementHelpText.classList[value ? 'add' : 'remove']('mdc-textfield-helptext--persistent');
                };
                MdcTextfield.prototype.helptextValidationChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementHelpText.classList[value ? 'add' : 'remove']('mdc-textfield-helptext--validation-msg');
                };
                MdcTextfield.id = 0;
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "value", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "focused", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "type", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "multiline", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "box", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "multilineRows", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "multilineCols", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "disabled", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "placeholder", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "ariaLabel", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "dense", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "fullwidth", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "required", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "pattern", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "helptext", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "helptextShow", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "helptextPersistent", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "helptextValidation", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcTextfield.prototype, "prefilled", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Number)
                ], MdcTextfield.prototype, "min", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Number)
                ], MdcTextfield.prototype, "max", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Number)
                ], MdcTextfield.prototype, "step", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", String)
                ], MdcTextfield.prototype, "name", void 0);
                MdcTextfield = MdcTextfield_1 = __decorate([
                    aurelia_framework_1.customElement('mdc-textfield'),
                    aurelia_framework_1.autoinject(),
                    __metadata("design:paramtypes", [Element, aurelia_framework_1.TaskQueue])
                ], MdcTextfield);
                return MdcTextfield;
                var MdcTextfield_1;
            }());
            exports_1("MdcTextfield", MdcTextfield);
        }
    };
});
