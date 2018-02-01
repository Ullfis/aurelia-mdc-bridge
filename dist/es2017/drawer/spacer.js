var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
let MdcDrawerSpacer = class MdcDrawerSpacer {
    constructor() {
        this.log = getLogger('mdc-drawer-spacer');
    }
    bind() { }
    unbind() { }
    attached() {
        this.elementSpacer.classList.add('mdc-drawer__toolbar-spacer');
    }
};
MdcDrawerSpacer = __decorate([
    customElement('mdc-drawer-spacer'),
    __metadata("design:paramtypes", [])
], MdcDrawerSpacer);
export { MdcDrawerSpacer };
