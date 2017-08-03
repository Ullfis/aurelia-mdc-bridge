define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function fireEvent(element, event, data) {
        var e = new CustomEvent(event, {
            bubbles: true,
            detail: data
        });
        element.dispatchEvent(e);
        return e;
    }
    exports.fireEvent = fireEvent;
    function getBoolean(value) {
        return (value === true || value === 'true');
    }
    exports.getBoolean = getBoolean;
    function hasProp(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    exports.hasProp = hasProp;
    function findAncestor(el, className, maxSearchLevel) {
        if (maxSearchLevel === void 0) { maxSearchLevel = 6; }
        var counter = 0;
        while (counter < maxSearchLevel) {
            if (!el) {
                return null;
            }
            else if (el.classList.contains(className)) {
                return el;
            }
            el = el.parentElement || null;
            counter++;
        }
        return null;
    }
    exports.findAncestor = findAncestor;
});
