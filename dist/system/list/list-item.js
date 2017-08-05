System.register(["aurelia-framework", "aurelia-logging", "@material/ripple", "./create-components", "../util"], function (exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_logging_1, ripple_1, create_components_1, util, MdcListItem;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (ripple_1_1) {
                ripple_1 = ripple_1_1;
            },
            function (create_components_1_1) {
                create_components_1 = create_components_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcListItem = (function () {
                function MdcListItem(element) {
                    this.element = element;
                    this.ripple = false;
                    this.disabled = false;
                    this.target = '_self';
                    this.isSimpleMenuItem = false;
                    this.isSelectMenuItem = false;
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
                    this.selectMenuItem();
                    this.simpleMenuItem();
                    this.rippleEffect();
                    this.disabledChanged(this.disabled);
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
                    if (value && this.isSimpleMenuItem) {
                        this.elementListItem.setAttribute('tabindex', '-1');
                        this.elementListItem.setAttribute('aria-disabled', 'true');
                    }
                    else {
                        this.elementListItem.setAttribute('tabindex', '0');
                        this.elementListItem.removeAttribute('aria-disabled');
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
            exports_1("MdcListItem", MdcListItem);
        }
    };
});
