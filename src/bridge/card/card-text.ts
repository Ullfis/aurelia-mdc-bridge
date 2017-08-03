import { bindable, customElement } from 'aurelia-framework';

@customElement('mdc-card-text')
export class MdcCardText {
  @bindable() public class: string;
}
