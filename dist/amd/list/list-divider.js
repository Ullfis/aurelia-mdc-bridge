var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging", "../util"], function (require, exports, aurelia_framework_1, aurelia_logging_1, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcListDivider = (function () {
        function MdcListDivider(element) {
            this.element = element;
            this.inset = false;
            this.isUlDivider = false;
            this.isNavDivider = false;
            this.log = aurelia_logging_1.getLogger('mdc-list-divider');
            var tag = this.element.parentElement.tagName;
            var isList = this.element.parentElement.classList.contains('mdc-list');
            if (isList) {
                if (tag.toLowerCase() === 'ul') {
                    this.isUlDivider = true;
                }
                else {
                    this.isNavDivider = true;
                }
            }
            else {
                this.isUlDivider = true;
            }
        }
        MdcListDivider.prototype.bind = function () { };
        MdcListDivider.prototype.unbind = function () { };
        MdcListDivider.prototype.attached = function () {
            this.insetChanged(this.inset);
        };
        MdcListDivider.prototype.insetChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementDivider.classList[value ? 'add' : 'remove']('mdc-list-divider--inset');
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcListDivider.prototype, "class", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcListDivider.prototype, "inset", void 0);
        MdcListDivider = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('mdc-list-divider'),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], MdcListDivider);
        return MdcListDivider;
    }());
    exports.MdcListDivider = MdcListDivider;
});
