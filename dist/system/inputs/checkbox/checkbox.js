System.register(["aurelia-framework", "aurelia-logging", "@material/checkbox", "../../util"], function (exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_logging_1, checkbox_1, util, MdcCheckbox;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (checkbox_1_1) {
                checkbox_1 = checkbox_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcCheckbox = (function () {
                function MdcCheckbox(element) {
                    this.element = element;
                    this.checked = false;
                    this.indeterminate = false;
                    this.disabled = false;
                    this.controlId = '';
                    this.controlId = "mdc-checkbox-" + MdcCheckbox_1.id++;
                    this.log = aurelia_logging_1.getLogger('mdc-checkbox');
                }
                MdcCheckbox_1 = MdcCheckbox;
                MdcCheckbox.prototype.bind = function () {
                    this.mdcCheckbox = new checkbox_1.MDCCheckbox(this.elementCheckbox);
                    this.disabledChanged(this.disabled);
                    this.indeterminateChanged(this.indeterminate);
                    this.mdcCheckbox.checked = this.checked;
                };
                MdcCheckbox.prototype.unbind = function () {
                    this.mdcCheckbox.destroy();
                };
                MdcCheckbox.prototype.handleChange = function (e) {
                    this.checked = this.mdcCheckbox.checked;
                    e.stopPropagation();
                };
                MdcCheckbox.prototype.checkedChanged = function (newValue) {
                    this.indeterminate = false;
                    var value = util.getBoolean(newValue);
                    if (this.mdcCheckbox.checked !== value) {
                        this.mdcCheckbox.checked = value;
                    }
                    util.fireEvent(this.element, 'on-change', value);
                };
                MdcCheckbox.prototype.disabledChanged = function (newValue) {
                    this.mdcCheckbox.disabled = util.getBoolean(newValue);
                };
                MdcCheckbox.prototype.indeterminateChanged = function (newValue) {
                    this.mdcCheckbox.indeterminate = util.getBoolean(newValue);
                };
                MdcCheckbox.id = 0;
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], MdcCheckbox.prototype, "checked", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], MdcCheckbox.prototype, "indeterminate", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcCheckbox.prototype, "disabled", void 0);
                MdcCheckbox = MdcCheckbox_1 = __decorate([
                    aurelia_framework_1.customElement('mdc-checkbox'),
                    aurelia_framework_1.inject(Element),
                    __metadata("design:paramtypes", [Element])
                ], MdcCheckbox);
                return MdcCheckbox;
                var MdcCheckbox_1;
            }());
            exports_1("MdcCheckbox", MdcCheckbox);
        }
    };
});
