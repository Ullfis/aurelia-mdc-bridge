var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, customElement, containerless } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import * as util from '../util';
import * as common from './common';
let MdcListDivider = class MdcListDivider {
    constructor(element) {
        this.element = element;
        this.inset = false;
        this.isUlDivider = false;
        this.isNavDivider = false;
        this.log = getLogger('mdc-list-divider');
        const parentListElement = common.getParentList(this.element);
        if (parentListElement) {
            const tag = parentListElement.tagName || 'ul';
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
    bind() { }
    unbind() { }
    attached() {
        this.insetChanged(this.inset);
    }
    insetChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementDivider.classList[value ? 'add' : 'remove']('mdc-list-divider--inset');
    }
};
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcListDivider.prototype, "class", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcListDivider.prototype, "inset", void 0);
MdcListDivider = __decorate([
    containerless(),
    customElement('mdc-list-divider'),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcListDivider);
export { MdcListDivider };
