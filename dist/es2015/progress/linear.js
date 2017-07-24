var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customElement, containerless } from 'aurelia-framework';
import { MDCLinearProgress } from '@material/linear-progress';
import * as util from '../util';
let MdcLinearProgress = class MdcLinearProgress {
    constructor() {
        this.accent = false;
        this.indeterminate = false;
        this.reversed = false;
        this.open = true;
    }
    bind() { }
    attached() {
        this.mdcElement = new MDCLinearProgress(this.elementDiv);
        this.accentChanged(this.accent);
        this.indeterminateChanged(this.indeterminate);
        this.reversedChanged(this.reversed);
        this.progressChanged(this.progress);
        this.bufferChanged(this.buffer);
        this.openChanged(this.open);
    }
    detached() {
        this.mdcElement.destroy();
    }
    accentChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementDiv.classList[value ? 'add' : 'remove']('mdc-linear-progress--accent');
    }
    indeterminateChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementDiv.classList[value ? 'add' : 'remove']('mdc-linear-progress--indeterminate');
    }
    reversedChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementDiv.classList[value ? 'add' : 'remove']('mdc-linear-progress--reversed');
    }
    progressChanged(newValue) {
        this.mdcElement.progress = newValue;
    }
    bufferChanged(newValue) {
        this.mdcElement.buffer = newValue;
    }
    openChanged(newValue) {
        const value = util.getBoolean(newValue);
        if (value) {
            this.mdcElement.open();
        }
        else {
            this.mdcElement.close();
        }
    }
};
__decorate([
    bindable(),
    __metadata("design:type", String)
], MdcLinearProgress.prototype, "class", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Boolean)
], MdcLinearProgress.prototype, "accent", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Boolean)
], MdcLinearProgress.prototype, "indeterminate", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Boolean)
], MdcLinearProgress.prototype, "reversed", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Number)
], MdcLinearProgress.prototype, "progress", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Number)
], MdcLinearProgress.prototype, "buffer", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Boolean)
], MdcLinearProgress.prototype, "open", void 0);
MdcLinearProgress = __decorate([
    containerless(),
    customElement('mdc-linear-progress')
], MdcLinearProgress);
export { MdcLinearProgress };
