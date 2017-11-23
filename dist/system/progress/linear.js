System.register(["aurelia-framework", "@material/linear-progress", "../util"], function (exports_1, context_1) {
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
    var aurelia_framework_1, linear_progress_1, util, MdcLinearProgress;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (linear_progress_1_1) {
                linear_progress_1 = linear_progress_1_1;
            },
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
            MdcLinearProgress = (function () {
                function MdcLinearProgress() {
                    this.indeterminate = false;
                    this.reversed = false;
                    this.open = true;
                }
                MdcLinearProgress.prototype.bind = function () { };
                MdcLinearProgress.prototype.attached = function () {
                    this.mdcElement = new linear_progress_1.MDCLinearProgress(this.elementDiv);
                    this.indeterminateChanged(this.indeterminate);
                    this.reversedChanged(this.reversed);
                    this.progressChanged(this.progress);
                    this.bufferChanged(this.buffer);
                    this.openChanged(this.open);
                };
                MdcLinearProgress.prototype.detached = function () {
                    this.mdcElement.destroy();
                };
                MdcLinearProgress.prototype.indeterminateChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementDiv.classList[value ? 'add' : 'remove']('mdc-linear-progress--indeterminate');
                };
                MdcLinearProgress.prototype.reversedChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    this.elementDiv.classList[value ? 'add' : 'remove']('mdc-linear-progress--reversed');
                };
                MdcLinearProgress.prototype.progressChanged = function (newValue) {
                    this.mdcElement.progress = newValue;
                };
                MdcLinearProgress.prototype.bufferChanged = function (newValue) {
                    this.mdcElement.buffer = newValue;
                };
                MdcLinearProgress.prototype.openChanged = function (newValue) {
                    var value = util.getBoolean(newValue);
                    if (value) {
                        this.mdcElement.open();
                    }
                    else {
                        this.mdcElement.close();
                    }
                };
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", String)
                ], MdcLinearProgress.prototype, "class", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Boolean)
                ], MdcLinearProgress.prototype, "indeterminate", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Boolean)
                ], MdcLinearProgress.prototype, "reversed", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Number)
                ], MdcLinearProgress.prototype, "progress", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Number)
                ], MdcLinearProgress.prototype, "buffer", void 0);
                __decorate([
                    aurelia_framework_1.bindable(),
                    __metadata("design:type", Boolean)
                ], MdcLinearProgress.prototype, "open", void 0);
                MdcLinearProgress = __decorate([
                    aurelia_framework_1.customElement('mdc-linear-progress')
                ], MdcLinearProgress);
                return MdcLinearProgress;
            }());
            exports_1("MdcLinearProgress", MdcLinearProgress);
        }
    };
});
