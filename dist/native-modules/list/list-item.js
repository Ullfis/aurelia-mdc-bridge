var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, bindingMode, customElement, noView, processContent } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import { CreateListItemComponent } from './create-components';
import * as util from '../util';
var MdcListItem = (function () {
    function MdcListItem(element) {
        this.element = element;
        this.ripple = false;
        this.disabled = false;
        this.target = '_self';
        this.isSimpleMenuItem = false;
        this.isSelectMenuItem = false;
        this.log = getLogger('mdc-list-item');
    }
    MdcListItem.prototype.elementClick = function (e) {
        var event = util.fireEvent(this.element, 'on-click', this);
        var stopPropagation = event['propagationStopped'] ? true : false;
        return !stopPropagation;
    };
    MdcListItem.prototype.bind = function () { };
    MdcListItem.prototype.unbind = function () { };
    MdcListItem.prototype.attached = function () {
        this.parentElement = util.findAncestor(this.elementListItem, 'mdc-list');
        this.selectMenuItem();
        this.simpleMenuItem();
        this.rippleEffect();
        this.disabledChanged(this.disabled);
    };
    MdcListItem.prototype.detached = function () {
        if (this.mdcRipple) {
            this.mdcRipple.destroy();
        }
    };
    MdcListItem.prototype.simpleMenuItem = function () {
        this.isSimpleMenuItem = this.parentElement.classList.contains('mdc-simple-menu__items');
        if (this.isSimpleMenuItem) {
            this.elementListItem.setAttribute('role', this.isSelectMenuItem ? 'option' : 'menuitem');
        }
    };
    MdcListItem.prototype.selectMenuItem = function () {
        this.isSelectMenuItem = util.findAncestor(this.parentElement, 'mdc-select__menu') ? true : false;
    };
    MdcListItem.prototype.rippleEffect = function () {
        if (this.ripple) {
            this.mdcRipple = new MDCRipple(this.elementListItem);
        }
    };
    MdcListItem.prototype.disabledChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        if (value && this.isSimpleMenuItem) {
            this.elementListItem.setAttribute('tabindex', '-1');
            this.elementListItem.setAttribute('aria-disabled', 'true');
        }
        else {
            this.elementListItem.setAttribute('tabindex', '0');
            this.elementListItem.removeAttribute('aria-disabled');
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
        customElement('mdc-list-item'),
        processContent(CreateListItemComponent),
        inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcListItem);
    return MdcListItem;
}());
export { MdcListItem };
