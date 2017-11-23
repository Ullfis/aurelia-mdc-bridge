System.register(["aurelia-framework", "aurelia-logging", "@material/slider", "../../util"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_framework_1, aurelia_logging_1, slider_1, util, MdcSlider;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (slider_1_1) {
                slider_1 = slider_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcSlider = (function () {
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
                    this.log = aurelia_logging_1.getLogger('mdc-slider');
                }
                MdcSlider.prototype.bind = function () { };
                MdcSlider.prototype.unbind = function () { };
                MdcSlider.prototype.attached = function () {
                    var _this = this;
                    this.discreteChanged(this.discrete);
                    this.markersChanged(this.markers);
                    this.taskQueue.queueTask(function () {
                        _this.mdcSlider = new slider_1.MDCSlider(_this.elementSlider);
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
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], MdcSlider.prototype, "value", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcSlider.prototype, "min", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcSlider.prototype, "max", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcSlider.prototype, "step", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcSlider.prototype, "ariaLabel", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcSlider.prototype, "disabled", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcSlider.prototype, "discrete", void 0);
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime }),
                    __metadata("design:type", Object)
                ], MdcSlider.prototype, "markers", void 0);
                MdcSlider = __decorate([
                    aurelia_framework_1.customElement('mdc-slider'),
                    aurelia_framework_1.inject(Element, aurelia_framework_1.TaskQueue),
                    __metadata("design:paramtypes", [Element, aurelia_framework_1.TaskQueue])
                ], MdcSlider);
                return MdcSlider;
            }());
            exports_1("MdcSlider", MdcSlider);
        }
    };
});
