define(["require", "exports", "../util"], function (require, exports, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isPermanentDrawer(element) {
        return isClassPresent(element, 'mdc-permanent-drawer');
    }
    exports.isPermanentDrawer = isPermanentDrawer;
    function isPersistentDrawer(element) {
        return isClassPresent(element, 'mdc-persistent-drawer__drawer');
    }
    exports.isPersistentDrawer = isPersistentDrawer;
    function isTemporaryDrawer(element) {
        return isClassPresent(element, 'mdc-temporary-drawer__drawer');
    }
    exports.isTemporaryDrawer = isTemporaryDrawer;
    function isClassPresent(parent, className) {
        if (parent) {
            var elementFound = util.findAncestor(parent, className, 5);
            if (elementFound) {
                return true;
            }
        }
        return false;
    }
});
