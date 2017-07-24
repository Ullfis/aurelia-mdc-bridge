var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import * as util from '../util';
var MdcGlidTile = (function () {
    function MdcGlidTile(element) {
        this.element = element;
        this.imgSrc = '';
        this.imgClass = '';
        this.supportIcon = '';
        this.supportText = '';
        this.actionIcon = '';
        this.isImg = true;
        this.isClass = false;
        this.isTitle = true;
        this.isSupport = false;
        this.isSupportIcon = false;
        this.isSupportText = false;
        this.isActionIcon = false;
        this.isSecondary = true;
        this.log = getLogger('mdc-grid-tile');
    }
    MdcGlidTile.prototype.bind = function () { };
    MdcGlidTile.prototype.unbind = function () { };
    MdcGlidTile.prototype.attached = function () {
        if (this.elementShowTitle) {
            this.isTitle = false;
        }
        this.showPrimary();
        this.showSecondary();
    };
    MdcGlidTile.prototype.onClick = function () {
        util.fireEvent(this.element, 'on-click', null);
    };
    MdcGlidTile.prototype.onSecondaryAction = function () {
        util.fireEvent(this.element, 'on-secondary', null);
    };
    MdcGlidTile.prototype.imgSrcChanged = function (newValue) {
        this.showPrimary();
    };
    MdcGlidTile.prototype.imgClassChanged = function (newValue) {
        this.showPrimary();
    };
    MdcGlidTile.prototype.showPrimary = function () {
        this.isClass = (this.imgClass && this.imgClass.length > 0);
        this.isImg = (this.imgSrc && this.imgSrc.length > 0);
        if (this.isImg && this.isClass) {
            this.isClass = false;
        }
    };
    MdcGlidTile.prototype.supportIconChanged = function (newValue) {
        this.showSecondary();
    };
    MdcGlidTile.prototype.supportTextChanged = function (newValue) {
        this.showSecondary();
    };
    MdcGlidTile.prototype.actionIconChanged = function (newValue) {
        this.showSecondary();
    };
    MdcGlidTile.prototype.showSecondary = function () {
        this.isSupportIcon = (this.supportIcon && this.supportIcon.length > 0);
        this.isSupportText = (this.supportText && this.supportText.length > 0);
        this.isActionIcon = (this.actionIcon && this.actionIcon.length > 0);
        this.isSupport = this.isSupportIcon || this.isSupportText;
        this.isSecondary = this.isSupport || this.isTitle || this.isActionIcon;
    };
    __decorate([
        bindable(),
        __metadata("design:type", String)
    ], MdcGlidTile.prototype, "imgSrc", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", String)
    ], MdcGlidTile.prototype, "imgClass", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", String)
    ], MdcGlidTile.prototype, "supportIcon", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", String)
    ], MdcGlidTile.prototype, "supportText", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcGlidTile.prototype, "actionIcon", void 0);
    MdcGlidTile = __decorate([
        customElement('mdc-grid-tile'),
        inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcGlidTile);
    return MdcGlidTile;
}());
export { MdcGlidTile };
