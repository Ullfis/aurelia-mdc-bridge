var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customAttribute, inject } from 'aurelia-framework';
import { MDCRipple } from '@material/ripple';
import * as util from '../util';
let MdcRipple = class MdcRipple {
    constructor(element) {
        this.element = element;
        this.unbounded = false;
    }
    bind() {
        this.mdcRipple = new MDCRipple(this.element);
        this.unboundedChanged(this.unbounded);
    }
    unbind() {
        this.mdcRipple.destroy();
    }
    attached() {
        this.element.classList.add('mdc-ripple-surface');
    }
    detached() {
        this.element.classList.remove('mdc-ripple-surface');
    }
    unboundedChanged(newValue) {
        this.mdcRipple.unbounded = util.getBoolean(newValue);
    }
};
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcRipple.prototype, "unbounded", void 0);
MdcRipple = __decorate([
    customAttribute('mdc-ripple'),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcRipple);
export { MdcRipple };
