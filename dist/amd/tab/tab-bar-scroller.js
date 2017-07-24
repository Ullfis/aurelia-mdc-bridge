var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "@material/tabs", "../util"], function (require, exports, aurelia_framework_1, tabs_1, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcTabBarScroller = (function () {
        function MdcTabBarScroller(element, taskQueue) {
            this.element = element;
            this.taskQueue = taskQueue;
            this.activeTabIndex = 0;
            this.ariaBefore = 'scroll back button';
            this.ariaNext = 'scroll forward button';
            this.icon = false;
            this.text = false;
            this.primary = false;
            this.accent = false;
            this.stopChangedEvent = false;
        }
        MdcTabBarScroller.prototype.bind = function () { };
        MdcTabBarScroller.prototype.unbind = function () { };
        MdcTabBarScroller.prototype.attached = function () {
            var _this = this;
            this.taskQueue.queueTask(function () {
                _this.icon = _this.hasChildIcons();
                _this.text = _this.hasChildText();
                _this.mdcTabBarScroller = new tabs_1.MDCTabBarScroller(_this.elementTabBarScroller);
                _this.activeTabIndexChanged(_this.activeTabIndex);
                if (_this.mdcTabBarScroller.tabBar) {
                    _this.mdcTabBarScroller.tabBar.listen('MDCTabBar:change', _this.onChange.bind(_this));
                    _this.mdcTabBarScroller.tabBar.preventDefaultOnClick = true;
                }
            });
            this.primaryChanged(this.primary);
            this.accentChanged(this.accent);
        };
        MdcTabBarScroller.prototype.detached = function () {
            if (this.mdcTabBarScroller) {
                if (this.mdcTabBarScroller.tabBar) {
                    this.mdcTabBarScroller.tabBar.unlisten('MDCTabBar:change', this.onChange.bind(this));
                    this.mdcTabBarScroller.tabBar.destroy();
                }
                this.mdcTabBarScroller.destroy();
            }
        };
        MdcTabBarScroller.prototype.onChange = function (_a) {
            var tabs = _a.detail;
            this.stopChangedEvent = true;
            this.activeTabIndex = tabs.activeTabIndex;
            util.fireEvent(this.element, 'on-change', { detail: { activeTabIndex: tabs.activeTabIndex } });
        };
        MdcTabBarScroller.prototype.activeTabIndexChanged = function (newValue) {
            if (this.stopChangedEvent) {
                this.stopChangedEvent = false;
                return;
            }
            var value = parseInt(newValue, 10);
            if (this.mdcTabBarScroller && this.mdcTabBarScroller.tabBar) {
                this.mdcTabBarScroller.tabBar.activeTabIndex = value;
            }
        };
        MdcTabBarScroller.prototype.hasChildIcons = function () {
            var count = this.elementTabBar.getElementsByClassName('amb-tab-is-icon').length;
            return (count !== 0);
        };
        MdcTabBarScroller.prototype.hasChildText = function () {
            var count = this.elementTabBar.getElementsByClassName('amb-tab-is-text').length;
            return (count !== 0);
        };
        MdcTabBarScroller.prototype.iconChanged = function (newValue) {
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
        MdcTabBarScroller.prototype.textChanged = function (newValue) {
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
        MdcTabBarScroller.prototype.primaryChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementTabBar.classList[value ? 'add' : 'remove']('mdc-tab-bar--indicator-primary');
            if (value) {
                this.accent = false;
            }
        };
        MdcTabBarScroller.prototype.accentChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementTabBar.classList[value ? 'add' : 'remove']('mdc-tab-bar--indicator-accent');
            if (value) {
                this.primary = false;
            }
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], MdcTabBarScroller.prototype, "activeTabIndex", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcTabBarScroller.prototype, "ariaBefore", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcTabBarScroller.prototype, "ariaNext", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcTabBarScroller.prototype, "icon", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcTabBarScroller.prototype, "text", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], MdcTabBarScroller.prototype, "primary", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", Object)
        ], MdcTabBarScroller.prototype, "accent", void 0);
        MdcTabBarScroller = __decorate([
            aurelia_framework_1.containerless(),
            aurelia_framework_1.inject(Element, aurelia_framework_1.TaskQueue),
            __metadata("design:paramtypes", [Element, aurelia_framework_1.TaskQueue])
        ], MdcTabBarScroller);
        return MdcTabBarScroller;
    }());
    exports.MdcTabBarScroller = MdcTabBarScroller;
});
