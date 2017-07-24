var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import * as util from '../../util';
let MdcFab = class MdcFab {
    constructor(element) {
        this.element = element;
        this.mini = false;
        this.plain = false;
        this.ariaLabel = '';
        this.ripple = true;
        this.log = getLogger('mdc-fab');
        const icon = this.element.firstChild;
        this.removeChildren();
        const spanNode = document.createElement('span');
        spanNode.classList.add('mdc-fab__icon');
        if (icon) {
            spanNode.appendChild(icon);
        }
        this.element.appendChild(spanNode);
    }
    attached() {
        this.element.classList.add('mdc-fab', 'material-icons');
        if (util.getBoolean(this.ripple)) {
            MDCRipple.attachTo(this.element);
        }
    }
    detached() {
        const classes = [
            'mdc-fab',
            'material-icons',
            'mdc-fab--mini',
            'mdc-fab--plain'
        ];
        this.element.classList.remove(...classes);
        this.element.removeAttribute('aria-label');
        this.removeChildren();
    }
    miniChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-fab--mini');
    }
    plainChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-fab--plain');
    }
    ariaLabelChanged(newValue) {
        this.element.setAttribute('aria-label', newValue);
    }
    removeChildren() {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
    }
};
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcFab.prototype, "mini", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcFab.prototype, "plain", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcFab.prototype, "ariaLabel", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcFab.prototype, "ripple", void 0);
MdcFab = __decorate([
    customAttribute('mdc-fab'),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcFab);
export { MdcFab };
