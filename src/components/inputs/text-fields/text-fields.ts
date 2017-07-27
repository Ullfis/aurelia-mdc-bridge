export class TextFields {
  private mValue = 'Hello world!';
  private mDisabled = false;
  private mDense = false;
  private mRequired = false;
  private mHelptext = 'Help text';
  private mHelptextShow = false;
  private mHelptextPersistent = false;
  private mHelptextValidation = false;
  private mMultiline = false;
  private mBox = false;
  private mPassword = '';
  private numericText = 9;

  private colorValue = '#4459a0';
  private timeValue = new Date().toISOString().substr(11, 5);
  private monthValue = new Date().toISOString().substr(0, 7);
  private weekValue = new Date().toISOString().substr(0, 5) + 'W' + this.getWeek();
  private dateValue = new Date().toISOString().substr(0, 10);
  private datetimeLocalValue = new Date().toISOString().substr(0, 16);

  private getWeek(): number {
    const date = new Date();
    date.setHours(0, 0, 0, 0);

    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);

    const week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
      - 3 + (week1.getDay() + 6) % 7) / 7);
  }
}
