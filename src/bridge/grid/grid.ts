import { inject, bindable, bindingMode, customElement, containerless } from 'aurelia-framework';
import * as util from '../util';

@containerless()
@customElement('mdc-grid')
export class MdcGrid {
  @bindable() public class: string;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public fixedWidth: boolean = false;
  private elementDiv: HTMLDivElement;

  private attached() {
    if (util.getBoolean(this.fixedWidth)) {
      this.elementDiv.classList.add('mdc-layout-grid--fixed-column-width');
    }
  }
}
