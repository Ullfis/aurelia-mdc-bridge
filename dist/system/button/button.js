System.register(["aurelia-framework", "aurelia-logging", "@material/ripple", "../util"], function (exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_logging_1, ripple_1, util, MdcButton;
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
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcButton = (function () {
                function MdcButton(element) {
                    this.element = element;
                    this.accent = false;
                    this.primary = false;
                    this.dense = false;
                    this.raised = false;
                    this.compact = false;
                    this.ripple = true;
                    this.log = aurelia_logging_1.getLogger('mdc-button');
                }
                MdcButton.prototype.attached = function () {
                    this.element.classList.add('mdc-button');
                    var parentNode = this.element.parentNode;
                    if (parentNode && parentNode.classList.contains('mdc-card__actions')) {
                        this.element.classList.add('mdc-card__action');
                        this.compact = true;
                    }
                    this.accentChanged(this.accent);
                    this.primaryChanged(this.primary);
                    this.denseChanged(this.dense);
                    this.raisedChanged(this.raised);
                    this.compactChanged(this.compact);
                    if (util.getBoolean(this.ripple)) {
                        ripple_1.MDCRipple.attachTo(this.element);
                    }
                };
                MdcButton.prototype.detached = function () {
                    var classes = [
                        'mdc-button',
                        'mdc-button--accent',
                        'mdc-button--primary',
                        'mdc-button--dense',
                        'mdc-button--raised',
                        'mdc-button--compact',
                        'mdc-card__action'
                    ];
                    (_a = this.element.classList).remove.apply(_a, classes);
                    var _a;
                };
                MdcButton.prototype.accentChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    if (value) {
                        this.primary = false;
                    }
                    this.element.classList[value ? 'add' : 'remove']('mdc-button--accent');
                };
                MdcButton.prototype.primaryChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    if (value) {
                        this.accent = false;
                    }
                    this.element.classList[value ? 'add' : 'remove']('mdc-button--primary');
                };
                MdcButton.prototype.denseChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.element.classList[value ? 'add' : 'remove']('mdc-button--dense');
                };
                MdcButton.prototype.raisedChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.element.classList[value ? 'add' : 'remove']('mdc-button--raised');
                };
                MdcButton.prototype.compactChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.element.classList[value ? 'add' : 'remove']('mdc-button--compact');
                };
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], MdcButton.prototype, "accent", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], MdcButton.prototype, "primary", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcButton.prototype, "dense", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcButton.prototype, "raised", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcButton.prototype, "compact", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcButton.prototype, "ripple", void 0);
                MdcButton = __decorate([
                    aurelia_framework_1.customAttribute('mdc-button'),
                    aurelia_framework_1.inject(Element),
                    __metadata("design:paramtypes", [Element])
                ], MdcButton);
                return MdcButton;
            }());
            exports_1("MdcButton", MdcButton);
        }
    };
});
