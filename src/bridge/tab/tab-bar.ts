import { autoinject, bindable, bindingMode, TaskQueue } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
import { MDCTabBar, MDCTabBarFoundation } from '@material/tabs';
import * as util from '../util';

export interface IMdcTabBarChangeEvent extends CustomEvent {
  detail: {
    /**
     * Active Tab index
     *
     * @type {number}
     */
    activeTabIndex: number;
  };
}

@autoinject()
export class MdcTabBar {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) public activeTabIndex = 0;
  @bindable() public class: string;
  @bindable() public icon = false;
  @bindable() public text = false;
  private log: Logger;
  private elementTabBar: HTMLElement;
  private mdcTabBar;
  private stopChangedEvent = false;

  constructor(private element: Element, private taskQueue: TaskQueue) {
    this.log = getLogger('mdc-tab-bar');
  }

  private bind() { /** */ }
  private unbind() { /** */ }

  private attached() {
    this.taskQueue.queueTask(() => {
      this.icon = this.hasChildIcons();
      this.text = this.hasChildText();
      this.mdcTabBar = new MDCTabBar(this.elementTabBar);
      this.activeTabIndexChanged(this.activeTabIndex);
      this.mdcTabBar.listen('MDCTabBar:change', this.onChange.bind(this));
      this.mdcTabBar.preventDefaultOnClick = true;
    });
  }

  private detached() {
    if (this.mdcTabBar) {
      this.mdcTabBar.unlisten('MDCTabBar:change', this.onChange.bind(this));
      this.mdcTabBar.destroy();
    }
  }

  private onChange({ detail: tabs }) {
    this.stopChangedEvent = true;
    this.activeTabIndex = tabs.activeTabIndex;
    util.fireEvent(this.element, 'on-change', { activeTabIndex: tabs.activeTabIndex });
  }

  private hasChildIcons(): boolean {
    const count = this.elementTabBar.getElementsByClassName('amb-tab-is-icon').length;
    return (count !== 0);
  }

  private hasChildText(): boolean {
    const count = this.elementTabBar.getElementsByClassName('amb-tab-is-text').length;
    return (count !== 0);
  }

  private activeTabIndexChanged(newValue) {
    if (this.stopChangedEvent) {
      this.stopChangedEvent = false;
      return;
    }
    const value = parseInt(newValue, 10);
    if (this.mdcTabBar) {
      this.mdcTabBar.activeTabIndex = value;
    }
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
}
