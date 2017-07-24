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
import { getLogger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import * as util from '../util';
let MdcRipple = class MdcRipple {
    constructor(element) {
        this.element = element;
        this.unbounded = false;
        this.accent = false;
        this.primary = false;
        this.log = getLogger('mdc-ripple');
    }
    bind() { }
    unbind() { }
    attached() {
        this.element.classList.add('mdc-ripple-surface');
        this.mdcRipple = new MDCRipple(this.element);
        this.unboundedChanged(this.unbounded);
        this.accentChanged(this.accent);
        this.primaryChanged(this.primary);
    }
    detached() {
        const classes = [
            'mdc-ripple-surface',
            'mdc-ripple-surface--primary',
            'mdc-ripple-surface--accent'
        ];
        this.element.classList.remove(...classes);
        this.mdcRipple.destroy();
    }
    unboundedChanged(newValue) {
        this.mdcRipple.unbounded = util.getBoolean(newValue);
    }
    accentChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-ripple-surface--accent');
    }
    primaryChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-ripple-surface--primary');
    }
};
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcRipple.prototype, "unbounded", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcRipple.prototype, "accent", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcRipple.prototype, "primary", void 0);
MdcRipple = __decorate([
    customAttribute('mdc-ripple'),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcRipple);
export { MdcRipple };
