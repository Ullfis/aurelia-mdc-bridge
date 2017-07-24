import { bindable, customElement, containerless } from 'aurelia-framework';

@containerless()
@customElement('mdc-card-text')
export class MdcCardText {
  @bindable() public class: string;
}
