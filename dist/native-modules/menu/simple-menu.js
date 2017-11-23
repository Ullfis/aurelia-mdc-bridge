var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject, bindable, bindingMode, containerless, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCSimpleMenu } from '@material/menu';
import * as util from '../util';
export var MdcSimpleMenuOpenFrom = {
    topLeft: 'top-left',
    topRight: 'top-right',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right'
};
var MdcSimpleMenu = (function () {
    function MdcSimpleMenu(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.openState = false;
        this.openFrom = null;
        this.internalValueChange = false;
        this.log = getLogger('mdc-simple-menu');
    }
    Object.defineProperty(MdcSimpleMenu.prototype, "open", {
        get: function () {
            return this.mdcSimpleMenu.open;
        },
        set: function (value) {
            this.mdcSimpleMenu.open = value;
        },
        enumerable: true,
        configurable: true
    });
    MdcSimpleMenu.prototype.show = function (options) {
        if (options && options.focusIndex) {
            this.mdcSimpleMenu.show({ focusIndex: options.focusIndex });
            return;
        }
        if (options && options.focusValue) {
            var index = this.findIndex(this.value);
            if (index === -1) {
                this.mdcSimpleMenu.show();
            }
            else {
                this.mdcSimpleMenu.show({ focusIndex: index });
            }
            return;
        }
        this.mdcSimpleMenu.show();
    };
    MdcSimpleMenu.prototype.hide = function () {
        this.mdcSimpleMenu.hide();
    };
    MdcSimpleMenu.prototype.bind = function () { };
    MdcSimpleMenu.prototype.unbind = function () { };
    MdcSimpleMenu.prototype.attached = function () {
        var _this = this;
        if (util.getBoolean(this.openState)) {
            this.elementSimpleMenu.classList.add('mdc-simple-menu--open');
        }
        this.openFromChanged(this.openFrom);
        this.mdcSimpleMenu = new MDCSimpleMenu(this.elementSimpleMenu);
        this.mdcSimpleMenu.foundation_.adapter_.getIndexForEventTarget = function (target) {
            while (target) {
                if (target.classList.contains('mdc-list-item')) {
                    if (target.attributes.getNamedItem('aria-disabled').value === 'true') {
                        target = null;
                    }
                    break;
                }
                else if (target.classList.contains('mdc-simple-menu')) {
                    break;
                }
                target = target.parentElement;
            }
            return _this.mdcSimpleMenu.items.indexOf(target);
        };
        this.mdcSimpleMenu.listen('MDCSimpleMenu:selected', this.raiseSelectEvent.bind(this));
        this.mdcSimpleMenu.listen('MDCSimpleMenu:cancel', this.raiseCancelEvent.bind(this));
        this.taskQueue.queueMicroTask(function () {
            _this.valueChanged(_this.value);
        });
    };
    MdcSimpleMenu.prototype.detached = function () {
        this.mdcSimpleMenu.unlisten('MDCSimpleMenu:selected', this.raiseSelectEvent.bind(this));
        this.mdcSimpleMenu.unlisten('MDCSimpleMenu:cancel', this.raiseCancelEvent.bind(this));
        this.mdcSimpleMenu.destroy();
    };
    MdcSimpleMenu.prototype.raiseSelectEvent = function (e) {
        this.internalValueChange = true;
        this.value = e.detail.item.model;
        util.fireEvent(this.element, 'on-select', { item: e.detail.item, index: e.detail.index });
    };
    MdcSimpleMenu.prototype.raiseCancelEvent = function () {
        util.fireEvent(this.element, 'on-cancel');
    };
    MdcSimpleMenu.prototype.openFromChanged = function (newValue) {
        this.elementSimpleMenu.classList.remove('mdc-simple-menu--open-from-' + MdcSimpleMenuOpenFrom.topLeft);
        this.elementSimpleMenu.classList.remove('mdc-simple-menu--open-from-' + MdcSimpleMenuOpenFrom.topRight);
        this.elementSimpleMenu.classList.remove('mdc-simple-menu--open-from-' + MdcSimpleMenuOpenFrom.bottomLeft);
        this.elementSimpleMenu.classList.remove('mdc-simple-menu--open-from-' + MdcSimpleMenuOpenFrom.bottomRight);
        if (newValue) {
            this.elementSimpleMenu.classList.add('mdc-simple-menu--open-from-' + newValue);
        }
    };
    MdcSimpleMenu.prototype.valueChanged = function (newValue) {
        if (this.internalValueChange || this.open === false) {
            this.internalValueChange = false;
            return;
        }
        var index = this.findIndex(newValue);
        if (index === -1) {
            return;
        }
        this.mdcSimpleMenu.items[index].focus();
    };
    MdcSimpleMenu.prototype.findIndex = function (value) {
        for (var index = 0; index < this.mdcSimpleMenu.items.length; index++) {
            var item = this.mdcSimpleMenu.items[index];
            if (item.model && this.compareModels(item.model, value)) {
                this.log.debug('item index', index);
                return index;
            }
        }
        return -1;
    };
    MdcSimpleMenu.prototype.compareModels = function (model1, model2) {
        return (model1 === model2);
    };
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdcSimpleMenu.prototype, "openState", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", String)
    ], MdcSimpleMenu.prototype, "openFrom", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], MdcSimpleMenu.prototype, "value", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", String)
    ], MdcSimpleMenu.prototype, "class", void 0);
    MdcSimpleMenu = __decorate([
        containerless(),
        customElement('mdc-simple-menu'),
        inject(Element, TaskQueue),
        __metadata("design:paramtypes", [Element, TaskQueue])
    ], MdcSimpleMenu);
    return MdcSimpleMenu;
}());
export { MdcSimpleMenu };
