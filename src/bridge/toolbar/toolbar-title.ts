import { bindable, containerless, customElement } from 'aurelia-framework';

@customElement('mdc-toolbar-title')
@containerless()
export class MdcToolbarTitle {
  @bindable() public class: string;
}
