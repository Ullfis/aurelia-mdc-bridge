import { ConfigBuilder } from './config-builder';
export function configure(aurelia, configCallback) {
    var builder = aurelia.container.get(ConfigBuilder);
    if (configCallback instanceof Function) {
        configCallback(builder);
    }
    else {
        builder.useAll();
    }
    if (builder.useGlobalResources) {
        aurelia.globalResources(builder.globalResources);
    }
}
export * from './config-builder';
export * from './button/button';
export * from './button/fab/fab';
export * from './button/icon-toggle/icon-toggle';
export * from './card/card-actions';
export * from './card/card-horizontal';
export * from './card/card-media';
export * from './card/card-text';
export * from './card/card-title';
export * from './card/card';
export * from './dialog/dialog';
export * from './drawer/header';
export * from './drawer/permanent';
export * from './drawer/persistent';
export * from './drawer/spacer';
export * from './drawer/temporary';
export * from './grid/grid-cell';
export * from './grid/grid';
export * from './grid-list/grid-list';
export * from './grid-list/grid-tile';
export * from './inputs/checkbox/checkbox';
export * from './inputs/radio/radio';
export * from './inputs/select/select';
export * from './inputs/select/select-css';
export * from './inputs/slider/slider';
export * from './inputs/switch/switch';
export * from './inputs/textfield/textfield';
export * from './list/list-divider';
export * from './list/list-item';
export * from './list/list';
export * from './menu/simple-menu';
export * from './progress/linear';
export * from './ripple/ripple';
export * from './snackbar/snackbar';
export * from './tab/tab-bar-scroller';
export * from './tab/tab-bar';
export * from './tab/tab';
export * from './toolbar/toolbar-row';
export * from './toolbar/toolbar-section';
export * from './toolbar/toolbar-title';
export * from './toolbar/toolbar';
