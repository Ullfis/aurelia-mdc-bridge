import { bindable, bindingMode, customElement, containerless } from 'aurelia-framework';
import * as util from '../util';

@containerless()
@customElement('mdc-card-actions')
export class MdcCardActions {
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public vertical: boolean;
  @bindable() public class: string;
  private elementSection: HTMLElement;

  public bind() { /** */ }
  public unbind() { /** */ }

  public attached() {
    this.verticalChanged(this.vertical);
  }

  private verticalChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementSection.classList[value ? 'add' : 'remove']('mdc-card__actions--vertical');
  }
}
