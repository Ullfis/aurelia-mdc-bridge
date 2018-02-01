var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, bindingMode, customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCIconToggle } from '@material/icon-toggle';
import * as util from '../../util';
let MdcIconToggle = class MdcIconToggle {
    constructor(element) {
        this.element = element;
        this.iconOn = 'star';
        this.iconOff = 'star_border';
        this.ariaLabelOn = 'On label';
        this.ariaLabelOff = 'Off label';
        this.disabled = false;
        this.on = false;
        this.tabindex = 0;
        this.log = getLogger('mdc-icon-toggle');
    }
    bind() { }
    unbind() { }
    attached() {
        this.mdcIconToggle = new MDCIconToggle(this.elementI);
        this.elementI.addEventListener('MDCIconToggle:change', this.raiseEvent.bind(this));
        this.disabledChanged(this.disabled);
    }
    detached() {
        this.elementI.removeEventListener('MDCIconToggle:change', this.raiseEvent.bind(this));
        this.mdcIconToggle.destroy();
    }
    raiseEvent() {
        this.on = this.mdcIconToggle.on;
        util.fireEvent(this.element, 'on-toggle', this.on);
    }
    onChanged(newValue) {
        this.mdcIconToggle.on = util.getBoolean(newValue);
    }
    disabledChanged(newValue) {
        this.mdcIconToggle.disabled = util.getBoolean(newValue);
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcIconToggle.prototype, "iconOn", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcIconToggle.prototype, "iconOff", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcIconToggle.prototype, "ariaLabelOn", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcIconToggle.prototype, "ariaLabelOff", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneWay }),
    __metadata("design:type", Object)
], MdcIconToggle.prototype, "disabled", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcIconToggle.prototype, "on", void 0);
MdcIconToggle = __decorate([
    customElement('mdc-icon-toggle'),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcIconToggle);
export { MdcIconToggle };
