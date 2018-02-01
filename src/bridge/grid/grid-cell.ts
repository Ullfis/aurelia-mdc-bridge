import { inject, bindable, bindingMode, customElement, containerless } from 'aurelia-framework';

export interface IMdcGridCellAlign {
  'top': string;
  'middle': string;
  'bottom': string;
}
export type IMdcGridCellNumber = 1|2|3|4|5|6|7|8|9|10|11|12;

@containerless()
@customElement('mdc-grid-cell')
export class MdcGridCell {
  @bindable() public class: string;
  @bindable({ defaultBindingMode: bindingMode.toView }) public span: IMdcGridCellNumber = null;
  @bindable({ defaultBindingMode: bindingMode.toView }) public spanDesktop: IMdcGridCellNumber = null;
  @bindable({ defaultBindingMode: bindingMode.toView }) public spanTablet: IMdcGridCellNumber = null;
  @bindable({ defaultBindingMode: bindingMode.toView }) public spanPhone: IMdcGridCellNumber = null;
  @bindable({ defaultBindingMode: bindingMode.toView }) public order: IMdcGridCellNumber = null;
  @bindable({ defaultBindingMode: bindingMode.toView }) public align: keyof IMdcGridCellAlign = null;
}
