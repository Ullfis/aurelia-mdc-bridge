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
import { MDCTemporaryDrawer } from '@material/drawer';
import * as util from '../util';
var MdcDrawerTemporary = (function () {
    function MdcDrawerTemporary(element) {
        this.element = element;
        this.open = false;
        this.log = getLogger('mdc-drawer-temporary');
    }
    MdcDrawerTemporary.prototype.bind = function () { };
    MdcDrawerTemporary.prototype.unbind = function () { };
    MdcDrawerTemporary.prototype.attached = function () {
        if (!MDCTemporaryDrawer.prototype.getDefaultFoundation_) {
            MDCTemporaryDrawer.prototype.getDefaultFoundation_ = MDCTemporaryDrawer.prototype.getDefaultFoundation;
            MDCTemporaryDrawer.prototype.getDefaultFoundation = function () {
                var foundation = this.getDefaultFoundation_();
                foundation.drawerClickHandler_ = function (e) {
                    if (e.target.tagName !== 'A') {
                        e.stopPropagation();
                    }
                };
                return foundation;
            };
        }
        this.mdcDrawer = new MDCTemporaryDrawer(this.elementDrawer);
        this.elementDrawer.addEventListener('MDCTemporaryDrawer:open', this.onOpenEvent.bind(this));
        this.elementDrawer.addEventListener('MDCTemporaryDrawer:close', this.onCloseEvent.bind(this));
        this.openChanged(this.open);
    };
    MdcDrawerTemporary.prototype.detached = function () {
        this.elementDrawer.removeEventListener('MDCTemporaryDrawer:open', this.onOpenEvent.bind(this));
        this.elementDrawer.removeEventListener('MDCTemporaryDrawer:close', this.onCloseEvent.bind(this));
        this.mdcDrawer.destroy();
    };
    MdcDrawerTemporary.prototype.openChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        this.mdcDrawer.open = value;
    };
    MdcDrawerTemporary.prototype.onOpenEvent = function () {
        util.fireEvent(this.elementDrawer, 'on-open', {});
    };
    MdcDrawerTemporary.prototype.onCloseEvent = function () {
        util.fireEvent(this.elementDrawer, 'on-close', {});
        this.open = false;
    };
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], MdcDrawerTemporary.prototype, "open", void 0);
    MdcDrawerTemporary = __decorate([
        customElement('mdc-drawer-temporary'),
        inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcDrawerTemporary);
    return MdcDrawerTemporary;
}());
export { MdcDrawerTemporary };
