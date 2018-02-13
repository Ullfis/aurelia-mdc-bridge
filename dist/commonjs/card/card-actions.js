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
var util = require("../util");
var MdcCardActions = (function () {
    function MdcCardActions(taskQueue) {
        this.taskQueue = taskQueue;
        this.fullBleed = false;
    }
    MdcCardActions.prototype.bind = function () { };
    MdcCardActions.prototype.unbind = function () { };
    MdcCardActions.prototype.attached = function () {
        var _this = this;
        this.fullBleedChanged(this.fullBleed);
        this.taskQueue.queueTask(function () {
            _this.decorateChildren(_this.elementSection);
        });
    };
    MdcCardActions.prototype.fullBleedChanged = function (newValue) {
        var value = util.getBoolean(newValue);
        this.elementSection.classList[value ? 'add' : 'remove']('mdc-card__actions--full-bleed');
    };
    MdcCardActions.prototype.decorateChildren = function (element) {
        if (element.classList.contains('mdc-button')) {
            element.classList.add('mdc-card__action', 'mdc-card__action--button');
        }
        else if (element.classList.contains('material-icons')) {
            element.classList.add('mdc-card__action', 'mdc-card__action--icon');
        }
        else {
            for (var i = 0; i < element.children.length; i++) {
                this.decorateChildren(element.children[i]);
            }
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", Object)
    ], MdcCardActions.prototype, "fullBleed", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneWay }),
        __metadata("design:type", String)
    ], MdcCardActions.prototype, "class", void 0);
    MdcCardActions = __decorate([
        aurelia_framework_1.customElement('mdc-card-actions'),
        aurelia_framework_1.containerless(),
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_framework_1.TaskQueue])
    ], MdcCardActions);
    return MdcCardActions;
}());
exports.MdcCardActions = MdcCardActions;
