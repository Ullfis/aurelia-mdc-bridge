var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCSnackbar } from '@material/snackbar';
import * as util from '../util';
import { DOMHelper } from '../dom-helper';
let MdcSnackbar = class MdcSnackbar {
    constructor(element) {
        this.element = element;
        this.message = '';
        this.timeout = 2750;
        this.multiline = false;
        this.actionOnBottom = false;
        this.dismissesOnAction = true;
        this.alignStart = false;
        this.log = getLogger('mdc-snackbar');
        if (!this.element) {
            this.addToElement();
        }
    }
    show(options) {
        options = options || {};
        if (util.hasProp(options, 'alignStart')) {
            this.alignStart = options.alignStart;
        }
        if (util.hasProp(options, 'dismissesOnAction')) {
            this.dismissesOnAction = options.dismissesOnAction;
        }
        if (!util.hasProp(options, 'message')) {
            options.message = this.message;
        }
        if (!util.hasProp(options, 'timeout')) {
            options.timeout = this.timeout;
        }
        if (!util.hasProp(options, 'actionText')) {
            options.actionText = this.actionText;
        }
        if (!util.hasProp(options, 'multiline')) {
            options.multiline = util.getBoolean(this.multiline);
        }
        if (!util.hasProp(options, 'actionOnBottom')) {
            options.actionOnBottom = util.getBoolean(this.actionOnBottom);
        }
        if (!util.hasProp(options, 'actionHandler')) {
            if (options.actionText) {
                options.actionHandler = this.onAction.bind(this);
            }
        }
        this.mdcSnackbar.show(options);
    }
    onAction() {
        util.fireEvent(this.elementSnackbar, 'on-action');
    }
    bind() { }
    unbind() { }
    attached() {
        this.mdcSnackbar = new MDCSnackbar(this.elementSnackbar);
        this.alignStartChanged(this.alignStart);
    }
    detached() {
        this.mdcSnackbar.destroy();
    }
    alignStartChanged(newValue) {
        const value = util.getBoolean(newValue);
        this.elementSnackbar.classList[value ? 'add' : 'remove']('mdc-snackbar--align-start');
    }
    dismissesOnActionChanged(newValue) {
        this.mdcSnackbar.dismissesOnAction = util.getBoolean(newValue);
    }
    addToElement() {
        this.element = document.body;
        const bodyMain = document.body.getElementsByTagName('main');
        if (bodyMain && bodyMain.length > 0) {
            this.element = bodyMain[0];
        }
        this.elementTheme = DOMHelper.createChildElement('div', this.element);
        const main = DOMHelper.createChildElement('div', this.elementTheme);
        main.classList.add('mdc-snackbar');
        main.setAttribute('aria-live', 'assertive');
        main.setAttribute('aria-atomic', 'true');
        main.setAttribute('aria-hidden', 'true');
        const div1 = DOMHelper.createChildElement('div', main);
        div1.classList.add('mdc-snackbar__text');
        const div2 = DOMHelper.createChildElement('div', main);
        div2.classList.add('mdc-snackbar__action-wrapper');
        const button = DOMHelper.createChildElement('button', div2);
        button.classList.add('mdc-button', 'mdc-snackbar__action-button');
        button.setAttribute('type', 'button');
        this.elementSnackbar = main;
        this.attached();
        this.mdcSnackbar.foundation_.adapter_.registerTransitionEndHandler(this.onTransitionEndHandler.bind(this));
    }
    onTransitionEndHandler(event) {
        if (event.target !== this.elementSnackbar) {
            return;
        }
        this.mdcSnackbar.foundation_.adapter_.deregisterTransitionEndHandler(this.onTransitionEndHandler.bind(this));
        this.mdcSnackbar.destroy();
        this.element.removeChild(this.elementTheme);
    }
};
__decorate([
    bindable(),
    __metadata("design:type", String)
], MdcSnackbar.prototype, "class", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcSnackbar.prototype, "message", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Number)
], MdcSnackbar.prototype, "timeout", void 0);
__decorate([
    bindable(),
    __metadata("design:type", String)
], MdcSnackbar.prototype, "actionText", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcSnackbar.prototype, "multiline", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcSnackbar.prototype, "actionOnBottom", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcSnackbar.prototype, "dismissesOnAction", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcSnackbar.prototype, "alignStart", void 0);
MdcSnackbar = __decorate([
    inject(Element),
    __metadata("design:paramtypes", [HTMLElement])
], MdcSnackbar);
export { MdcSnackbar };
