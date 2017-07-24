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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_logging_1 = require("aurelia-logging");
var dialog_1 = require("@material/dialog");
var util = require("../util");
var MdcDialog = (function () {
    function MdcDialog(element) {
        this.element = element;
        this.header = '';
        this.accept = '';
        this.cancel = '';
        this.scrollable = false;
        this.controlId = '';
        this.controlId = "mdc-dialog-" + MdcDialog_1.id++;
        this.log = aurelia_logging_1.getLogger('mdc-dialog');
    }
    MdcDialog_1 = MdcDialog;
    MdcDialog.prototype.show = function (showDialog) {
        if (showDialog === void 0) { showDialog = true; }
        if (showDialog) {
            this.mdcElement.show();
        }
        else {
            this.mdcElement.close();
        }
    };
    MdcDialog.prototype.bind = function () { };
    MdcDialog.prototype.unbind = function () { };
    MdcDialog.prototype.attached = function () {
        this.scrollableChanged(this.scrollable);
        this.mdcElement = new dialog_1.MDCDialog(this.diagElement);
        this.mdcElement.listen('MDCDialog:accept', this.onButtonAccept.bind(this));
        this.mdcElement.listen('MDCDialog:cancel', this.onButtonCancel.bind(this));
    };
    MdcDialog.prototype.detached = function () {
        this.mdcElement.unlisten('MDCDialog:accept', this.onButtonAccept.bind(this));
        this.mdcElement.unlisten('MDCDialog:cancel', this.onButtonCancel.bind(this));
        this.mdcElement.destroy();
    };
    MdcDialog.prototype.onButtonAccept = function () {
        util.fireEvent(this.diagElement, 'on-click', true);
    };
    MdcDialog.prototype.onButtonCancel = function () {
        util.fireEvent(this.diagElement, 'on-click', false);
    };
    MdcDialog.prototype.scrollableChanged = function (newValue) {
        this.scrollable = util.getBoolean(newValue);
    };
    MdcDialog.id = 0;
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcDialog.prototype, "header", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcDialog.prototype, "accept", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcDialog.prototype, "cancel", void 0);
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], MdcDialog.prototype, "scrollable", void 0);
    MdcDialog = MdcDialog_1 = __decorate([
        aurelia_framework_1.customElement('mdc-dialog'),
        aurelia_framework_1.inject(Element),
        __metadata("design:paramtypes", [Element])
    ], MdcDialog);
    return MdcDialog;
    var MdcDialog_1;
}());
exports.MdcDialog = MdcDialog;
