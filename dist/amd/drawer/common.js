define(["require", "exports", "../util"], function (require, exports, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isDrawer(element) {
        return isClassPresent(element, 'mdc-drawer__drawer') ||
            isClassPresent(element, 'mdc-drawer--permanent');
    }
    exports.isDrawer = isDrawer;
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
