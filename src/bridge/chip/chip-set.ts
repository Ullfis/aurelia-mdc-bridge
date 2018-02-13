import { MDCChipSet } from '@material/chips';
import { getLogger, Logger } from 'aurelia-logging';

export class MdcChipSet {
  private log: Logger;
  private chipSetElement: HTMLDivElement;
  private mdcElement: MDCChipSet;

  constructor(private element: Element) {
    this.log = getLogger('mdc-chip-set');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.mdcElement = new MDCChipSet(this.chipSetElement);
  }

  private detached() {
    if (this.mdcElement) { this.mdcElement.destroy(); }
  }
}
