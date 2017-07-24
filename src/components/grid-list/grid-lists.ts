export class GridLists {
  private header = false;
  private twoLine = true;
  private iconStart = false;
  private iconEnd = false;
  private aspect = '1x1';
  private gutter = '4';
  private secondaryItem;
  private primaryItem;

  private onPrimary(item) {
    this.primaryItem = item;
  }
  private onSecondary(item) {
    this.secondaryItem = item;
  }
}
