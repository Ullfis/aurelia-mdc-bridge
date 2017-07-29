import { PLATFORM } from 'aurelia-pal';
export class ConfigBuilder {
    constructor() {
        this.globalResources = [];
        this.useGlobalResources = true;
    }
    useAll() {
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
            .useRipples()
            .useSnackbars()
            .useTabs()
            .useToolbars();
    }
    useButtons() {
        this.globalResources.push(PLATFORM.moduleName('./button/button'));
        return this;
    }
    useFab() {
        this.globalResources.push(PLATFORM.moduleName('./button/fab/fab'));
        return this;
    }
    useIconToggle() {
        this.globalResources.push(PLATFORM.moduleName('./button/icon-toggle/icon-toggle'));
        return this;
    }
    useCards() {
        this.globalResources.push(PLATFORM.moduleName('./card/card-actions'));
        this.globalResources.push(PLATFORM.moduleName('./card/card-horizontal'));
        this.globalResources.push(PLATFORM.moduleName('./card/card-media'));
        this.globalResources.push(PLATFORM.moduleName('./card/card-text'));
        this.globalResources.push(PLATFORM.moduleName('./card/card-title'));
        this.globalResources.push(PLATFORM.moduleName('./card/card'));
        return this;
    }
    useDialogs() {
        this.globalResources.push(PLATFORM.moduleName('./dialog/dialog'));
        return this;
    }
    usePermanentDrawer() {
        this.globalResources.push(PLATFORM.moduleName('./drawer/permanent'));
        this.addDrawerAddons();
        return this;
    }
    usePersistentDrawer() {
        this.globalResources.push(PLATFORM.moduleName('./drawer/persistent'));
        this.addDrawerAddons();
        return this;
    }
    useTemporaryDrawer() {
        this.globalResources.push(PLATFORM.moduleName('./drawer/temporary'));
        this.addDrawerAddons();
        return this;
    }
    useGridLists() {
        this.globalResources.push(PLATFORM.moduleName('./grid-list/grid-list'));
        this.globalResources.push(PLATFORM.moduleName('./grid-list/grid-tile'));
        return this;
    }
    useCheckboxes() {
        this.globalResources.push(PLATFORM.moduleName('./inputs/checkbox/checkbox'));
        return this;
    }
    useRadioButtons() {
        this.globalResources.push(PLATFORM.moduleName('./inputs/radio/radio'));
        return this;
    }
    useSelectMenus() {
        this.globalResources.push(PLATFORM.moduleName('./inputs/select/select'));
        return this;
    }
    useSelectMenusCss() {
        this.globalResources.push(PLATFORM.moduleName('./inputs/select/select-css'));
        return this;
    }
    useSliders() {
        this.globalResources.push(PLATFORM.moduleName('./inputs/slider/slider'));
        return this;
    }
    useSwitches() {
        this.globalResources.push(PLATFORM.moduleName('./inputs/switch/switch'));
        return this;
    }
    useTextFields() {
        this.globalResources.push(PLATFORM.moduleName('./inputs/textfield/textfield'));
        return this;
    }
    useLayoutGrids() {
        this.globalResources.push(PLATFORM.moduleName('./grid/mdc-grid-inner.html'));
        this.globalResources.push(PLATFORM.moduleName('./grid/grid-cell'));
        this.globalResources.push(PLATFORM.moduleName('./grid/grid'));
        return this;
    }
    useLinearProgress() {
        this.globalResources.push(PLATFORM.moduleName('./progress/linear'));
        return this;
    }
    useLists() {
        this.globalResources.push(PLATFORM.moduleName('./list/mdc-list-group.html'));
        this.globalResources.push(PLATFORM.moduleName('./list/mdc-list-group-header.html'));
        this.globalResources.push(PLATFORM.moduleName('./list/list-divider'));
        this.globalResources.push(PLATFORM.moduleName('./list/list-item'));
        this.globalResources.push(PLATFORM.moduleName('./list/list'));
        return this;
    }
    useMenus() {
        this.globalResources.push(PLATFORM.moduleName('./menu/simple-menu'));
        return this;
    }
    useRipples() {
        this.globalResources.push(PLATFORM.moduleName('./ripple/ripple'));
        return this;
    }
    useSnackbars() {
        this.globalResources.push(PLATFORM.moduleName('./snackbar/snackbar'));
        return this;
    }
    useTabs() {
        this.globalResources.push(PLATFORM.moduleName('./tab/tab-bar-scroller'));
        this.globalResources.push(PLATFORM.moduleName('./tab/tab-bar'));
        this.globalResources.push(PLATFORM.moduleName('./tab/tab'));
        return this;
    }
    useToolbars() {
        this.globalResources.push(PLATFORM.moduleName('./toolbar/toolbar-row'));
        this.globalResources.push(PLATFORM.moduleName('./toolbar/toolbar-section'));
        this.globalResources.push(PLATFORM.moduleName('./toolbar/toolbar-title'));
        this.globalResources.push(PLATFORM.moduleName('./toolbar/toolbar'));
        return this;
    }
    withoutGlobalResources() {
        this.useGlobalResources = false;
        return this;
    }
    addDrawerAddons() {
        if (this.globalResources.indexOf(PLATFORM.moduleName('./drawer/header')) === -1) {
            this.globalResources.push(PLATFORM.moduleName('./drawer/header'));
            this.globalResources.push(PLATFORM.moduleName('./drawer/spacer'));
        }
    }
}
