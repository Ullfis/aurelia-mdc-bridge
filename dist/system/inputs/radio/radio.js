System.register(["aurelia-framework", "aurelia-logging", "@material/radio", "../../util"], function (exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_logging_1, radio_1, util, MdcRadio;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (radio_1_1) {
                radio_1 = radio_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcRadio = (function () {
                function MdcRadio(element, taskQueue) {
                    this.element = element;
                    this.taskQueue = taskQueue;
                    this.checked = null;
                    this.disabled = false;
                    this.name = '';
                    this.matcher = null;
                    this.controlId = '';
                    this.isModel = true;
                    this.controlId = "mdc-radio-" + MdcRadio_1.id++;
                    this.log = aurelia_logging_1.getLogger('mdc-radio');
                }
                MdcRadio_1 = MdcRadio;
                MdcRadio.prototype.bind = function () { };
                MdcRadio.prototype.unbind = function () { };
                MdcRadio.prototype.attached = function () {
                    var _this = this;
                    this.isModel = (this.value === undefined);
                    this.taskQueue.queueTask(function () {
                        _this.mdcRadio = new radio_1.MDCRadio(_this.elementRadio);
                        _this.disabledChanged(_this.disabled);
                    });
                };
                MdcRadio.prototype.detached = function () {
                    this.mdcRadio.destroy();
                };
                MdcRadio.prototype.disabledChanged = function (newValue) {
                    this.mdcRadio.disabled = util.getBoolean(newValue);
                };
                MdcRadio.prototype.handleChange = function (e) {
                    var event = {
                        name: this.name,
                        value: this.value || this.model
                    };
                    util.fireEvent(this.element, 'on-change', event);
                };
                MdcRadio.id = 0;
                __decorate([
                    aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
                    __metadata("design:type", Object)
                ], MdcRadio.prototype, "checked", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcRadio.prototype, "disabled", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcRadio.prototype, "name", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcRadio.prototype, "value", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcRadio.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Object)
                ], MdcRadio.prototype, "matcher", void 0);
                MdcRadio = MdcRadio_1 = __decorate([
                    aurelia_framework_1.customElement('mdc-radio'),
                    aurelia_framework_1.autoinject(),
                    __metadata("design:paramtypes", [Element, aurelia_framework_1.TaskQueue])
                ], MdcRadio);
                return MdcRadio;
                var MdcRadio_1;
            }());
            exports_1("MdcRadio", MdcRadio);
        }
    };
});
