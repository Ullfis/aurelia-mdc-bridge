import { IMdcTabBarChangeEvent } from '../../bridge/index';

export class Tabs {
  private tab1Index = 0;
  private tab2Index = 1;
  private tab3Index = 0;

  private panelId = 0;
  private panelId2 = 0;

  private index = 2;
  private eventDetail;

  private indexScroller = 0;

  private onChange(event: IMdcTabBarChangeEvent) {
    this.eventDetail = event.detail.activeTabIndex;
  }

  private onTab1Change(event: IMdcTabBarChangeEvent) {
    this.tab1Index = event.detail.activeTabIndex;
  }
  private onTab2Change(event: IMdcTabBarChangeEvent) {
    this.tab2Index = event.detail.activeTabIndex;
  }
  private onTab3Change(event: IMdcTabBarChangeEvent) {
    this.tab3Index = event.detail.activeTabIndex;
  }
}
