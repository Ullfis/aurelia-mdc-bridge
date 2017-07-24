var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging", "./common"], function (require, exports, aurelia_framework_1, aurelia_logging_1, drawerCommon) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcDrawerSpacer = (function () {
        function MdcDrawerSpacer(element) {
            this.element = element;
            this.log = aurelia_logging_1.getLogger('mdc-drawer-spacer');
        }
        MdcDrawerSpacer.prototype.bind = function () { };
        MdcDrawerSpacer.prototype.unbind = function () { };
        MdcDrawerSpacer.prototype.attached = function () {
            if (drawerCommon.isPermanentDrawer(this.element)) {
                this.elementSpacer.classList.add('mdc-permanent-drawer__toolbar-spacer');
            }
            if (drawerCommon.isPersistentDrawer(this.element)) {
                this.elementSpacer.classList.add('mdc-persistent-drawer__toolbar-spacer');
            }
            if (drawerCommon.isTemporaryDrawer(this.element)) {
                this.elementSpacer.classList.add('mdc-temporary-drawer__toolbar-spacer');
            }
        };
        MdcDrawerSpacer = __decorate([
            aurelia_framework_1.customElement('mdc-drawer-spacer'),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], MdcDrawerSpacer);
        return MdcDrawerSpacer;
    }());
    exports.MdcDrawerSpacer = MdcDrawerSpacer;
});
