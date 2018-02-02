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
        this.log = aurelia_logging_1.getLogger('mdc-select-css');
    }
    MdcSelectCss.prototype.bind = function () {
        if (this.element.nodeName === 'SELECT') {
            var element = this.element;
            var parent_1 = element.parentNode;
            var wrapper = document.createElement('div');
            parent_1.replaceChild(wrapper, element);
            wrapper.appendChild(element);
            wrapper.classList.add('mdc-select');
            element.classList.add('mdc-select__surface');
            var bottomLine = document.createElement('div');
            wrapper.appendChild(bottomLine);
            bottomLine.classList.add('mdc-select__bottom-line');
        }
    };
    MdcSelectCss = __decorate([
        aurelia_framework_1.customAttribute('mdc-select-css'),
        aurelia_framework_1.inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcSelectCss);
    return MdcSelectCss;
}());
exports.MdcSelectCss = MdcSelectCss;
