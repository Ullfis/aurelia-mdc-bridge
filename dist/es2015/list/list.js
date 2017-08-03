var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, bindable, bindingMode, customElement, processContent, noView } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { CreateListComponent } from './create-components';
import * as drawerCommon from '../drawer/common';
import * as util from '../util';
let MdcList = class MdcList {
    constructor(element) {
        this.element = element;
        this.tag = 'ul';
        this.dense = false;
        this.twoLine = false;
        this.avatar = false;
        this.log = getLogger('mdc-list');
    }
    bind() { }
    unbind() { }
    attached() {
        if (drawerCommon.isPermanentDrawer(this.element)) {
            this.element.classList.add('mdc-permanent-drawer__content');
        }
        if (drawerCommon.isPersistentDrawer(this.element)) {
            this.element.classList.add('mdc-persistent-drawer__content');
        }
        if (drawerCommon.isTemporaryDrawer(this.element)) {
            this.element.classList.add('mdc-temporary-drawer__content');
        }
        this.denseChanged(this.dense);
        this.twoLineChanged(this.twoLine);
        this.avatarChanged(this.avatar);
    }
    denseChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementList.classList[value ? 'add' : 'remove']('mdc-list--dense');
    }
    twoLineChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementList.classList[value ? 'add' : 'remove']('mdc-list--two-line');
    }
    avatarChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementList.classList[value ? 'add' : 'remove']('mdc-list--avatar-list');
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcList.prototype, "tag", void 0);
__decorate([
    bindable(),
    __metadata("design:type", String)
], MdcList.prototype, "class", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcList.prototype, "dense", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcList.prototype, "twoLine", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcList.prototype, "avatar", void 0);
MdcList = __decorate([
    noView(),
    customElement('mdc-list'),
    processContent(CreateListComponent),
    autoinject(),
    __metadata("design:paramtypes", [Element])
], MdcList);
export { MdcList };
