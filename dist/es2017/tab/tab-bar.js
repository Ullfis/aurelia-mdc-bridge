var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, bindable, bindingMode, TaskQueue } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCTabBar } from '@material/tabs';
import * as util from '../util';
let MdcTabBar = class MdcTabBar {
    constructor(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.activeTabIndex = 0;
        this.icon = false;
        this.text = false;
        this.stopChangedEvent = false;
        this.log = getLogger('mdc-tab-bar');
    }
    bind() { }
    unbind() { }
    attached() {
        this.taskQueue.queueTask(() => {
            this.icon = this.hasChildIcons();
            this.text = this.hasChildText();
            this.mdcTabBar = new MDCTabBar(this.elementTabBar);
            this.activeTabIndexChanged(this.activeTabIndex);
            this.mdcTabBar.listen('MDCTabBar:change', this.onChange.bind(this));
            this.mdcTabBar.preventDefaultOnClick = true;
        });
    }
    detached() {
        if (this.mdcTabBar) {
            this.mdcTabBar.unlisten('MDCTabBar:change', this.onChange.bind(this));
            this.mdcTabBar.destroy();
        }
    }
    onChange({ detail: tabs }) {
        this.stopChangedEvent = true;
        this.activeTabIndex = tabs.activeTabIndex;
        util.fireEvent(this.element, 'on-change', { activeTabIndex: tabs.activeTabIndex });
    }
    hasChildIcons() {
        const count = this.elementTabBar.getElementsByClassName('amb-tab-is-icon').length;
        return (count !== 0);
    }
    hasChildText() {
        const count = this.elementTabBar.getElementsByClassName('amb-tab-is-text').length;
        return (count !== 0);
    }
    activeTabIndexChanged(newValue) {
        if (this.stopChangedEvent) {
            this.stopChangedEvent = false;
            return;
        }
        const value = parseInt(newValue, 10);
        if (this.mdcTabBar) {
            this.mdcTabBar.activeTabIndex = value;
        }
    }
    iconChanged(newValue) {
        const value = util.getBoolean(newValue);
        if (!value) {
            this.elementTabBar.classList.remove('mdc-tab-bar--icons-with-text');
            this.elementTabBar.classList.remove('mdc-tab-bar--icon-tab-bar');
        }
        else {
            if (util.getBoolean(this.text)) {
                this.elementTabBar.classList.add('mdc-tab-bar--icons-with-text');
            }
            else {
                this.elementTabBar.classList.add('mdc-tab-bar--icon-tab-bar');
            }
        }
    }
    textChanged(newValue) {
        const value = util.getBoolean(newValue);
        if (!value) {
            this.elementTabBar.classList.remove('mdc-tab-bar--icons-with-text');
            if (util.getBoolean(this.icon)) {
                this.elementTabBar.classList.add('mdc-tab-bar--icon-tab-bar');
            }
        }
        else {
            if (util.getBoolean(this.icon)) {
                this.elementTabBar.classList.add('mdc-tab-bar--icons-with-text');
            }
        }
    }
};
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay }),
    __metadata("design:type", Object)
], MdcTabBar.prototype, "activeTabIndex", void 0);
__decorate([
    bindable(),
    __metadata("design:type", String)
], MdcTabBar.prototype, "class", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTabBar.prototype, "icon", void 0);
__decorate([
    bindable(),
    __metadata("design:type", Object)
], MdcTabBar.prototype, "text", void 0);
MdcTabBar = __decorate([
    autoinject(),
    __metadata("design:paramtypes", [Element, TaskQueue])
], MdcTabBar);
export { MdcTabBar };
