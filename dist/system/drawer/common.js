System.register(["../util"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function isPermanentDrawer(element) {
        return isClassPresent(element, 'mdc-permanent-drawer');
    }
    exports_1("isPermanentDrawer", isPermanentDrawer);
    function isPersistentDrawer(element) {
        return isClassPresent(element, 'mdc-persistent-drawer__drawer');
    }
    exports_1("isPersistentDrawer", isPersistentDrawer);
    function isTemporaryDrawer(element) {
        return isClassPresent(element, 'mdc-temporary-drawer__drawer');
    }
    exports_1("isTemporaryDrawer", isTemporaryDrawer);
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
