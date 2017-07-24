import { bindable, customElement, containerless } from 'aurelia-framework';

@containerless()
@customElement('mdc-card-horizontal')
export class MdcCardHorizontal {
  @bindable() public class: string;
}
