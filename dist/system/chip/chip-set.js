System.register(["@material/chips", "aurelia-logging"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var chips_1, aurelia_logging_1, MdcChipSet;
    return {
        setters: [
            function (chips_1_1) {
                chips_1 = chips_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            }
        ],
        execute: function () {
            MdcChipSet = (function () {
                function MdcChipSet(element) {
                    this.element = element;
                    this.log = aurelia_logging_1.getLogger('mdc-chip-set');
                }
                MdcChipSet.prototype.bind = function () { };
                MdcChipSet.prototype.unbind = function () { };
                MdcChipSet.prototype.attached = function () {
                    this.mdcElement = new chips_1.MDCChipSet(this.chipSetElement);
                };
                MdcChipSet.prototype.detached = function () {
                    if (this.mdcElement) {
                        this.mdcElement.destroy();
                    }
                };
                return MdcChipSet;
            }());
            exports_1("MdcChipSet", MdcChipSet);
        }
    };
});
