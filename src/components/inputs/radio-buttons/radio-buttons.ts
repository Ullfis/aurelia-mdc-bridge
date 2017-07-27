import { IMdcRadioEvent } from '../../../bridge/index';

export class RadioButtons {
  private radioDisable = false;
  private radioChoise = 'option2';
  private likeCake = null;
  private likeCake2 = null;
  private likeCake3 = null;
  private colors = [
    { name: 'red', hex: '#ff0000' },
    { name: 'green', hex: '#00ff00' },
    { name: 'blue', hex: '#0000ff' }
  ];
  private selectedColor = this.colors[1];
  private eventDetail: {[key: string]: { name: string, value: any }} = {};

  private selectedProduct = { id: 1, name: 'CPU' };
  private productMatcher = (a, b) => a.id === b.id;

  private onChange(event: IMdcRadioEvent) {
    this.eventDetail[event.detail.name] = {
      value: event.detail.value,
      name: event.detail.name
    };
  }
}
