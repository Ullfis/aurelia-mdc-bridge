import { FrameworkConfiguration } from 'aurelia-framework';

export function configure(frameworkConfig: FrameworkConfiguration): void {
  frameworkConfig.globalResources([
    './button/button',
    './button/fab/fab',
    './button/icon-toggle/icon-toggle',
    './card/card-actions',
    './card/card-horizontal',
    './card/card-media',
    './card/card-text',
    './card/card-title',
    './card/card',
    './dialog/dialog',
    './drawer/header',
    './drawer/permanent',
    './drawer/persistent',
    './drawer/spacer',
    './drawer/temporary',
    './grid/mdc-grid-inner.html',
    './grid/grid-cell',
    './grid/grid',
    './grid-list/grid-list',
    './grid-list/grid-tile',
    './inputs/checkbox/checkbox',
    './inputs/radio/radio',
    './inputs/select/select-css',
    './inputs/select/select',
    './inputs/slider/slider',
    './inputs/switch/switch',
    './inputs/textfield/textfield',
    './list/mdc-list-group.html',
    './list/mdc-list-group-header.html',
    './list/list-divider',
    './list/list-item',
    './list/list',
    './menu/simple-menu',
    './progress/linear',
    './ripple/ripple',
    './snackbar/snackbar',
    './tab/tab-bar-scroller',
    './tab/tab-bar',
    './tab/tab',
    './toolbar/toolbar-row',
    './toolbar/toolbar-section',
    './toolbar/toolbar-title',
    './toolbar/toolbar'
  ]);
}

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
