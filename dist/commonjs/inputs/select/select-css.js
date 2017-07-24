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
var MdcSelectCss = (function () {
    function MdcSelectCss(element) {
        this.element = element;
        this.isMultiple = false;
        this.isPureCss = false;
        this.log = aurelia_logging_1.getLogger('mdc-select-css');
    }
    MdcSelectCss.prototype.bind = function () {
        if (this.element.nodeName === 'SELECT') {
            this.isPureCss = true;
            this.pureCss();
        }
    };
    MdcSelectCss.prototype.optionsChanged = function () {
        if (this.isMultiple && this.isPureCss) {
            this.setOptionClasses(this.element);
        }
    };
    MdcSelectCss.prototype.pureCss = function () {
        var element = this.element;
        if (element.hasAttribute('multiple')) {
            this.isMultiple = true;
            element.classList.add('mdc-multi-select', 'mdc-list');
            this.setOptionClasses(this.element);
        }
        else {
            element.classList.add('mdc-select');
        }
    };
    MdcSelectCss.prototype.setOptionClasses = function (el) {
        for (var index = 0; index < el.children.length; index++) {
            var child = el.children[index];
            switch (child.nodeName) {
                case 'OPTION':
                    if (child.getAttribute('role') === 'presentation') {
                        child.classList.add('mdc-list-divider');
                    }
                    else {
                        child.classList.add('mdc-list-item');
                    }
                    break;
                case 'OPTGROUP':
                    child.classList.add('mdc-list-group');
                    this.setOptionClasses(child);
                    break;
            }
        }
    };
    __decorate([
        aurelia_framework_1.children('option, optgroup'),
        __metadata("design:type", Object)
    ], MdcSelectCss.prototype, "options", void 0);
    MdcSelectCss = __decorate([
        aurelia_framework_1.customAttribute('mdc-select-css'),
        aurelia_framework_1.inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcSelectCss);
    return MdcSelectCss;
}());
exports.MdcSelectCss = MdcSelectCss;
