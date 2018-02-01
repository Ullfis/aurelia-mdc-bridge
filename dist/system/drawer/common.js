System.register(["../util"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function isDrawer(element) {
        return isClassPresent(element, 'mdc-drawer__drawer') ||
            isClassPresent(element, 'mdc-drawer--permanent');
    }
    exports_1("isDrawer", isDrawer);
    function isClassPresent(parent, className) {
        if (parent) {
            var elementFound = util.findAncestor(parent, className, 5);
            if (elementFound) {
                return true;
            }
        }
        return false;
    }
    var util;
    return {
        setters: [
            function (util_1) {
                util = util_1;
            }
        ],
        execute: function () {
        }
    };
});
