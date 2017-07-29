System.register(["aurelia-framework", "aurelia-logging", "../util", "./common"], function (exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_logging_1, util, common, MdcListDivider;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (util_1) {
                util = util_1;
            },
            function (common_1) {
                common = common_1;
            }
        ],
        execute: function () {
            MdcListDivider = (function () {
                function MdcListDivider(element) {
                    this.element = element;
                    this.inset = false;
                    this.isUlDivider = false;
                    this.isNavDivider = false;
                    this.log = aurelia_logging_1.getLogger('mdc-list-divider');
                    var parentListElement = common.getParentList(this.element);
                    if (parentListElement) {
                        var tag = parentListElement.tagName || 'ul';
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
            exports_1("MdcListDivider", MdcListDivider);
        }
    };
});
