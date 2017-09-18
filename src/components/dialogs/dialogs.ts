import { TaskQueue, autoinject } from 'aurelia-framework';
import { MdcDialog, IMdcDialogClickEvent, MdcTextfield } from '../../bridge/index';

@autoinject()
export class Dialogs {
  private eventCounter = 0;
  private dialog: MdcDialog;
  private dialog2: MdcDialog;
  private dialog3: MdcDialog;
  private dialog4: MdcDialog;
  private dialog5: MdcDialog;
  private dialog6: MdcDialog;
  private acceptClicked1: boolean;
  private acceptClicked2: boolean;
  private openCloseStatus3 = '';
  private focusMeElement: MdcTextfield;
  private accessPermission = null;
  private dialog6Counter = 3;

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
  private showDialog5() {
    this.accessPermission = null;
    this.dialog5.show(true);
  }
  private showDialog6() {
    this.dialog6.foundation.accept = this.onAccept.bind(this);
    this.dialog6Counter = 3;
    this.dialog6.show(true);
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

  private onAccept() {
    this.dialog6.acceptDisabled = true;
    const intervalId = setInterval(() => {
      if (--this.dialog6Counter <= 0) {
        this.dialog6.acceptDisabled = false;
        this.dialog6.show(false);
        clearInterval(intervalId);
      }
    }, 1000);
  }
}
