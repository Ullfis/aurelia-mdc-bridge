import { IMdcSelectChangeEvent } from '../../../bridge/index';

export class Selects {
  private labelText = 'Label text';

  private products = [
    { id: 0, name: 'WiFi', icon: 'network_wifi' },
    { id: 1, name: 'Bluetooth', icon: 'bluetooth' },
    { id: 2, name: 'USB', icon: 'usb' },
  ];

  private selectedProductId = 1;

  private addRow() {
    this.products.push({ id: Math.floor(Math.random() * 100), name: 'Random', icon: 'star' });
  }

  private onChange(e: IMdcSelectChangeEvent) {
    /** */
  }
}
