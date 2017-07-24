import { MdcSimpleMenu, IMdcSimpleMenuSelectedEvent, MdcSimpleMenuOpenFrom } from '../../bridge/index';

export class SimpleMenu {
  private menuElement1: MdcSimpleMenu;
  private menuElement2: MdcSimpleMenu;
  private menuElement3: MdcSimpleMenu;
  private menuElement41: MdcSimpleMenu;
  private menuElement42: MdcSimpleMenu;
  private menuElement43: MdcSimpleMenu;
  private menuElement44: MdcSimpleMenu;
  private menuElement51: MdcSimpleMenu;
  private menuElement52: MdcSimpleMenu;
  private menuElement53: MdcSimpleMenu;
  private menuElement54: MdcSimpleMenu;
  private menuElement6: MdcSimpleMenu;
  private lastEvent1;
  private lastEvent2;
  private elementManualAnchor: HTMLElement;

  private menuItems3 = [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' }
  ];
  private selectedMenuItem = this.menuItems3[1];

  private showMenu1() {
    this.menuElement1.show();
  }
  private showMenu2() {
    this.menuElement2.show({focusIndex: 2});
  }
  private showMenu3() {
    this.menuElement3.show({focusValue: true});
  }
  private showMenu41() {
    this.menuElement41.show();
  }
  private showMenu42() {
    this.menuElement42.show();
  }
  private showMenu43() {
    this.menuElement43.show();
  }
  private showMenu44() {
    this.menuElement44.show();
  }
  private showMenu51() {
    this.menuElement51.show();
  }
  private showMenu52() {
    this.menuElement52.show();
  }
  private showMenu53() {
    this.menuElement53.show();
  }
  private showMenu54() {
    this.menuElement54.show();
  }
  private showMenu6() {
    this.menuElement6.show();
  }
  private onSelect1(e: IMdcSimpleMenuSelectedEvent) {
    this.lastEvent1 = {
      index: e.detail.index,
      innerText: e.detail.item.innerText
    };
  }
  private onSelect2(e: IMdcSimpleMenuSelectedEvent) {
    this.lastEvent2 = {
      index: e.detail.index,
      innerText: e.detail.item.innerText
    };
  }
  private onCancel1() {
    this.lastEvent1 = 'cancel menu';
  }
  private onCancel2() {
    this.lastEvent2 = 'cancel menu';
  }
}
