var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging", "@material/toolbar", "../util"], function (require, exports, aurelia_framework_1, aurelia_logging_1, toolbar_1, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcToolbar = (function () {
        function MdcToolbar(element) {
            this.element = element;
            this.fixed = false;
            this.waterfall = false;
            this.fixedLastrowOnly = false;
            this.flexible = false;
            this.flexibleDefault = false;
            this.log = aurelia_logging_1.getLogger('mdc-toolbar');
        }
        MdcToolbar.prototype.bind = function () { };
        MdcToolbar.prototype.unbind = function () { };
        MdcToolbar.prototype.attached = function () {
            this.mdcToolbar = new toolbar_1.MDCToolbar(this.elementToolbar);
            this.mdcToolbar.listen('MDCToolbar:change', this.onChange.bind(this));
            this.mdcToolbar.preventDefaultOnClick = true;
            this.fixedChanged(this.fixed);
            this.waterfallChanged(this.waterfall);
            this.fixedLastrowOnlyChanged(this.fixedLastrowOnly);
            this.flexibleChanged(this.flexible);
            this.flexibleDefaultChanged(this.flexibleDefault);
        };
        MdcToolbar.prototype.detached = function () {
            this.mdcToolbar.unlisten('MDCToolbar:change', this.onChange.bind(this));
            this.mdcToolbar.destroy();
        };
        MdcToolbar.prototype.onChange = function (evt) {
            util.fireEvent(this.element, 'on-change', { flexibleExpansionRatio: evt.detail.flexibleExpansionRatio });
        };
        MdcToolbar.prototype.fixedChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--fixed');
            if (value) {
                var fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
                this.mdcToolbar.fixedAdjustElement = fixedAdjustElement;
            }
            else {
                this.mdcToolbar.fixedAdjustElement = null;
            }
        };
        MdcToolbar.prototype.waterfallChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--waterfall');
        };
        MdcToolbar.prototype.fixedLastrowOnlyChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--fixed-lastrow-only');
        };
        MdcToolbar.prototype.flexibleChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--flexible');
        };
        MdcToolbar.prototype.flexibleDefaultChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--flexible-default-behavior');
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcToolbar.prototype, "class", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcToolbar.prototype, "fixed", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcToolbar.prototype, "waterfall", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcToolbar.prototype, "fixedLastrowOnly", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcToolbar.prototype, "flexible", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcToolbar.prototype, "flexibleDefault", void 0);
        MdcToolbar = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], MdcToolbar);
        return MdcToolbar;
    }());
    exports.MdcToolbar = MdcToolbar;
});
