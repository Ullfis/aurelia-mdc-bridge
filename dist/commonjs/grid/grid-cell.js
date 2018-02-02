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
var MdcGridCell = (function () {
    function MdcGridCell() {
        this.span = null;
        this.spanDesktop = null;
        this.spanTablet = null;
        this.spanPhone = null;
        this.order = null;
        this.align = null;
    }
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", String)
    ], MdcGridCell.prototype, "class", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.toView }),
        __metadata("design:type", Number)
    ], MdcGridCell.prototype, "span", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.toView }),
        __metadata("design:type", Number)
    ], MdcGridCell.prototype, "spanDesktop", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.toView }),
        __metadata("design:type", Number)
    ], MdcGridCell.prototype, "spanTablet", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.toView }),
        __metadata("design:type", Number)
    ], MdcGridCell.prototype, "spanPhone", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.toView }),
        __metadata("design:type", Number)
    ], MdcGridCell.prototype, "order", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.toView }),
        __metadata("design:type", Object)
    ], MdcGridCell.prototype, "align", void 0);
    MdcGridCell = __decorate([
        aurelia_framework_1.containerless(),
        aurelia_framework_1.customElement('mdc-grid-cell')
    ], MdcGridCell);
    return MdcGridCell;
}());
exports.MdcGridCell = MdcGridCell;
