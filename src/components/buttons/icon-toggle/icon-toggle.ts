import { IMdcIconToggleEvent } from '../../../bridge/index';

export class IconToggle {
  private primary = false;
  private accent = false;
  private on = true;

  private iconValue;

  private onToggle(event: IMdcIconToggleEvent) {
    this.iconValue = event.detail;
  }
}
