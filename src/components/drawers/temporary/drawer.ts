import { MdcDrawerTemporary } from '../../../bridge/index';

export class Drawers {
  private mdcDrawer: MdcDrawerTemporary;
  private elementSpan: HTMLSpanElement;
  private open = false;
  private fixed = false;

  private onToggleFixed() {
    this.fixed = !this.fixed;
  }

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
