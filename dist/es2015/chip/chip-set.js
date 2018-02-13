import { MDCChipSet } from '@material/chips';
import { getLogger } from 'aurelia-logging';
export class MdcChipSet {
    constructor(element) {
        this.element = element;
        this.log = getLogger('mdc-chip-set');
    }
    bind() { }
    unbind() { }
    attached() {
        this.mdcElement = new MDCChipSet(this.chipSetElement);
    }
    detached() {
        if (this.mdcElement) {
            this.mdcElement.destroy();
        }
    }
}
