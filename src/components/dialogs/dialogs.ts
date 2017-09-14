import { TaskQueue, autoinject } from 'aurelia-framework';
import { MdcDialog, IMdcDialogClickEvent, MdcTextfield } from '../../bridge/index';

@autoinject()
export class Dialogs {
  private eventCounter = 0;
  private dialog: MdcDialog;
  private dialog2: MdcDialog;
  private dialog3: MdcDialog;
  private dialog4: MdcDialog;
  private acceptClicked1: boolean;
  private acceptClicked2: boolean;
  private openCloseStatus3 = '';
  private focusMeElement: MdcTextfield;

  constructor(private taskQueue: TaskQueue) {}

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
  private showDialog3() {
    this.dialog3.show(true);
  }
  private showDialog4() {
    this.dialog4.show(true);
  }
  private onOpened3() {
    this.openCloseStatus3 = 'opened event fired';
    this.taskQueue.queueTask(() => {
      this.focusMeElement.focus();
    });
  }
  private onClosed3() {
    this.openCloseStatus3 = 'closed event fired';
  }
}
