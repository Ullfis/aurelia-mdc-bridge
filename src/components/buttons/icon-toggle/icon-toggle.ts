import { IMdcIconToggleEvent } from '../../../bridge/index';

export class IconToggle {
  private on = true;

  private iconValue;

  private onToggle(event: IMdcIconToggleEvent) {
    this.iconValue = event.detail;
  }
}
