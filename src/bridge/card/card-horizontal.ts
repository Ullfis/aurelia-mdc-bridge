import { bindable, customElement } from 'aurelia-framework';

@customElement('mdc-card-horizontal')
export class MdcCardHorizontal {
  @bindable() public class: string;
}
