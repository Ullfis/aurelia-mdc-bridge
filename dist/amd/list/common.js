define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getParentList(element) {
        return findAncestor(element, 'mdc-list');
    }
    exports.getParentList = getParentList;
    function findAncestor(el, cls, maxLevel) {
        if (maxLevel === void 0) { maxLevel = 5; }
        var counter = 0;
        while (counter < maxLevel) {
            el = el.parentElement || null;
            if (!el) {
                return null;
            }
            else if (el.classList.contains(cls)) {
                return el;
            }
            counter++;
        }
        return null;
    }
    exports.findAncestor = findAncestor;
});
