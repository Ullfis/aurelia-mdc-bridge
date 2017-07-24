import { IMdcSwitchEvent } from '../../../bridge/index';

export class Switches {
  private switchDisable = false;
  private switch1 = false;
  private switch2 = true;
  private switch3 = false;
  private switch4 = false;

  private eventCounter = 0;
  private isChecked: boolean;

  private onChange(event: IMdcSwitchEvent) {
    this.isChecked = event.detail;
    this.eventCounter++;
  }
}
