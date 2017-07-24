var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, bindingMode, customElement, noView, containerless, processContent } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import { CreateListItemComponent } from './create-components';
import * as util from '../util';
let MdcListItem = class MdcListItem {
    constructor(element) {
        this.element = element;
        this.ripple = false;
        this.disabled = false;
        this.target = '_self';
        this.isSimpleMenuItem = false;
        this.isSelectMenuItem = false;
        this.log = getLogger('mdc-list-item');
    }
    elementClick(e) {
        const event = util.fireEvent(this.element, 'on-click', this);
        const stopPropagation = event['propagationStopped'] ? true : false;
        return !stopPropagation;
    }
    bind() { }
    unbind() { }
    attached() {
        this.parentElement = this.elementListItem.parentElement;
        this.selectMenuItem();
        this.simpleMenuItem();
        this.rippleEffect();
        this.disabledChanged(this.disabled);
    }
    detached() {
        if (this.mdcRipple) {
            this.mdcRipple.destroy();
        }
    }
    simpleMenuItem() {
        this.isSimpleMenuItem = this.parentElement.classList.contains('mdc-simple-menu__items');
        if (this.isSimpleMenuItem) {
            this.elementListItem.setAttribute('role', this.isSelectMenuItem ? 'option' : 'menuitem');
        }
    }
    selectMenuItem() {
        this.isSelectMenuItem = this.parentElement.parentElement.classList.contains('mdc-select__menu');
    }
    rippleEffect() {
        if (this.ripple) {
            this.mdcRipple = new MDCRipple(this.elementListItem);
        }
    }
    disabledChanged(newValue) {
        const value = util.getBoolean(newValue);
        if (value && this.isSimpleMenuItem) {
            this.elementListItem.setAttribute('tabindex', '-1');
            this.elementListItem.setAttribute('aria-disabled', 'true');
        }
        else {
            this.elementListItem.setAttribute('tabindex', '0');
            this.elementListItem.removeAttribute('aria-disabled');
        }
    }
};
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcListItem.prototype, "class", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcListItem.prototype, "ripple", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcListItem.prototype, "model", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", Object)
], MdcListItem.prototype, "disabled", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", String)
], MdcListItem.prototype, "href", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.oneTime }),
    __metadata("design:type", String)
], MdcListItem.prototype, "target", void 0);
MdcListItem = __decorate([
    noView(),
    containerless(),
    customElement('mdc-list-item'),
    processContent(CreateListItemComponent),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcListItem);
export { MdcListItem };
