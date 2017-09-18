var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCRipple } from '@material/ripple';
import * as util from '../../util';
var MdcFab = (function () {
    function MdcFab(element) {
        this.element = element;
        this.mini = false;
        this.plain = false;
        this.ariaLabel = '';
        this.ripple = true;
        this.icon = null;
        this.log = getLogger('mdc-fab');
        this.icon = this.element.firstChild;
        this.removeChildren();
    }
    MdcFab.prototype.attached = function () {
        this.element.classList.add('mdc-fab', 'material-icons');
        var spanNode = document.createElement('span');
        spanNode.classList.add('mdc-fab__icon');
        if (this.icon) {
            spanNode.appendChild(this.icon);
        }
        this.element.appendChild(spanNode);
        this.miniChanged(this.mini);
        this.plainChanged(this.plain);
        this.ariaLabelChanged(this.ariaLabel);
        if (util.getBoolean(this.ripple)) {
            MDCRipple.attachTo(this.element);
        }
    };
    MdcFab.prototype.detached = function () {
        var classes = [
            'mdc-fab',
            'material-icons',
            'mdc-fab--mini',
            'mdc-fab--plain'
        ];
        (_a = this.element.classList).remove.apply(_a, classes);
        this.element.removeAttribute('aria-label');
        this.removeChildren();
        var _a;
    };
    MdcFab.prototype.miniChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-fab--mini');
    };
    MdcFab.prototype.plainChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        this.element.classList[value ? 'add' : 'remove']('mdc-fab--plain');
    };
    MdcFab.prototype.ariaLabelChanged = function (newValue) {
        this.element.setAttribute('aria-label', newValue);
    };
    MdcFab.prototype.removeChildren = function () {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
    };
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcFab.prototype, "mini", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcFab.prototype, "plain", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcFab.prototype, "ariaLabel", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdcFab.prototype, "ripple", void 0);
    MdcFab = __decorate([
        customAttribute('mdc-fab'),
        inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcFab);
    return MdcFab;
}());
export { MdcFab };
