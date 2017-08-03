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
import * as util from '../../util';
let MdcSwitch = MdcSwitch_1 = class MdcSwitch {
    constructor(element) {
        this.element = element;
        this.disabled = false;
        this.labelOff = '';
        this.labelOn = '';
        this.controlId = '';
        this.controlId = `mdc-switch-${MdcSwitch_1.id++}`;
        this.log = getLogger('mdc-switch');
    }
    bind() { }
    unbind() { }
    attached() {
        this.checkedChanged(this.checked);
        this.inputElement.addEventListener('change', this.handleChange.bind(this));
    }
    detached() {
        this.inputElement.removeEventListener('change', this.handleChange.bind(this));
    }
    handleChange() {
        this.checked = this.inputElement.checked;
        util.fireEvent(this.element, 'on-change', this.checked);
        util.fireEvent(this.inputElement, 'blur');
    }
    checkedChanged(newValue) {
        this.inputElement.checked = util.getBoolean(newValue);
    }
};
MdcSwitch.id = 0;
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcSwitch.prototype, "disabled", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcSwitch.prototype, "labelOff", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcSwitch.prototype, "labelOn", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcSwitch.prototype, "checked", void 0);
MdcSwitch = MdcSwitch_1 = __decorate([
    customElement('mdc-switch'),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcSwitch);
export { MdcSwitch };
var MdcSwitch_1;
