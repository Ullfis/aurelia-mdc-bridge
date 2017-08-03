import { bindable, customElement } from 'aurelia-framework';
import * as util from '../util';

@customElement('mdc-card-title')
export class MdcCardTitle {
  @bindable() public class: string;
  @bindable() public title: string;
  @bindable() public subtitle: string;
  @bindable() public large = true;
  private showTitle = true;
  private showSubtitle = true;
  private showLarge = true;
  private elementPrimary: HTMLElement;
  private isAvatar;

  private attached() {
    if (!this.isAvatar) {
      const avatarElement = this.elementPrimary.firstChild as HTMLElement;
      if (avatarElement) {
        avatarElement.style.position = 'absolute';
      }
      this.elementPrimary.classList.add('mdc-mdc-card-avatar');
    }
    this.titleChanged(this.title);
    this.subtitleChanged(this.subtitle);
    this.largeChanged(this.large);
  }
  private titleChanged(newValue: string) {
    this.showTitle = false;
    this.showTitle = (newValue && newValue.length > 0);
  }
  private subtitleChanged(newValue: string) {
    this.showSubtitle = false;
    this.showSubtitle = (newValue && newValue.length > 0);
  }
  private largeChanged(newValue: boolean) {
    this.showLarge = util.getBoolean(newValue);
  }
}
