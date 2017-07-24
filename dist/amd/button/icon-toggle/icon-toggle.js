var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging", "@material/icon-toggle", "../../util"], function (require, exports, aurelia_framework_1, aurelia_logging_1, icon_toggle_1, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcIconToggle = (function () {
        function MdcIconToggle(element) {
            this.element = element;
            this.iconOn = 'star';
            this.iconOff = 'star_border';
            this.ariaLabelOn = 'On label';
            this.ariaLabelOff = 'Off label';
            this.primary = false;
            this.accent = false;
            this.on = false;
            this.log = aurelia_logging_1.getLogger('mdc-icon-toggle');
        }
        MdcIconToggle.prototype.bind = function () { };
        MdcIconToggle.prototype.unbind = function () { };
        MdcIconToggle.prototype.attached = function () {
            this.mdcIconToggle = new icon_toggle_1.MDCIconToggle(this.elementI);
            this.elementI.addEventListener('MDCIconToggle:change', this.raiseEvent.bind(this));
            this.primaryChanged(this.primary);
            this.accentChanged(this.accent);
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
        MdcIconToggle.prototype.primaryChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementI.classList[value ? 'add' : 'remove']('mdc-icon-toggle--primary');
            if (value) {
                this.accent = false;
            }
        };
        MdcIconToggle.prototype.accentChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementI.classList[value ? 'add' : 'remove']('mdc-icon-toggle--accent');
            if (value) {
                this.primary = false;
            }
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", String)
        ], MdcIconToggle.prototype, "class", void 0);
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
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], MdcIconToggle.prototype, "primary", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], MdcIconToggle.prototype, "accent", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], MdcIconToggle.prototype, "on", void 0);
        MdcIconToggle = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('mdc-icon-toggle'),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], MdcIconToggle);
        return MdcIconToggle;
    }());
    exports.MdcIconToggle = MdcIconToggle;
});
