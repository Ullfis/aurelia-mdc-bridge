"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var config_builder_1 = require("./config-builder");
function configure(aurelia, configCallback) {
    var builder = aurelia.container.get(config_builder_1.ConfigBuilder);
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
exports.configure = configure;
__export(require("./config-builder"));
__export(require("./button/button"));
__export(require("./button/fab/fab"));
__export(require("./button/icon-toggle/icon-toggle"));
__export(require("./card/card-actions"));
__export(require("./card/card-media"));
__export(require("./card/card"));
__export(require("./chip/chip"));
__export(require("./chip/chip-set"));
__export(require("./dialog/dialog"));
__export(require("./drawer/header"));
__export(require("./drawer/permanent"));
__export(require("./drawer/persistent"));
__export(require("./drawer/spacer"));
__export(require("./drawer/temporary"));
__export(require("./grid/grid-cell"));
__export(require("./grid/grid"));
__export(require("./grid-list/grid-list"));
__export(require("./grid-list/grid-tile"));
__export(require("./inputs/checkbox/checkbox"));
__export(require("./inputs/radio/radio"));
__export(require("./inputs/select/select"));
__export(require("./inputs/slider/slider"));
__export(require("./inputs/switch/switch"));
__export(require("./inputs/textfield/textfield"));
__export(require("./list/list-divider"));
__export(require("./list/list-item"));
__export(require("./list/list"));
__export(require("./menu/menu"));
__export(require("./progress/linear"));
__export(require("./ripple/ripple"));
__export(require("./snackbar/snackbar"));
__export(require("./tab/tab-bar-scroller"));
__export(require("./tab/tab-bar"));
__export(require("./tab/tab"));
__export(require("./toolbar/toolbar-row"));
__export(require("./toolbar/toolbar-section"));
__export(require("./toolbar/toolbar-title"));
__export(require("./toolbar/toolbar"));
