var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging", "@material/tabs", "../util"], function (require, exports, aurelia_framework_1, aurelia_logging_1, tabs_1, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcTabBar = (function () {
        function MdcTabBar(element, taskQueue) {
            this.element = element;
            this.taskQueue = taskQueue;
            this.activeTabIndex = 0;
            this.icon = false;
            this.text = false;
            this.primary = false;
            this.accent = false;
            this.stopChangedEvent = false;
            this.log = aurelia_logging_1.getLogger('mdc-tab-bar');
        }
        MdcTabBar.prototype.bind = function () { };
        MdcTabBar.prototype.unbind = function () { };
        MdcTabBar.prototype.attached = function () {
            var _this = this;
            this.taskQueue.queueTask(function () {
                _this.icon = _this.hasChildIcons();
                _this.text = _this.hasChildText();
                _this.mdcTabBar = new tabs_1.MDCTabBar(_this.elementTabBar);
                _this.activeTabIndexChanged(_this.activeTabIndex);
                _this.mdcTabBar.listen('MDCTabBar:change', _this.onChange.bind(_this));
                _this.mdcTabBar.preventDefaultOnClick = true;
            });
            this.primaryChanged(this.primary);
            this.accentChanged(this.accent);
        };
        MdcTabBar.prototype.detached = function () {
            if (this.mdcTabBar) {
                this.mdcTabBar.unlisten('MDCTabBar:change', this.onChange.bind(this));
                this.mdcTabBar.destroy();
            }
        };
        MdcTabBar.prototype.onChange = function (_a) {
            var tabs = _a.detail;
            this.stopChangedEvent = true;
            this.activeTabIndex = tabs.activeTabIndex;
            util.fireEvent(this.element, 'on-change', { activeTabIndex: tabs.activeTabIndex });
        };
        MdcTabBar.prototype.hasChildIcons = function () {
            var count = this.elementTabBar.getElementsByClassName('amb-tab-is-icon').length;
            return (count !== 0);
        };
        MdcTabBar.prototype.hasChildText = function () {
            var count = this.elementTabBar.getElementsByClassName('amb-tab-is-text').length;
            return (count !== 0);
        };
        MdcTabBar.prototype.activeTabIndexChanged = function (newValue) {
            if (this.stopChangedEvent) {
                this.stopChangedEvent = false;
                return;
            }
            var value = parseInt(newValue, 10);
            if (this.mdcTabBar) {
                this.mdcTabBar.activeTabIndex = value;
            }
        };
        MdcTabBar.prototype.iconChanged = function (newValue) {
            var value = util.getBoolean(newValue);
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
        };
        MdcTabBar.prototype.textChanged = function (newValue) {
            var value = util.getBoolean(newValue);
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
        };
        MdcTabBar.prototype.primaryChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementTabBar.classList[value ? 'add' : 'remove']('mdc-tab-bar--indicator-primary');
            if (value) {
                this.accent = false;
            }
        };
        MdcTabBar.prototype.accentChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementTabBar.classList[value ? 'add' : 'remove']('mdc-tab-bar--indicator-accent');
            if (value) {
                this.primary = false;
            }
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], MdcTabBar.prototype, "activeTabIndex", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", String)
        ], MdcTabBar.prototype, "class", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcTabBar.prototype, "icon", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcTabBar.prototype, "text", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], MdcTabBar.prototype, "primary", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], MdcTabBar.prototype, "accent", void 0);
        MdcTabBar = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.inject(Element, aurelia_framework_1.TaskQueue),
            __metadata("design:paramtypes", [Element, aurelia_framework_1.TaskQueue])
        ], MdcTabBar);
        return MdcTabBar;
    }());
    exports.MdcTabBar = MdcTabBar;
});
