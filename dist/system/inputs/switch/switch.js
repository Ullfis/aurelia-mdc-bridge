System.register(["aurelia-framework", "aurelia-logging", "../../util"], function (exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_logging_1, util, MdcSwitch;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcSwitch = (function () {
                function MdcSwitch(element) {
                    this.element = element;
                    this.disabled = false;
                    this.labelOff = '';
                    this.labelOn = '';
                    this.controlId = '';
                    this.controlId = "mdc-switch-" + MdcSwitch_1.id++;
                    this.log = aurelia_logging_1.getLogger('mdc-switch');
                }
                MdcSwitch_1 = MdcSwitch;
                MdcSwitch.prototype.bind = function () { };
                MdcSwitch.prototype.unbind = function () { };
                MdcSwitch.prototype.attached = function () {
                    this.checkedChanged(this.checked);
                    this.inputElement.addEventListener('change', this.handleChange.bind(this));
                };
                MdcSwitch.prototype.detached = function () {
                    this.inputElement.removeEventListener('change', this.handleChange.bind(this));
                };
                MdcSwitch.prototype.handleChange = function () {
                    this.checked = this.inputElement.checked;
                    util.fireEvent(this.element, 'on-change', this.checked);
                    util.fireEvent(this.inputElement, 'blur');
                };
                MdcSwitch.prototype.checkedChanged = function (newValue) {
                    this.inputElement.checked = util.getBoolean(newValue);
                };
                MdcSwitch.id = 0;
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcSwitch.prototype, "disabled", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcSwitch.prototype, "labelOff", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcSwitch.prototype, "labelOn", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], MdcSwitch.prototype, "checked", void 0);
                MdcSwitch = MdcSwitch_1 = __decorate([
                    aurelia_framework_1.customElement('mdc-switch'),
                    aurelia_framework_1.inject(Element),
                    __metadata("design:paramtypes", [Element])
                ], MdcSwitch);
                return MdcSwitch;
                var MdcSwitch_1;
            }());
            exports_1("MdcSwitch", MdcSwitch);
        }
    };
});
