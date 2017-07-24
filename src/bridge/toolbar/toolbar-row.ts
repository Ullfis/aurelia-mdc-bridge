import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class MdcToolbarRow {
  @bindable() public class: string;
}
