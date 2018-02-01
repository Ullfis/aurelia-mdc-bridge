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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_logging_1 = require("aurelia-logging");
var ripple_1 = require("@material/ripple");
var create_components_1 = require("./create-components");
var drawerCommon = require("../drawer/common");
var util = require("../util");
var MdcListItem = (function () {
    function MdcListItem(element) {
        this.element = element;
        this.ripple = false;
        this.selected = false;
        this.disabled = false;
        this.target = '_self';
        this.isSimpleMenuItem = false;
        this.isSelectMenuItem = false;
        this.selectedClass = '';
        this.log = aurelia_logging_1.getLogger('mdc-list-item');
    }
    MdcListItem.prototype.elementClick = function (e) {
        var event = util.fireEvent(this.element, 'on-click', this);
        var stopPropagation = event['propagationStopped'] ? true : false;
        return !stopPropagation;
    };
    MdcListItem.prototype.bind = function () { };
    MdcListItem.prototype.unbind = function () { };
    MdcListItem.prototype.attached = function () {
        this.parentElement = util.findAncestor(this.elementListItem, 'mdc-list');
        if (drawerCommon.isDrawer(this.element)) {
            this.selectedClass = 'mdc-list-item--activated';
        }
        this.selectMenuItem();
        this.simpleMenuItem();
        this.rippleEffect();
        this.disabledChanged(this.disabled);
        this.selectedChanged(this.selected);
    };
    MdcListItem.prototype.detached = function () {
        if (this.mdcRipple) {
            this.mdcRipple.destroy();
        }
    };
    MdcListItem.prototype.simpleMenuItem = function () {
        this.isSimpleMenuItem = this.parentElement.classList.contains('mdc-simple-menu__items');
        if (this.isSimpleMenuItem) {
            this.elementListItem.setAttribute('role', this.isSelectMenuItem ? 'option' : 'menuitem');
        }
    };
    MdcListItem.prototype.selectMenuItem = function () {
        this.isSelectMenuItem = util.findAncestor(this.parentElement, 'mdc-select__menu') ? true : false;
    };
    MdcListItem.prototype.rippleEffect = function () {
        if (util.getBoolean(this.ripple)) {
            this.mdcRipple = new ripple_1.MDCRipple(this.elementListItem);
        }
    };
    MdcListItem.prototype.disabledChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        if (this.isSimpleMenuItem || this.isSelectMenuItem) {
            this.elementListItem.setAttribute('tabindex', value ? '-1' : '0');
            this.elementListItem.setAttribute('aria-disabled', value ? 'true' : 'false');
        }
    };
    MdcListItem.prototype.selectedChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        if (this.selectedClass !== '') {
            this.elementListItem.classList[value ? 'add' : 'remove'](this.selectedClass);
        }
    };
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcListItem.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcListItem.prototype, "ripple", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcListItem.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcListItem.prototype, "selected", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdcListItem.prototype, "disabled", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], MdcListItem.prototype, "href", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
        __metadata("design:type", String)
    ], MdcListItem.prototype, "target", void 0);
    MdcListItem = __decorate([
        aurelia_framework_1.noView(),
        aurelia_framework_1.customElement('mdc-list-item'),
        aurelia_framework_1.processContent(create_components_1.CreateListItemComponent),
        aurelia_framework_1.inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcListItem);
    return MdcListItem;
}());
exports.MdcListItem = MdcListItem;
