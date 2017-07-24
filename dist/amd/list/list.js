var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging", "./create-components", "../drawer/common", "../util"], function (require, exports, aurelia_framework_1, aurelia_logging_1, create_components_1, drawerCommon, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcList = (function () {
        function MdcList(element) {
            this.element = element;
            this.tag = 'ul';
            this.dense = false;
            this.twoLine = false;
            this.avatar = false;
            this.log = aurelia_logging_1.getLogger('mdc-list');
        }
        MdcList.prototype.bind = function () { };
        MdcList.prototype.unbind = function () { };
        MdcList.prototype.attached = function () {
            if (drawerCommon.isPermanentDrawer(this.element)) {
                this.elementList.classList.add('mdc-permanent-drawer__content');
            }
            if (drawerCommon.isPersistentDrawer(this.element)) {
                this.elementList.classList.add('mdc-persistent-drawer__content');
            }
            if (drawerCommon.isTemporaryDrawer(this.element)) {
                this.elementList.classList.add('mdc-temporary-drawer__content');
            }
            this.denseChanged(this.dense);
            this.twoLineChanged(this.twoLine);
            this.avatarChanged(this.avatar);
        };
        MdcList.prototype.denseChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementList.classList[value ? 'add' : 'remove']('mdc-list--dense');
        };
        MdcList.prototype.twoLineChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementList.classList[value ? 'add' : 'remove']('mdc-list--two-line');
        };
        MdcList.prototype.avatarChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementList.classList[value ? 'add' : 'remove']('mdc-list--avatar-list');
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
            __metadata("design:type", Object)
        ], MdcList.prototype, "tag", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", String)
        ], MdcList.prototype, "class", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcList.prototype, "dense", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcList.prototype, "twoLine", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcList.prototype, "avatar", void 0);
        MdcList = __decorate([
            aurelia_framework_1.noView(),
            aurelia_framework_1.customElement('mdc-list'),
            aurelia_framework_1.processContent(create_components_1.CreateListComponent),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], MdcList);
        return MdcList;
    }());
    exports.MdcList = MdcList;
});
