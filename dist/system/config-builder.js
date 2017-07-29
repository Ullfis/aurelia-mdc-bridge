System.register(["aurelia-pal"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aurelia_pal_1, ConfigBuilder;
    return {
        setters: [
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            }
        ],
        execute: function () {
            ConfigBuilder = (function () {
                function ConfigBuilder() {
                    this.globalResources = [];
                    this.useGlobalResources = true;
                }
                ConfigBuilder.prototype.useAll = function () {
                    return this
                        .useButtons()
                        .useFab()
                        .useIconToggle()
                        .useCards()
                        .useDialogs()
                        .usePermanentDrawer()
                        .usePersistentDrawer()
                        .useTemporaryDrawer()
                        .useGridLists()
                        .useCheckboxes()
                        .useRadioButtons()
                        .useSelectMenus()
                        .useSelectMenusCss()
                        .useSliders()
                        .useSwitches()
                        .useTextFields()
                        .useLayoutGrids()
                        .useLinearProgress()
                        .useLists()
                        .useMenus()
                        .useSnackbars()
                        .useTabs()
                        .useToolbars();
                };
                ConfigBuilder.prototype.useButtons = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./button/button'));
                    return this;
                };
                ConfigBuilder.prototype.useFab = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./button/fab/fab'));
                    return this;
                };
                ConfigBuilder.prototype.useIconToggle = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./button/icon-toggle/icon-toggle'));
                    return this;
                };
                ConfigBuilder.prototype.useCards = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./card/card-actions'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./card/card-horizontal'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./card/card-media'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./card/card-text'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./card/card-title'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./card/card'));
                    return this;
                };
                ConfigBuilder.prototype.useDialogs = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./dialog/dialog'));
                    return this;
                };
                ConfigBuilder.prototype.usePermanentDrawer = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./drawer/permanent'));
                    this.addDrawerAddons();
                    return this;
                };
                ConfigBuilder.prototype.usePersistentDrawer = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./drawer/persistent'));
                    this.addDrawerAddons();
                    return this;
                };
                ConfigBuilder.prototype.useTemporaryDrawer = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./drawer/temporary'));
                    this.addDrawerAddons();
                    return this;
                };
                ConfigBuilder.prototype.useGridLists = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./grid-list/grid-list'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./grid-list/grid-tile'));
                    return this;
                };
                ConfigBuilder.prototype.useCheckboxes = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./inputs/checkbox/checkbox'));
                    return this;
                };
                ConfigBuilder.prototype.useRadioButtons = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./inputs/radio/radio'));
                    return this;
                };
                ConfigBuilder.prototype.useSelectMenus = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./inputs/select/select'));
                    return this;
                };
                ConfigBuilder.prototype.useSelectMenusCss = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./inputs/select/select-css'));
                    return this;
                };
                ConfigBuilder.prototype.useSliders = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./inputs/slider/slider'));
                    return this;
                };
                ConfigBuilder.prototype.useSwitches = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./inputs/switch/switch'));
                    return this;
                };
                ConfigBuilder.prototype.useTextFields = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./inputs/textfield/textfield'));
                    return this;
                };
                ConfigBuilder.prototype.useLayoutGrids = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./grid/mdc-grid-inner.html'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./grid/grid-cell'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./grid/grid'));
                    return this;
                };
                ConfigBuilder.prototype.useLinearProgress = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./progress/linear'));
                    return this;
                };
                ConfigBuilder.prototype.useLists = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./list/mdc-list-group.html'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./list/mdc-list-group-header.html'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./list/list-divider'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./list/list-item'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./list/list'));
                    return this;
                };
                ConfigBuilder.prototype.useMenus = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./menu/simple-menu'));
                    return this;
                };
                ConfigBuilder.prototype.useRipples = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./ripple/ripple'));
                    return this;
                };
                ConfigBuilder.prototype.useSnackbars = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./snackbar/snackbar'));
                    return this;
                };
                ConfigBuilder.prototype.useTabs = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./tab/tab-bar-scroller'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./tab/tab-bar'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./tab/tab'));
                    return this;
                };
                ConfigBuilder.prototype.useToolbars = function () {
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./toolbar/toolbar-row'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./toolbar/toolbar-section'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./toolbar/toolbar-title'));
                    this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./toolbar/toolbar'));
                    return this;
                };
                ConfigBuilder.prototype.withoutGlobalResources = function () {
                    this.useGlobalResources = false;
                    return this;
                };
                ConfigBuilder.prototype.addDrawerAddons = function () {
                    if (this.globalResources.indexOf(aurelia_pal_1.PLATFORM.moduleName('./drawer/header')) === -1) {
                        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./drawer/header'));
                        this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./drawer/spacer'));
                    }
                };
                return ConfigBuilder;
            }());
            exports_1("ConfigBuilder", ConfigBuilder);
        }
    };
});
