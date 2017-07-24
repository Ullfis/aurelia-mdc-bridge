define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function isPermanentDrawer(element) {
        return isClassPresent(element.parentElement, 'mdc-permanent-drawer');
    }
    exports.isPermanentDrawer = isPermanentDrawer;
    function isPersistentDrawer(element) {
        return isClassPresent(element.parentElement, 'mdc-persistent-drawer__drawer');
    }
    exports.isPersistentDrawer = isPersistentDrawer;
    function isTemporaryDrawer(element) {
        return isClassPresent(element.parentElement, 'mdc-temporary-drawer__drawer');
    }
    exports.isTemporaryDrawer = isTemporaryDrawer;
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
});
