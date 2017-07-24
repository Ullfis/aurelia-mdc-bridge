System.register(["./button/button", "./button/fab/fab", "./button/icon-toggle/icon-toggle", "./card/card-actions", "./card/card-horizontal", "./card/card-media", "./card/card-text", "./card/card-title", "./card/card", "./dialog/dialog", "./drawer/header", "./drawer/permanent", "./drawer/persistent", "./drawer/spacer", "./drawer/temporary", "./grid/grid-cell", "./grid/grid", "./grid-list/grid-list", "./grid-list/grid-tile", "./inputs/checkbox/checkbox", "./inputs/radio/radio", "./inputs/select/select", "./inputs/select/select-css", "./inputs/slider/slider", "./inputs/switch/switch", "./inputs/textfield/textfield", "./list/list-divider", "./list/list-item", "./list/list", "./menu/simple-menu", "./progress/linear", "./ripple/ripple", "./snackbar/snackbar", "./tab/tab-bar-scroller", "./tab/tab-bar", "./tab/tab", "./toolbar/toolbar-row", "./toolbar/toolbar-section", "./toolbar/toolbar-title", "./toolbar/toolbar"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(frameworkConfig) {
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
    exports_1("configure", configure);
    var exportedNames_1 = {
        "configure": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (button_1_1) {
                exportStar_1(button_1_1);
            },
            function (fab_1_1) {
                exportStar_1(fab_1_1);
            },
            function (icon_toggle_1_1) {
                exportStar_1(icon_toggle_1_1);
            },
            function (card_actions_1_1) {
                exportStar_1(card_actions_1_1);
            },
            function (card_horizontal_1_1) {
                exportStar_1(card_horizontal_1_1);
            },
            function (card_media_1_1) {
                exportStar_1(card_media_1_1);
            },
            function (card_text_1_1) {
                exportStar_1(card_text_1_1);
            },
            function (card_title_1_1) {
                exportStar_1(card_title_1_1);
            },
            function (card_1_1) {
                exportStar_1(card_1_1);
            },
            function (dialog_1_1) {
                exportStar_1(dialog_1_1);
            },
            function (header_1_1) {
                exportStar_1(header_1_1);
            },
            function (permanent_1_1) {
                exportStar_1(permanent_1_1);
            },
            function (persistent_1_1) {
                exportStar_1(persistent_1_1);
            },
            function (spacer_1_1) {
                exportStar_1(spacer_1_1);
            },
            function (temporary_1_1) {
                exportStar_1(temporary_1_1);
            },
            function (grid_cell_1_1) {
                exportStar_1(grid_cell_1_1);
            },
            function (grid_1_1) {
                exportStar_1(grid_1_1);
            },
            function (grid_list_1_1) {
                exportStar_1(grid_list_1_1);
            },
            function (grid_tile_1_1) {
                exportStar_1(grid_tile_1_1);
            },
            function (checkbox_1_1) {
                exportStar_1(checkbox_1_1);
            },
            function (radio_1_1) {
                exportStar_1(radio_1_1);
            },
            function (select_1_1) {
                exportStar_1(select_1_1);
            },
            function (select_css_1_1) {
                exportStar_1(select_css_1_1);
            },
            function (slider_1_1) {
                exportStar_1(slider_1_1);
            },
            function (switch_1_1) {
                exportStar_1(switch_1_1);
            },
            function (textfield_1_1) {
                exportStar_1(textfield_1_1);
            },
            function (list_divider_1_1) {
                exportStar_1(list_divider_1_1);
            },
            function (list_item_1_1) {
                exportStar_1(list_item_1_1);
            },
            function (list_1_1) {
                exportStar_1(list_1_1);
            },
            function (simple_menu_1_1) {
                exportStar_1(simple_menu_1_1);
            },
            function (linear_1_1) {
                exportStar_1(linear_1_1);
            },
            function (ripple_1_1) {
                exportStar_1(ripple_1_1);
            },
            function (snackbar_1_1) {
                exportStar_1(snackbar_1_1);
            },
            function (tab_bar_scroller_1_1) {
                exportStar_1(tab_bar_scroller_1_1);
            },
            function (tab_bar_1_1) {
                exportStar_1(tab_bar_1_1);
            },
            function (tab_1_1) {
                exportStar_1(tab_1_1);
            },
            function (toolbar_row_1_1) {
                exportStar_1(toolbar_row_1_1);
            },
            function (toolbar_section_1_1) {
                exportStar_1(toolbar_section_1_1);
            },
            function (toolbar_title_1_1) {
                exportStar_1(toolbar_title_1_1);
            },
            function (toolbar_1_1) {
                exportStar_1(toolbar_1_1);
            }
        ],
        execute: function () {
        }
    };
});
