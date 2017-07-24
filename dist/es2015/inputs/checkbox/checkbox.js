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
import { MDCCheckbox } from '@material/checkbox';
import * as util from '../../util';
let MdcCheckbox = MdcCheckbox_1 = class MdcCheckbox {
    constructor(element) {
        this.element = element;
        this.checked = false;
        this.indeterminate = false;
        this.disabled = false;
        this.controlId = '';
        this.controlId = `mdc-checkbox-${MdcCheckbox_1.id++}`;
        this.log = getLogger('mdc-checkbox');
    }
    bind() {
        this.mdcCheckbox = new MDCCheckbox(this.elementCheckbox);
        this.disabledChanged(this.disabled);
        this.indeterminateChanged(this.indeterminate);
        this.mdcCheckbox.checked = this.checked;
    }
    unbind() {
        this.mdcCheckbox.destroy();
    }
    handleChange(e) {
        this.checked = this.mdcCheckbox.checked;
        e.stopPropagation();
    }
    checkedChanged(newValue) {
        this.indeterminate = false;
        const value = util.getBoolean(newValue);
        if (this.mdcCheckbox.checked !== value) {
            this.mdcCheckbox.checked = value;
        }
        util.fireEvent(this.element, 'on-change', value);
    }
    disabledChanged(newValue) {
        this.mdcCheckbox.disabled = util.getBoolean(newValue);
    }
    indeterminateChanged(newValue) {
        this.mdcCheckbox.indeterminate = util.getBoolean(newValue);
    }
};
MdcCheckbox.id = 0;
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcCheckbox.prototype, "checked", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcCheckbox.prototype, "indeterminate", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcCheckbox.prototype, "disabled", void 0);
MdcCheckbox = MdcCheckbox_1 = __decorate([
    customElement('mdc-checkbox'),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcCheckbox);
export { MdcCheckbox };
var MdcCheckbox_1;
