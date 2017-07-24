var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, bindingMode, customElement, containerless } from 'aurelia-framework';
import * as util from '../util';
var MdcGrid = (function () {
    function MdcGrid() {
        this.fixedWidth = false;
    }
    MdcGrid.prototype.attached = function () {
        if (util.getBoolean(this.fixedWidth)) {
            this.elementDiv.classList.add('mdc-layout-grid--fixed-column-width');
        }
    };
    __decorate([
        bindable(),
        __metadata("design:type", String)
    ], MdcGrid.prototype, "class", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdcGrid.prototype, "fixedWidth", void 0);
    MdcGrid = __decorate([
        containerless(),
        customElement('mdc-grid')
    ], MdcGrid);
    return MdcGrid;
}());
export { MdcGrid };
