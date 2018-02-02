export class SelectsCss {

  // private elementSelect1: MdcSelect;
  // private disabled = false;
  // private selectValue1 = null;
  // private selectValue2 = 'choose...';

  // private onChange(e: IMdcSelectChangeEvent) {
  //   /** */
  // }
  private products = [
    { id: 0, name: 'Motherboard' },
    { id: 1, name: 'CPU' },
    { id: 2, name: 'Memory' },
  ];

  private selectedProductId = null;
  private selectedProducts = [];

  private addRow() {
    this.products.push({ id: Math.floor(Math.random() * 100), name: 'Random'});
  }
}
