import * as util from '../util';

export function isPermanentDrawer(element: Element): boolean {
  return isClassPresent(element, 'mdc-permanent-drawer');
}
export function isPersistentDrawer(element: Element): boolean {
  return isClassPresent(element, 'mdc-persistent-drawer__drawer');
}
export function isTemporaryDrawer(element: Element): boolean {
  return isClassPresent(element, 'mdc-temporary-drawer__drawer');
}

function isClassPresent(parent: Element, className: string): boolean {
  if (parent) {
    const elementFound = util.findAncestor(parent, className, 5);
    if (elementFound) {
      return true;
    }
  }
  return false;
}
