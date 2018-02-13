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
import { MDCMenu, Corner } from '@material/menu';
import * as util from '../util';
export var MdcMenuAnchorCorner = {
    topLeft: 'top-left',
    topRight: 'top-right',
    topStart: 'top-start',
    topEnd: 'top-end',
    bottomLeft: 'bottom-left',
    bottomRight: 'bottom-right',
    bottomStart: 'bottom-start',
    bottomEnd: 'bottom-end'
};
var MdcMenu = (function () {
    function MdcMenu(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.openState = false;
        this.quickOpen = false;
        this.anchorCorner = null;
        this.internalValueChange = false;
        this.log = getLogger('mdc-menu');
    }
    Object.defineProperty(MdcMenu.prototype, "open", {
        get: function () {
            return this.mdcMenu.open;
        },
        set: function (value) {
            this.mdcMenu.open = value;
        },
        enumerable: true,
        configurable: true
    });
    MdcMenu.prototype.show = function (options) {
        if (options && options.focusIndex) {
            this.mdcMenu.show({ focusIndex: options.focusIndex });
            return;
        }
        if (options && options.focusValue) {
            var index = this.findIndex(this.value);
            if (index === -1) {
                this.mdcMenu.show();
            }
            else {
                this.mdcMenu.show({ focusIndex: index });
            }
            return;
        }
        this.mdcMenu.show();
    };
    MdcMenu.prototype.hide = function () {
        this.mdcMenu.hide();
    };
    MdcMenu.prototype.bind = function () { };
    MdcMenu.prototype.unbind = function () { };
    MdcMenu.prototype.attached = function () {
        var _this = this;
        if (util.getBoolean(this.openState)) {
            this.elementMenu.classList.add('mdc-menu--open');
        }
        this.mdcMenu = new MDCMenu(this.elementMenu);
        this.anchorCornerChanged(this.anchorCorner);
        this.mdcMenu.quickOpen = util.getBoolean(this.quickOpen);
        this.mdcMenu.foundation_.adapter_.getIndexForEventTarget = function (target) {
            while (target) {
                if (target.classList.contains('mdc-list-item')) {
                    if (target.attributes.getNamedItem('aria-disabled') &&
                        target.attributes.getNamedItem('aria-disabled').value === 'true') {
                        target = null;
                    }
                    break;
                }
                else if (target.classList.contains('mdc-menu')) {
                    break;
                }
                target = target.parentElement;
            }
            return _this.mdcMenu.items.indexOf(target);
        };
        this.mdcMenu.listen('MDCMenu:selected', this.raiseSelectEvent.bind(this));
        this.mdcMenu.listen('MDCMenu:cancel', this.raiseCancelEvent.bind(this));
        this.taskQueue.queueMicroTask(function () {
            _this.valueChanged(_this.value);
        });
    };
    MdcMenu.prototype.detached = function () {
        this.mdcMenu.unlisten('MDCMenu:selected', this.raiseSelectEvent.bind(this));
        this.mdcMenu.unlisten('MDCMenu:cancel', this.raiseCancelEvent.bind(this));
        this.mdcMenu.destroy();
    };
    MdcMenu.prototype.raiseSelectEvent = function (e) {
        this.internalValueChange = true;
        this.value = e.detail.item.model;
        util.fireEvent(this.element, 'on-select', { item: e.detail.item, index: e.detail.index });
    };
    MdcMenu.prototype.raiseCancelEvent = function () {
        util.fireEvent(this.element, 'on-cancel');
    };
    MdcMenu.prototype.anchorCornerChanged = function (newValue) {
        if (this.mdcMenu) {
            switch (newValue) {
                case MdcMenuAnchorCorner.topLeft:
                    this.mdcMenu.setAnchorCorner(Corner.TOP_LEFT);
                    break;
                case MdcMenuAnchorCorner.topRight:
                    this.mdcMenu.setAnchorCorner(Corner.TOP_RIGHT);
                    break;
                case MdcMenuAnchorCorner.topStart:
                    this.mdcMenu.setAnchorCorner(Corner.TOP_START);
                    break;
                case MdcMenuAnchorCorner.topEnd:
                    this.mdcMenu.setAnchorCorner(Corner.TOP_END);
                    break;
                case MdcMenuAnchorCorner.bottomLeft:
                    this.mdcMenu.setAnchorCorner(Corner.BOTTOM_LEFT);
                    break;
                case MdcMenuAnchorCorner.bottomRight:
                    this.mdcMenu.setAnchorCorner(Corner.BOTTOM_RIGHT);
                    break;
                case MdcMenuAnchorCorner.bottomStart:
                    this.mdcMenu.setAnchorCorner(Corner.BOTTOM_START);
                    break;
                case MdcMenuAnchorCorner.bottomEnd:
                    this.mdcMenu.setAnchorCorner(Corner.BOTTOM_END);
                    break;
            }
        }
    };
    MdcMenu.prototype.valueChanged = function (newValue) {
        if (this.internalValueChange || this.open === false) {
            this.internalValueChange = false;
            return;
        }
        var index = this.findIndex(newValue);
        if (index === -1) {
            return;
        }
        this.mdcMenu.items[index].focus();
    };
    MdcMenu.prototype.findIndex = function (value) {
        for (var index = 0; index < this.mdcMenu.items.length; index++) {
            var item = this.mdcMenu.items[index];
            if (item.model && this.compareModels(item.model, value)) {
                return index;
            }
        }
        return -1;
    };
    MdcMenu.prototype.compareModels = function (model1, model2) {
        return (model1 === model2);
    };
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdcMenu.prototype, "openState", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdcMenu.prototype, "quickOpen", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneWay }),
        __metadata("design:type", String)
    ], MdcMenu.prototype, "anchorCorner", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], MdcMenu.prototype, "value", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", String)
    ], MdcMenu.prototype, "class", void 0);
    MdcMenu = __decorate([
        containerless(),
        customElement('mdc-menu'),
        inject(Element, TaskQueue),
        __metadata("design:paramtypes", [Element, TaskQueue])
    ], MdcMenu);
    return MdcMenu;
}());
export { MdcMenu };
