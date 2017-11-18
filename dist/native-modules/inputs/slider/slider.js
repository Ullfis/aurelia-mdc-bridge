var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, bindingMode, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCSlider } from '@material/slider';
import * as util from '../../util';
var MdcSlider = (function () {
    function MdcSlider(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.value = 0;
        this.min = 0;
        this.max = 10;
        this.step = 1;
        this.ariaLabel = 'Slider';
        this.disabled = false;
        this.discrete = false;
        this.markers = false;
        this.stopChangeEvent = false;
        this.log = getLogger('mdc-slider');
    }
    MdcSlider.prototype.bind = function () { };
    MdcSlider.prototype.unbind = function () { };
    MdcSlider.prototype.attached = function () {
        var _this = this;
        this.discreteChanged(this.discrete);
        this.markersChanged(this.markers);
        this.taskQueue.queueTask(function () {
            _this.mdcSlider = new MDCSlider(_this.elementSlider);
            _this.mdcSlider.listen('MDCSlider:change', _this.onChange.bind(_this));
            _this.mdcSlider.listen('MDCSlider:input', _this.onInput.bind(_this));
        });
    };
    MdcSlider.prototype.detached = function () {
        this.mdcSlider.unlisten('MDCSlider:change', this.onChange.bind(this));
        this.mdcSlider.unlisten('MDCSlider:input', this.onInput.bind(this));
        this.mdcSlider.destroy();
    };
    MdcSlider.prototype.onChange = function () {
        this.stopChangeEvent = true;
        this.value = +this.mdcSlider.value;
    };
    MdcSlider.prototype.onInput = function () {
        if (this.lastInputEventValue === this.mdcSlider.value) {
            return;
        }
        this.lastInputEventValue = this.mdcSlider.value;
        util.fireEvent(this.elementSlider, 'on-input', this.mdcSlider.value);
    };
    MdcSlider.prototype.valueChanged = function (newValue) {
        if (this.stopChangeEvent) {
            this.stopChangeEvent = false;
            return;
        }
        var value = parseFloat(newValue);
        this.mdcSlider.value = value;
    };
    MdcSlider.prototype.stepChanged = function (newValue) {
        var value = Math.max(parseFloat(newValue), 0);
        this.mdcSlider.step = value;
    };
    MdcSlider.prototype.minChanged = function (newValue) {
        var minValue = parseFloat(newValue);
        if (minValue > this.mdcSlider.max) {
            this.log.error('min greater than max');
            return;
        }
        this.mdcSlider.min = minValue;
    };
    MdcSlider.prototype.maxChanged = function (newValue) {
        var maxValue = parseFloat(newValue);
        if (maxValue < this.mdcSlider.min) {
            this.log.error('max lesser than min');
            return;
        }
        this.mdcSlider.max = maxValue;
    };
    MdcSlider.prototype.disabledChanged = function (newValue) {
        this.mdcSlider.disabled = util.getBoolean(newValue);
    };
    MdcSlider.prototype.discreteChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        this.elementSlider.classList[value ? 'add' : 'remove']('mdc-slider--discrete');
    };
    MdcSlider.prototype.markersChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        this.elementSlider.classList[value ? 'add' : 'remove']('mdc-slider--display-markers');
    };
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], MdcSlider.prototype, "value", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcSlider.prototype, "min", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcSlider.prototype, "max", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcSlider.prototype, "step", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcSlider.prototype, "ariaLabel", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcSlider.prototype, "disabled", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdcSlider.prototype, "discrete", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", Object)
    ], MdcSlider.prototype, "markers", void 0);
    MdcSlider = __decorate([
        customElement('mdc-slider'),
        inject(Element, TaskQueue),
        __metadata("design:paramtypes", [Element, TaskQueue])
    ], MdcSlider);
    return MdcSlider;
}());
export { MdcSlider };
