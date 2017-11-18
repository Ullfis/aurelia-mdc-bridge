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
let MdcSlider = class MdcSlider {
    constructor(element, taskQueue) {
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
    bind() { }
    unbind() { }
    attached() {
        this.discreteChanged(this.discrete);
        this.markersChanged(this.markers);
        this.taskQueue.queueTask(() => {
            this.mdcSlider = new MDCSlider(this.elementSlider);
            this.mdcSlider.listen('MDCSlider:change', this.onChange.bind(this));
            this.mdcSlider.listen('MDCSlider:input', this.onInput.bind(this));
        });
    }
    detached() {
        this.mdcSlider.unlisten('MDCSlider:change', this.onChange.bind(this));
        this.mdcSlider.unlisten('MDCSlider:input', this.onInput.bind(this));
        this.mdcSlider.destroy();
    }
    onChange() {
        this.stopChangeEvent = true;
        this.value = +this.mdcSlider.value;
    }
    onInput() {
        if (this.lastInputEventValue === this.mdcSlider.value) {
            return;
        }
        this.lastInputEventValue = this.mdcSlider.value;
        util.fireEvent(this.elementSlider, 'on-input', this.mdcSlider.value);
    }
    valueChanged(newValue) {
        if (this.stopChangeEvent) {
            this.stopChangeEvent = false;
            return;
        }
        const value = parseFloat(newValue);
        this.mdcSlider.value = value;
    }
    stepChanged(newValue) {
        const value = Math.max(parseFloat(newValue), 0);
        this.mdcSlider.step = value;
    }
    minChanged(newValue) {
        const minValue = parseFloat(newValue);
        if (minValue > this.mdcSlider.max) {
            this.log.error('min greater than max');
            return;
        }
        this.mdcSlider.min = minValue;
    }
    maxChanged(newValue) {
        const maxValue = parseFloat(newValue);
        if (maxValue < this.mdcSlider.min) {
            this.log.error('max lesser than min');
            return;
        }
        this.mdcSlider.max = maxValue;
    }
    disabledChanged(newValue) {
        this.mdcSlider.disabled = util.getBoolean(newValue);
    }
    discreteChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementSlider.classList[value ? 'add' : 'remove']('mdc-slider--discrete');
    }
    markersChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementSlider.classList[value ? 'add' : 'remove']('mdc-slider--display-markers');
    }
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
export { MdcSlider };
