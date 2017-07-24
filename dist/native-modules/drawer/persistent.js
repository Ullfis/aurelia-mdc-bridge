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
import { MDCPersistentDrawer } from '@material/drawer';
import * as util from '../util';
var MdcDrawerPersistent = (function () {
    function MdcDrawerPersistent(element) {
        this.element = element;
        this.open = false;
        this.log = getLogger('mdc-drawer-persistent');
    }
    MdcDrawerPersistent.prototype.bind = function () { };
    MdcDrawerPersistent.prototype.unbind = function () { };
    MdcDrawerPersistent.prototype.attached = function () {
        this.mdcDrawer = new MDCPersistentDrawer(this.elementDrawer);
        this.elementDrawer.addEventListener('MDCPersistentDrawer:open', this.onOpenEvent.bind(this));
        this.elementDrawer.addEventListener('MDCPersistentDrawer:close', this.onCloseEvent.bind(this));
        this.openChanged(this.open);
    };
    MdcDrawerPersistent.prototype.detached = function () {
        this.elementDrawer.removeEventListener('MDCPersistentDrawer:open', this.onOpenEvent.bind(this));
        this.elementDrawer.removeEventListener('MDCPersistentDrawer:close', this.onCloseEvent.bind(this));
        this.mdcDrawer.destroy();
    };
    MdcDrawerPersistent.prototype.openChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        this.mdcDrawer.open = value;
    };
    MdcDrawerPersistent.prototype.onOpenEvent = function () {
        util.fireEvent(this.elementDrawer, 'on-open', {});
    };
    MdcDrawerPersistent.prototype.onCloseEvent = function () {
        util.fireEvent(this.elementDrawer, 'on-close', {});
    };
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcDrawerPersistent.prototype, "open", void 0);
    MdcDrawerPersistent = __decorate([
        customElement('mdc-drawer-persistent'),
        inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcDrawerPersistent);
    return MdcDrawerPersistent;
}());
export { MdcDrawerPersistent };
