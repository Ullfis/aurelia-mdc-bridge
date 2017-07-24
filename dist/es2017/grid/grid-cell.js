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
let MdcGridCell = class MdcGridCell {
    constructor() {
        this.span = null;
        this.spanDesktop = null;
        this.spanTablet = null;
        this.spanPhone = null;
        this.order = null;
        this.align = null;
    }
    attached() {
        if (this.span) {
            this.elementDiv.classList.add('mdc-layout-grid__cell--span-' + this.span);
        }
        if (this.spanDesktop) {
            this.elementDiv.classList.add('mdc-layout-grid__cell--span-' + this.spanDesktop + '-desktop');
        }
        if (this.spanTablet) {
            this.elementDiv.classList.add('mdc-layout-grid__cell--span-' + this.spanTablet + '-tablet');
        }
        if (this.spanPhone) {
            this.elementDiv.classList.add('mdc-layout-grid__cell--span-' + this.spanPhone + '-phone');
        }
        if (this.order) {
            this.elementDiv.classList.add('mdc-layout-grid__cell--order-' + this.order);
        }
        if (this.align) {
            this.elementDiv.classList.add('mdc-layout-grid__cell--align-' + this.align);
        }
    }
};
__decorate([
    bindable(),
    __metadata("design:type", String)
], MdcGridCell.prototype, "class", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Number)
], MdcGridCell.prototype, "span", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Number)
], MdcGridCell.prototype, "spanDesktop", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Number)
], MdcGridCell.prototype, "spanTablet", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Number)
], MdcGridCell.prototype, "spanPhone", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Number)
], MdcGridCell.prototype, "order", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcGridCell.prototype, "align", void 0);
MdcGridCell = __decorate([
    containerless(),
    customElement('mdc-grid-cell')
], MdcGridCell);
export { MdcGridCell };
