var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging", "@material/ripple", "../../util"], function (require, exports, aurelia_framework_1, aurelia_logging_1, ripple_1, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcFab = (function () {
        function MdcFab(element) {
            this.element = element;
            this.mini = false;
            this.plain = false;
            this.ariaLabel = '';
            this.ripple = true;
            this.log = aurelia_logging_1.getLogger('mdc-fab');
            var icon = this.element.firstChild;
            this.removeChildren();
            var spanNode = document.createElement('span');
            spanNode.classList.add('mdc-fab__icon');
            if (icon) {
                spanNode.appendChild(icon);
            }
            this.element.appendChild(spanNode);
        }
        MdcFab.prototype.attached = function () {
            this.element.classList.add('mdc-fab', 'material-icons');
            if (util.getBoolean(this.ripple)) {
                ripple_1.MDCRipple.attachTo(this.element);
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
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcFab.prototype, "mini", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcFab.prototype, "plain", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcFab.prototype, "ariaLabel", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
            __metadata("design:type", Object)
        ], MdcFab.prototype, "ripple", void 0);
        MdcFab = __decorate([
            aurelia_framework_1.customAttribute('mdc-fab'),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], MdcFab);
        return MdcFab;
    }());
    exports.MdcFab = MdcFab;
});
