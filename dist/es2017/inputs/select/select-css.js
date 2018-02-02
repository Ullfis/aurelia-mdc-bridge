var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, customAttribute } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
let MdcSelectCss = class MdcSelectCss {
    constructor(element) {
        this.element = element;
        this.log = getLogger('mdc-select-css');
    }
    bind() {
        if (this.element.nodeName === 'SELECT') {
            const element = this.element;
            const parent = element.parentNode;
            const wrapper = document.createElement('div');
            parent.replaceChild(wrapper, element);
            wrapper.appendChild(element);
            wrapper.classList.add('mdc-select');
            element.classList.add('mdc-select__surface');
            const bottomLine = document.createElement('div');
            wrapper.appendChild(bottomLine);
            bottomLine.classList.add('mdc-select__bottom-line');
        }
    }
};
MdcSelectCss = __decorate([
    customAttribute('mdc-select-css'),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcSelectCss);
export { MdcSelectCss };
