var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, containerless } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCToolbar } from '@material/toolbar';
import * as util from '../util';
let MdcToolbar = class MdcToolbar {
    constructor(element) {
        this.element = element;
        this.fixed = false;
        this.waterfall = false;
        this.fixedLastrowOnly = false;
        this.flexible = false;
        this.flexibleDefault = false;
        this.log = getLogger('mdc-toolbar');
    }
    bind() { }
    unbind() { }
    attached() {
        this.mdcToolbar = new MDCToolbar(this.elementToolbar);
        this.mdcToolbar.listen('MDCToolbar:change', this.onChange.bind(this));
        this.mdcToolbar.preventDefaultOnClick = true;
        this.fixedChanged(this.fixed);
        this.waterfallChanged(this.waterfall);
        this.fixedLastrowOnlyChanged(this.fixedLastrowOnly);
        this.flexibleChanged(this.flexible);
        this.flexibleDefaultChanged(this.flexibleDefault);
    }
    detached() {
        this.mdcToolbar.unlisten('MDCToolbar:change', this.onChange.bind(this));
        this.mdcToolbar.destroy();
    }
    onChange(evt) {
        const flexibleER = evt.detail.flexibleExpansionRatio;
        util.fireEvent(this.element, 'on-change', { detail: flexibleER });
    }
    fixedChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--fixed');
        if (value) {
            const fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');
            this.mdcToolbar.fixedAdjustElement = fixedAdjustElement;
        }
        else {
            this.mdcToolbar.fixedAdjustElement = null;
        }
    }
    waterfallChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--waterfall');
    }
    fixedLastrowOnlyChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--fixed-lastrow-only');
    }
    flexibleChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--flexible');
    }
    flexibleDefaultChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementToolbar.classList[value ? 'add' : 'remove']('mdc-toolbar--flexible-default-behavior');
    }
};
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcToolbar.prototype, "class", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcToolbar.prototype, "fixed", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcToolbar.prototype, "waterfall", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcToolbar.prototype, "fixedLastrowOnly", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcToolbar.prototype, "flexible", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcToolbar.prototype, "flexibleDefault", void 0);
MdcToolbar = __decorate([
    containerless(),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcToolbar);
export { MdcToolbar };
