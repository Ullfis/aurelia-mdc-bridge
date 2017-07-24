import { MdcDrawerPersistent } from '../../../bridge/index';

export class Drawers {
  private mdcDrawer: MdcDrawerPersistent;
  private elementSpan: HTMLSpanElement;
  private open = true;

  private onClick() {
    this.open = !this.open;
  }

  private onOpen() {
    this.elementSpan.innerText = 'OPEN event fired';
  }

  private onClose() {
    this.elementSpan.innerText = 'CLOSE event fired';
  }
}
