System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function fireEvent(element, event, data) {
        var e = new CustomEvent(event, {
            bubbles: true,
            detail: data
        });
        element.dispatchEvent(e);
        return e;
    }
    exports_1("fireEvent", fireEvent);
    function getBoolean(value) {
        return (value === true || value === 'true');
    }
    exports_1("getBoolean", getBoolean);
    function hasProp(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    exports_1("hasProp", hasProp);
    return {
        setters: [],
        execute: function () {
        }
    };
});
