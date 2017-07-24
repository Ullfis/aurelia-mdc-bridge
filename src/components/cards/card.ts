import { bindable } from 'aurelia-framework';

export class Cards {
  private image = 'images/16-9.jpeg';
  @bindable() private rtl = false;
  private rtlWrapper: HTMLElement;

  private rtlChanged(newValue) {
    if (newValue === true || newValue === 'true') {
      this.rtlWrapper.setAttribute('dir', 'rtl');
    } else {
      this.rtlWrapper.removeAttribute('dir');
    }
  }
}
