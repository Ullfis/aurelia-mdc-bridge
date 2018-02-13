import { bindable } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MdcTextField } from '../../../bridge/index';

export class TextFields {
  @bindable() private mValid = true;
  private mValue = 'Hello world!';
  private mDisabled = false;
  private mDense = false;
  private mOutlined = false;
  private mRequired = false;
  private mHelptext = 'Help text';
  private mHelptextShow = false;
  private mHelptextPersistent = false;
  private mHelptextValidation = false;
  private mMultiline = false;
  private mBox = false;
  private mPassword = '';
  private numericText = 9;
  private reportElement;
  private demoTextfieldElement: MdcTextField;
  private demoTextfieldElement2: MdcTextField;

  private mFocused = true;

  private colorValue = '#4459a0';
  private timeValue = new Date().toISOString().substr(11, 5);
  private monthValue = new Date().toISOString().substr(0, 7);
  private weekValue = new Date().toISOString().substr(0, 5) + 'W' + this.getWeek();
  private dateValue = new Date().toISOString().substr(0, 10);
  private datetimeLocalValue = new Date().toISOString().substr(0, 16);

  private log: Logger;
  constructor(private element: Element) {
    this.log = getLogger('Textfields');
  }

  private onEvent(name, event = null) {
    this.reportElement.add(name);
    return true;
  }

  private onClick() {
    this.log.debug('test:', this.demoTextfieldElement.getNativeInput().value);
  }

  private getWeek(): number {
    const date = new Date();
    date.setHours(0, 0, 0, 0);

    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);

    const week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
      - 3 + (week1.getDay() + 6) % 7) / 7);
  }

  private mValidChanged(newValue) {
    this.demoTextfieldElement.valid = newValue;
    this.demoTextfieldElement2.valid = newValue;
  }
}
