import { MdcDialog, IMdcDialogClickEvent } from '../../bridge/index';
export class Dialog {
  private eventCounter = 0;
  private dialog: MdcDialog;
  private dialog2: MdcDialog;
  private acceptClicked1: boolean;
  private acceptClicked2: boolean;
  private onDialogClick1(event: IMdcDialogClickEvent) {
    this.acceptClicked1 = event.detail;
    this.eventCounter++;
  }
  private onDialogClick2(event: IMdcDialogClickEvent) {
    this.acceptClicked2 = event.detail;
    this.eventCounter++;
  }
  private showDialog() {
    this.dialog.show(true);
  }
  private showDialog2() {
    this.dialog2.show(true);
  }
}
