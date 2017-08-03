var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, bindable, bindingMode, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCRadio } from '@material/radio';
import * as util from '../../util';
var MdcRadio = (function () {
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
        this.log = getLogger('mdc-radio');
    }
    MdcRadio_1 = MdcRadio;
    MdcRadio.prototype.bind = function () { };
    MdcRadio.prototype.unbind = function () { };
    MdcRadio.prototype.attached = function () {
        var _this = this;
        this.isModel = (this.value === undefined);
        this.taskQueue.queueTask(function () {
            _this.mdcRadio = new MDCRadio(_this.elementRadio);
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
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], MdcRadio.prototype, "checked", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcRadio.prototype, "disabled", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcRadio.prototype, "name", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcRadio.prototype, "value", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcRadio.prototype, "model", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcRadio.prototype, "matcher", void 0);
    MdcRadio = MdcRadio_1 = __decorate([
        customElement('mdc-radio'),
        autoinject(),
        __metadata("design:paramtypes", [Element, TaskQueue])
    ], MdcRadio);
    return MdcRadio;
    var MdcRadio_1;
}());
export { MdcRadio };
