import { MDCChipSet } from '@material/chips';
import { getLogger } from 'aurelia-logging';
var MdcChipSet = (function () {
    function MdcChipSet(element) {
        this.element = element;
        this.log = getLogger('mdc-chip-set');
    }
    MdcChipSet.prototype.bind = function () { };
    MdcChipSet.prototype.unbind = function () { };
    MdcChipSet.prototype.attached = function () {
        this.mdcElement = new MDCChipSet(this.chipSetElement);
    };
    MdcChipSet.prototype.detached = function () {
        if (this.mdcElement) {
            this.mdcElement.destroy();
        }
    };
    return MdcChipSet;
}());
export { MdcChipSet };
