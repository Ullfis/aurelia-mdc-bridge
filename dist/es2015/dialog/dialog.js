var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, customElement } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCDialog } from '@material/dialog';
import * as util from '../util';
let MdcDialog = MdcDialog_1 = class MdcDialog {
    constructor(element) {
        this.element = element;
        this.header = '';
        this.accept = '';
        this.cancel = '';
        this.scrollable = false;
        this.controlId = '';
        this.controlId = `mdc-dialog-${MdcDialog_1.id++}`;
        this.log = getLogger('mdc-dialog');
    }
    show(showDialog = true) {
        if (showDialog) {
            this.mdcElement.show();
        }
        else {
            this.mdcElement.close();
        }
    }
    bind() { }
    unbind() { }
    attached() {
        this.scrollableChanged(this.scrollable);
        this.mdcElement = new MDCDialog(this.diagElement);
        this.mdcElement.listen('MDCDialog:accept', this.onButtonAccept.bind(this));
        this.mdcElement.listen('MDCDialog:cancel', this.onButtonCancel.bind(this));
    }
    detached() {
        this.mdcElement.unlisten('MDCDialog:accept', this.onButtonAccept.bind(this));
        this.mdcElement.unlisten('MDCDialog:cancel', this.onButtonCancel.bind(this));
        this.mdcElement.destroy();
    }
    onButtonAccept() {
        util.fireEvent(this.diagElement, 'on-click', true);
    }
    onButtonCancel() {
        util.fireEvent(this.diagElement, 'on-click', false);
    }
    scrollableChanged(newValue) {
        this.scrollable = util.getBoolean(newValue);
    }
};
MdcDialog.id = 0;
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcDialog.prototype, "header", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcDialog.prototype, "accept", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcDialog.prototype, "cancel", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcDialog.prototype, "scrollable", void 0);
MdcDialog = MdcDialog_1 = __decorate([
    customElement('mdc-dialog'),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], MdcDialog);
export { MdcDialog };
var MdcDialog_1;
