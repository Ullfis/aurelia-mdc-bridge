System.register(["aurelia-framework", "@material/ripple", "../util"], function (exports_1, context_1) {
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
    var aurelia_framework_1, ripple_1, util, MdcRipple;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (ripple_1_1) {
                ripple_1 = ripple_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcRipple = (function () {
                function MdcRipple(element) {
                    this.element = element;
                    this.unbounded = false;
                }
                MdcRipple.prototype.bind = function () {
                    this.mdcRipple = new ripple_1.MDCRipple(this.element);
                    this.unboundedChanged(this.unbounded);
                };
                MdcRipple.prototype.unbind = function () {
                    this.mdcRipple.destroy();
                };
                MdcRipple.prototype.attached = function () {
                    this.element.classList.add('mdc-ripple-surface');
                };
                MdcRipple.prototype.detached = function () {
                    this.element.classList.remove('mdc-ripple-surface');
                };
                MdcRipple.prototype.unboundedChanged = function (newValue) {
                    this.mdcRipple.unbounded = util.getBoolean(newValue);
                };
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcRipple.prototype, "unbounded", void 0);
                MdcRipple = __decorate([
                    aurelia_framework_1.customAttribute('mdc-ripple'),
                    aurelia_framework_1.inject(Element),
                    __metadata("design:paramtypes", [Element])
                ], MdcRipple);
                return MdcRipple;
            }());
            exports_1("MdcRipple", MdcRipple);
        }
    };
});
