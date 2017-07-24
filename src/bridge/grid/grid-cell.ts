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
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public span: IMdcGridCellNumber = null;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public spanDesktop: IMdcGridCellNumber = null;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public spanTablet: IMdcGridCellNumber = null;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public spanPhone: IMdcGridCellNumber = null;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public order: IMdcGridCellNumber = null;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public align: keyof IMdcGridCellAlign = null;
  private elementDiv: HTMLDivElement;

  private attached() {
    if (this.span) {
      this.elementDiv.classList.add('mdc-layout-grid__cell--span-' + this.span);
    }
    if (this.spanDesktop) {
      this.elementDiv.classList.add('mdc-layout-grid__cell--span-' + this.spanDesktop + '-desktop');
    }
    if (this.spanTablet) {
      this.elementDiv.classList.add('mdc-layout-grid__cell--span-' + this.spanTablet + '-tablet');
    }
    if (this.spanPhone) {
      this.elementDiv.classList.add('mdc-layout-grid__cell--span-' + this.spanPhone + '-phone');
    }
    if (this.order) {
      this.elementDiv.classList.add('mdc-layout-grid__cell--order-' + this.order);
    }
    if (this.align) {
      this.elementDiv.classList.add('mdc-layout-grid__cell--align-' + this.align);
    }
  }

}
