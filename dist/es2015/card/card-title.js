var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customElement, containerless } from 'aurelia-framework';
import * as util from '../util';
let MdcCardTitle = class MdcCardTitle {
    constructor() {
        this.large = true;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showLarge = true;
    }
    attached() {
        if (!this.isAvatar) {
            const avatarElement = this.elementPrimary.firstChild;
            if (avatarElement) {
                avatarElement.style.position = 'absolute';
            }
            this.elementPrimary.classList.add('mdc-mdc-card-avatar');
        }
        this.titleChanged(this.title);
        this.subtitleChanged(this.subtitle);
        this.largeChanged(this.large);
    }
    titleChanged(newValue) {
        this.showTitle = false;
        this.showTitle = (newValue && newValue.length > 0);
    }
    subtitleChanged(newValue) {
        this.showSubtitle = false;
        this.showSubtitle = (newValue && newValue.length > 0);
    }
    largeChanged(newValue) {
        this.showLarge = util.getBoolean(newValue);
    }
};
__decorate([
    bindable(),
    __metadata("design:type", String)
], MdcCardTitle.prototype, "class", void 0);
__decorate([
    bindable(),
    __metadata("design:type", String)
], MdcCardTitle.prototype, "title", void 0);
__decorate([
    bindable(),
    __metadata("design:type", String)
], MdcCardTitle.prototype, "subtitle", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcCardTitle.prototype, "large", void 0);
MdcCardTitle = __decorate([
    containerless(),
    customElement('mdc-card-title')
], MdcCardTitle);
export { MdcCardTitle };
