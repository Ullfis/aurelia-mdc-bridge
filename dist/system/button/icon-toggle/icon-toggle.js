System.register(["aurelia-framework", "aurelia-logging", "@material/icon-toggle", "../../util"], function (exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_logging_1, icon_toggle_1, util, MdcIconToggle;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (icon_toggle_1_1) {
                icon_toggle_1 = icon_toggle_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcIconToggle = (function () {
                function MdcIconToggle(element) {
                    this.element = element;
                    this.iconOn = 'star';
                    this.iconOff = 'star_border';
                    this.ariaLabelOn = 'On label';
                    this.ariaLabelOff = 'Off label';
                    this.disabled = false;
                    this.on = false;
                    this.tabindex = 0;
                    this.log = aurelia_logging_1.getLogger('mdc-icon-toggle');
                }
                MdcIconToggle.prototype.bind = function () { };
                MdcIconToggle.prototype.unbind = function () { };
                MdcIconToggle.prototype.attached = function () {
                    this.mdcIconToggle = new icon_toggle_1.MDCIconToggle(this.elementI);
                    this.elementI.addEventListener('MDCIconToggle:change', this.raiseEvent.bind(this));
                    this.disabledChanged(this.disabled);
                };
                MdcIconToggle.prototype.detached = function () {
                    this.elementI.removeEventListener('MDCIconToggle:change', this.raiseEvent.bind(this));
                    this.mdcIconToggle.destroy();
                };
                MdcIconToggle.prototype.raiseEvent = function () {
                    this.on = this.mdcIconToggle.on;
                    util.fireEvent(this.element, 'on-toggle', this.on);
                };
                MdcIconToggle.prototype.onChanged = function (newValue) {
                    this.mdcIconToggle.on = util.getBoolean(newValue);
                };
                MdcIconToggle.prototype.disabledChanged = function (newValue) {
                    this.mdcIconToggle.disabled = util.getBoolean(newValue);
                };
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcIconToggle.prototype, "iconOn", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcIconToggle.prototype, "iconOff", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcIconToggle.prototype, "ariaLabelOn", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcIconToggle.prototype, "ariaLabelOff", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
                    __metadata("design:type", Object)
                ], MdcIconToggle.prototype, "disabled", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], MdcIconToggle.prototype, "on", void 0);
                MdcIconToggle = __decorate([
                    aurelia_framework_1.customElement('mdc-icon-toggle'),
                    aurelia_framework_1.inject(Element),
                    __metadata("design:paramtypes", [Element])
                ], MdcIconToggle);
                return MdcIconToggle;
            }());
            exports_1("MdcIconToggle", MdcIconToggle);
        }
    };
});
