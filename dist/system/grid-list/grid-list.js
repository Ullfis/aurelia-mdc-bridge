System.register(["aurelia-framework", "aurelia-logging", "../util"], function (exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_logging_1, util, MdcGlidList;
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
            }
        ],
        execute: function () {
            MdcGlidList = (function () {
                function MdcGlidList(element) {
                    this.element = element;
                    this.headerTop = false;
                    this.twoLine = false;
                    this.iconStart = false;
                    this.iconEnd = false;
                    this.aspect = '1x1';
                    this.gutter = '4';
                    this.log = aurelia_logging_1.getLogger('mdc-grid-list');
                }
                MdcGlidList.prototype.bind = function () { };
                MdcGlidList.prototype.unbind = function () { };
                MdcGlidList.prototype.attached = function () {
                    this.headerTopChanged(this.headerTop);
                    this.twoLineChanged(this.twoLine);
                    this.iconStartChanged(this.iconStart);
                    this.iconEndChanged(this.iconEnd);
                    this.aspectChanged(this.aspect);
                    this.gutterChanged(this.gutter);
                };
                MdcGlidList.prototype.widthChanged = function (newValue) {
                };
                MdcGlidList.prototype.headerTopChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementGridlist.classList[value ? 'add' : 'remove']('mdc-grid-list--header-caption');
                };
                MdcGlidList.prototype.twoLineChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementGridlist.classList[value ? 'add' : 'remove']('mdc-grid-list--twoline-caption');
                };
                MdcGlidList.prototype.iconStartChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementGridlist.classList[value ? 'add' : 'remove']('mdc-grid-list--with-icon-align-start');
                };
                MdcGlidList.prototype.iconEndChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementGridlist.classList[value ? 'add' : 'remove']('mdc-grid-list--with-icon-align-end');
                };
                MdcGlidList.prototype.aspectChanged = function (newValue) {
                    var _this = this;
                    var allowed = ['1x1', '16x9', '2x3', '3x2', '4x3', '3x4'];
                    if (allowed.indexOf(newValue) === -1) {
                        this.log.error('aspect has to be one of following values:', allowed);
                        return;
                    }
                    allowed.forEach(function (x) {
                        _this.elementGridlist.classList.remove('mdc-grid-list--tile-aspect-' + x);
                    });
                    this.elementGridlist.classList.add('mdc-grid-list--tile-aspect-' + newValue);
                };
                MdcGlidList.prototype.gutterChanged = function (newValue) {
                    this.elementGridlist.className = this.elementGridlist.className.replace(/\bmdc-grid-list--tile-gutter-\b\d+/g, '');
                    if (newValue === '4') {
                        return;
                    }
                    this.elementGridlist.classList.add('mdc-grid-list--tile-gutter-' + newValue);
                };
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcGlidList.prototype, "headerTop", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcGlidList.prototype, "twoLine", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcGlidList.prototype, "iconStart", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcGlidList.prototype, "iconEnd", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", String)
                ], MdcGlidList.prototype, "aspect", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcGlidList.prototype, "gutter", void 0);
                MdcGlidList = __decorate([
                    aurelia_framework_1.customElement('mdc-grid-list'),
                    aurelia_framework_1.inject(Element),
                    __metadata("design:paramtypes", [Element])
                ], MdcGlidList);
                return MdcGlidList;
            }());
            exports_1("MdcGlidList", MdcGlidList);
        }
    };
});
