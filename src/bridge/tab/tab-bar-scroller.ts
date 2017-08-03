import { inject, bindable, bindingMode, TaskQueue } from 'aurelia-framework';
import { MDCTabBarScroller } from '@material/tabs';
import * as util from '../util';

@inject(Element, TaskQueue)
export class MdcTabBarScroller {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public activeTabIndex = 0;
  @bindable() public ariaBefore = 'scroll back button';
  @bindable() public ariaNext = 'scroll forward button';
  @bindable() public icon = false;
  @bindable() public text = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public primary = false;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public accent = false;
  private elementTabBar: HTMLElement;
  private elementTabBarScroller: HTMLElement;
  private mdcTabBarScroller;
  private stopChangedEvent = false;

  constructor(private element: Element, private taskQueue: TaskQueue) { }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.taskQueue.queueTask(() => {
      this.icon = this.hasChildIcons();
      this.text = this.hasChildText();
      this.mdcTabBarScroller = new MDCTabBarScroller(this.elementTabBarScroller);
      this.activeTabIndexChanged(this.activeTabIndex);
      if (this.mdcTabBarScroller.tabBar) {
        this.mdcTabBarScroller.tabBar.listen('MDCTabBar:change', this.onChange.bind(this));
        this.mdcTabBarScroller.tabBar.preventDefaultOnClick = true;
      }
    });
    this.primaryChanged(this.primary);
    this.accentChanged(this.accent);
  }

  private detached() {
    if (this.mdcTabBarScroller) {
      if (this.mdcTabBarScroller.tabBar) {
        this.mdcTabBarScroller.tabBar.unlisten('MDCTabBar:change', this.onChange.bind(this));
        this.mdcTabBarScroller.tabBar.destroy();
      }
      this.mdcTabBarScroller.destroy();
    }
  }

  private onChange({ detail: tabs }) {
    this.stopChangedEvent = true;
    this.activeTabIndex = tabs.activeTabIndex;
    util.fireEvent(this.element, 'on-change', { detail: { activeTabIndex: tabs.activeTabIndex }});
  }

  private activeTabIndexChanged(newValue) {
    if (this.stopChangedEvent) {
      this.stopChangedEvent = false;
      return;
    }
    const value = parseInt(newValue, 10);
    if (this.mdcTabBarScroller && this.mdcTabBarScroller.tabBar) {
      this.mdcTabBarScroller.tabBar.activeTabIndex = value;
    }
  }

  private hasChildIcons(): boolean {
    const count = this.elementTabBar.getElementsByClassName('amb-tab-is-icon').length;
    return (count !== 0);
  }

  private hasChildText(): boolean {
    const count = this.elementTabBar.getElementsByClassName('amb-tab-is-text').length;
    return (count !== 0);
  }

  private iconChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    if (!value) {
      this.elementTabBar.classList.remove('mdc-tab-bar--icons-with-text');
      this.elementTabBar.classList.remove('mdc-tab-bar--icon-tab-bar');
    } else {
      if (util.getBoolean(this.text)) {
        this.elementTabBar.classList.add('mdc-tab-bar--icons-with-text');
      } else {
        this.elementTabBar.classList.add('mdc-tab-bar--icon-tab-bar');
      }
    }
  }

  private textChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    if (!value) {
      this.elementTabBar.classList.remove('mdc-tab-bar--icons-with-text');
      if (util.getBoolean(this.icon)) {
        this.elementTabBar.classList.add('mdc-tab-bar--icon-tab-bar');
      }
    } else {
      if (util.getBoolean(this.icon)) {
        this.elementTabBar.classList.add('mdc-tab-bar--icons-with-text');
      }
    }
  }

  private primaryChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementTabBar.classList[value ? 'add' : 'remove']('mdc-tab-bar--indicator-primary');
    if (value) { this.accent = false; }
  }

  private accentChanged(newValue: boolean) {
    const value = util.getBoolean(newValue);
    this.elementTabBar.classList[value ? 'add' : 'remove']('mdc-tab-bar--indicator-accent');
    if (value) { this.primary = false; }
  }
}
