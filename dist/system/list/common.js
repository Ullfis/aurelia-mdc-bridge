System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function getParentList(element) {
        return findAncestor(element, 'mdc-list');
    }
    exports_1("getParentList", getParentList);
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
    exports_1("findAncestor", findAncestor);
    return {
        setters: [],
        execute: function () {
        }
    };
});
