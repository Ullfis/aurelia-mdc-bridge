var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, containerless } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import * as util from '../util';
let MdcTab = class MdcTab {
    constructor() {
        this.href = '';
        this.active = false;
        this.ariaLabel = '';
        this.isIcon = false;
        this.isIconText = false;
        this.showIcon = true;
        this.showIconText = true;
        this.ariaHidden = false;
        this.log = getLogger('mdc-tab');
    }
    bind() { }
    unbind() { }
    attached() {
        if (this.isIcon) {
            this.showIcon = false;
        }
        if (this.isIconText) {
            this.showIconText = false;
        }
        else {
            this.ariaHidden = true;
        }
        this.elementTab.classList[this.showIcon ? 'add' : 'remove']('amb-tab-is-icon');
        this.elementTab.classList[this.showIconText ? 'add' : 'remove']('amb-tab-is-text');
        this.activeChanged(this.active);
    }
    aClicked(event) {
        if (this.href === '') {
            event.preventDefault();
        }
    }
    activeChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementTab.classList[value ? 'add' : 'remove']('mdc-tab--active');
    }
};
__decorate([
    bindable(),
    __metadata("design:type", String)
], MdcTab.prototype, "class", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTab.prototype, "href", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTab.prototype, "active", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTab.prototype, "ariaLabel", void 0);
MdcTab = __decorate([
    containerless(),
    __metadata("design:paramtypes", [])
], MdcTab);
export { MdcTab };
