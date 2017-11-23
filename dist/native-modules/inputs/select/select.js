var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { children, inject, bindable, bindingMode, customElement, TaskQueue } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { MDCSelect } from '@material/select';
import * as util from '../../util';
var MdcSelect = (function () {
    function MdcSelect(element, taskQueue) {
        this.element = element;
        this.taskQueue = taskQueue;
        this.disabled = false;
        this.internalValueChanged = false;
        this.log = getLogger('mdc-select');
    }
    MdcSelect.prototype.bind = function () { };
    MdcSelect.prototype.unbind = function () { };
    MdcSelect.prototype.attached = function () {
        var _this = this;
        this.taskQueue.queueTask(function () {
            _this.mdcSelect = new MDCSelect(_this.elementSelect);
            _this.mdcSelect.menu_.foundation_.adapter_.getIndexForEventTarget = function (target) {
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
                return _this.mdcSelect.menu_.items.indexOf(target);
            };
            _this.mdcSelect.listen('MDCSelect:change', _this.raiseChangeEvent.bind(_this));
            var mdcSelectFoundation = _this.mdcSelect.foundation_.adapter_;
            mdcSelectFoundation.getTextForOptionAtIndex = _this.getTextForOptionAtIndex.bind(_this);
            mdcSelectFoundation.getValueForOptionAtIndex = _this.getValueForOptionAtIndex.bind(_this);
            _this.disabledChanged(_this.disabled);
            if (!_this.value) {
                return;
            }
            _this.mdcSelect.selectedIndex = _this.findIndex(_this.value);
        });
    };
    MdcSelect.prototype.detached = function () {
        this.mdcSelect.unlisten('MDCSelect:change', this.raiseChangeEvent.bind(this));
        this.mdcSelect.destroy();
    };
    MdcSelect.prototype.listItemsChanged = function () {
        for (var index = 0; index < this.listItems.length; index++) {
            var item = this.listItems[index];
            item.setAttribute('role', 'option');
            item.setAttribute('tabindex', '0');
        }
    };
    MdcSelect.prototype.disabledChanged = function (newValue) {
        this.mdcSelect.disabled = util.getBoolean(newValue);
    };
    MdcSelect.prototype.valueChanged = function (newValue) {
        if (this.internalValueChanged) {
            this.internalValueChanged = false;
            return;
        }
        var index = this.findIndex(newValue);
        this.mdcSelect.selectedIndex = index;
    };
    MdcSelect.prototype.findIndex = function (value) {
        for (var index = 0; index < this.mdcSelect.options.length; index++) {
            if (this.compareModels(this.mdcSelect.item(index).model, value)) {
                return index;
            }
        }
        return -1;
    };
    MdcSelect.prototype.compareModels = function (model1, model2) {
        if (this.matcher) {
            return this.matcher(model1, model2);
        }
        else {
            return (model1 === model2);
        }
    };
    MdcSelect.prototype.raiseChangeEvent = function (e) {
        this.internalValueChanged = true;
        this.value = this.mdcSelect.value;
        util.fireEvent(this.element, 'on-change', e.detail);
    };
    MdcSelect.prototype.getTextForOptionAtIndex = function (index) {
        var item = this.mdcSelect.options[index];
        if (!item) {
            return null;
        }
        var textArea = item.getElementsByClassName('amb-mdc-list-item-text');
        if (textArea && textArea.length > 0) {
            return textArea[0].innerText;
        }
        else {
            return item.textContent;
        }
    };
    MdcSelect.prototype.getValueForOptionAtIndex = function (index) {
        var item = this.mdcSelect.options[index];
        if (!item) {
            return null;
        }
        return item.model;
    };
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcSelect.prototype, "class", void 0);
    __decorate([
        bindable(),
        __metadata("design:type", Object)
    ], MdcSelect.prototype, "disabled", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.twoWay }),
        __metadata("design:type", Object)
    ], MdcSelect.prototype, "value", void 0);
    __decorate([
        bindable({ defaultBindingMode: bindingMode.oneTime }),
        __metadata("design:type", Function)
    ], MdcSelect.prototype, "matcher", void 0);
    __decorate([
        children('.mdc-list-item'),
        __metadata("design:type", Object)
    ], MdcSelect.prototype, "listItems", void 0);
    MdcSelect = __decorate([
        customElement('mdc-select'),
        inject(Element, TaskQueue),
        __metadata("design:paramtypes", [Element, TaskQueue])
    ], MdcSelect);
    return MdcSelect;
}());
export { MdcSelect };
