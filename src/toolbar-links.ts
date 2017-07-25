import { bindable, containerless } from 'aurelia-framework';

@containerless()
export class ToolbarLinks {
  @bindable() public doc = false;
  @bindable() public comp = false;
}
