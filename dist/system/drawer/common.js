System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function isPermanentDrawer(element) {
        return isClassPresent(element.parentElement, 'mdc-permanent-drawer');
    }
    exports_1("isPermanentDrawer", isPermanentDrawer);
    function isPersistentDrawer(element) {
        return isClassPresent(element.parentElement, 'mdc-persistent-drawer__drawer');
    }
    exports_1("isPersistentDrawer", isPersistentDrawer);
    function isTemporaryDrawer(element) {
        return isClassPresent(element.parentElement, 'mdc-temporary-drawer__drawer');
    }
    exports_1("isTemporaryDrawer", isTemporaryDrawer);
    function isClassPresent(parent, className) {
        if (parent) {
            if (parent.classList.contains(className)) {
                return true;
            }
            if (parent.parentElement && parent.parentElement.classList.contains(className)) {
                return true;
            }
        }
        return false;
    }
    return {
        setters: [],
        execute: function () {
        }
    };
});
