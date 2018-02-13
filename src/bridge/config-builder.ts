import { PLATFORM } from 'aurelia-pal';

/**
 * Plugin configuration builder
 * (inspiration: aurelia-materialize-bridge)
 */
export class ConfigBuilder {

  public globalResources = [];
  public useGlobalResources: boolean = true;

  public useAll(): ConfigBuilder {
    return this
      .useButtons()
      .useFab()
      .useIconToggle()
      .useCards()
      .useChips()
      .useDialogs()
      .usePermanentDrawer()
      .usePersistentDrawer()
      .useTemporaryDrawer()
      .useGridLists()
      .useCheckboxes()
      .useRadioButtons()
      .useSelectMenus()
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

  public useButtons(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./button/button'));
    return this;
  }
  public useFab(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./button/fab/fab'));
    return this;
  }
  public useIconToggle(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./button/icon-toggle/icon-toggle'));
    return this;
  }
  public useCards(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./card/card-actions'));
    this.globalResources.push(PLATFORM.moduleName('./card/card-media'));
    this.globalResources.push(PLATFORM.moduleName('./card/card'));
    return this;
  }
  public useChips(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./chip/chip-set'));
    this.globalResources.push(PLATFORM.moduleName('./chip/chip'));
    return this;
  }
  public useDialogs(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./dialog/dialog'));
    return this;
  }
  public usePermanentDrawer(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./drawer/permanent'));
    this.addDrawerAddons();
    return this;
  }
  public usePersistentDrawer(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./drawer/persistent'));
    this.addDrawerAddons();
    return this;
  }
  public useTemporaryDrawer(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./drawer/temporary'));
    this.addDrawerAddons();
    return this;
  }
  public useGridLists(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./grid-list/grid-list'));
    this.globalResources.push(PLATFORM.moduleName('./grid-list/grid-tile'));
    return this;
  }
  public useCheckboxes(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./inputs/checkbox/checkbox'));
    return this;
  }
  public useRadioButtons(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./inputs/radio/radio'));
    return this;
  }
  public useSelectMenus(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./inputs/select/select'));
    return this;
  }
  public useSliders(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./inputs/slider/slider'));
    return this;
  }
  public useSwitches(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./inputs/switch/switch'));
    return this;
  }
  public useTextFields(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./inputs/textfield/textfield'));
    return this;
  }
  public useLayoutGrids(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./grid/mdc-grid-inner.html'));
    this.globalResources.push(PLATFORM.moduleName('./grid/grid-cell'));
    this.globalResources.push(PLATFORM.moduleName('./grid/grid'));
    return this;
  }
  public useLinearProgress(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./progress/linear'));
    return this;
  }
  public useLists(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./list/mdc-list-group.html'));
    this.globalResources.push(PLATFORM.moduleName('./list/mdc-list-group-header.html'));
    this.globalResources.push(PLATFORM.moduleName('./list/list-divider'));
    this.globalResources.push(PLATFORM.moduleName('./list/list-item'));
    this.globalResources.push(PLATFORM.moduleName('./list/list'));
    return this;
  }
  public useMenus(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./menu/menu'));
    return this;
  }
  public useRipples(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./ripple/ripple'));
    return this;
  }
  public useSnackbars(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./snackbar/snackbar'));
    return this;
  }
  public useTabs(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./tab/tab-bar-scroller'));
    this.globalResources.push(PLATFORM.moduleName('./tab/tab-bar'));
    this.globalResources.push(PLATFORM.moduleName('./tab/tab'));
    return this;
  }
  public useToolbars(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./toolbar/toolbar-row'));
    this.globalResources.push(PLATFORM.moduleName('./toolbar/toolbar-section'));
    this.globalResources.push(PLATFORM.moduleName('./toolbar/toolbar-title'));
    this.globalResources.push(PLATFORM.moduleName('./toolbar/toolbar'));
    return this;
  }

  /**
   * Don't globalize any resources
   * Allows you to import yourself via <require></require>
   */
  public withoutGlobalResources(): ConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }

  private addDrawerAddons() {
    if (this.globalResources.indexOf(PLATFORM.moduleName('./drawer/header')) === -1) {
      this.globalResources.push(PLATFORM.moduleName('./drawer/header'));
      this.globalResources.push(PLATFORM.moduleName('./drawer/spacer'));
    }
  }
}
