import { bindable, containerless } from 'aurelia-framework';
import * as util from './bridge/util';

@containerless()
export class ToolbarLinks {
  @bindable() public doc = false;
  @bindable() public comp = false;

  public compChanged(newValue) {
    this.comp = util.getBoolean(newValue);
  }
  public docChanged(newValue) {
    this.doc = util.getBoolean(newValue);
  }
}
