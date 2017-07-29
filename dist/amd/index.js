define(["require", "exports", "./config-builder", "./config-builder", "./button/button", "./button/fab/fab", "./button/icon-toggle/icon-toggle", "./card/card-actions", "./card/card-horizontal", "./card/card-media", "./card/card-text", "./card/card-title", "./card/card", "./dialog/dialog", "./drawer/header", "./drawer/permanent", "./drawer/persistent", "./drawer/spacer", "./drawer/temporary", "./grid/grid-cell", "./grid/grid", "./grid-list/grid-list", "./grid-list/grid-tile", "./inputs/checkbox/checkbox", "./inputs/radio/radio", "./inputs/select/select", "./inputs/select/select-css", "./inputs/slider/slider", "./inputs/switch/switch", "./inputs/textfield/textfield", "./list/list-divider", "./list/list-item", "./list/list", "./menu/simple-menu", "./progress/linear", "./ripple/ripple", "./snackbar/snackbar", "./tab/tab-bar-scroller", "./tab/tab-bar", "./tab/tab", "./toolbar/toolbar-row", "./toolbar/toolbar-section", "./toolbar/toolbar-title", "./toolbar/toolbar"], function (require, exports, config_builder_1, config_builder_2, button_1, fab_1, icon_toggle_1, card_actions_1, card_horizontal_1, card_media_1, card_text_1, card_title_1, card_1, dialog_1, header_1, permanent_1, persistent_1, spacer_1, temporary_1, grid_cell_1, grid_1, grid_list_1, grid_tile_1, checkbox_1, radio_1, select_1, select_css_1, slider_1, switch_1, textfield_1, list_divider_1, list_item_1, list_1, simple_menu_1, linear_1, ripple_1, snackbar_1, tab_bar_scroller_1, tab_bar_1, tab_1, toolbar_row_1, toolbar_section_1, toolbar_title_1, toolbar_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia, configCallback) {
        var builder = aurelia.container.get(config_builder_1.ConfigBuilder);
        if (configCallback !== undefined && typeof (configCallback) === 'function') {
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
    __export(config_builder_2);
    __export(button_1);
    __export(fab_1);
    __export(icon_toggle_1);
    __export(card_actions_1);
    __export(card_horizontal_1);
    __export(card_media_1);
    __export(card_text_1);
    __export(card_title_1);
    __export(card_1);
    __export(dialog_1);
    __export(header_1);
    __export(permanent_1);
    __export(persistent_1);
    __export(spacer_1);
    __export(temporary_1);
    __export(grid_cell_1);
    __export(grid_1);
    __export(grid_list_1);
    __export(grid_tile_1);
    __export(checkbox_1);
    __export(radio_1);
    __export(select_1);
    __export(select_css_1);
    __export(slider_1);
    __export(switch_1);
    __export(textfield_1);
    __export(list_divider_1);
    __export(list_item_1);
    __export(list_1);
    __export(simple_menu_1);
    __export(linear_1);
    __export(ripple_1);
    __export(snackbar_1);
    __export(tab_bar_scroller_1);
    __export(tab_bar_1);
    __export(tab_1);
    __export(toolbar_row_1);
    __export(toolbar_section_1);
    __export(toolbar_title_1);
    __export(toolbar_1);
});
