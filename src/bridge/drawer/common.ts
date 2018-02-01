import * as util from '../util';

export function isDrawer(element: Element): boolean {
  return isClassPresent(element, 'mdc-drawer__drawer') ||
    isClassPresent(element, 'mdc-drawer--permanent');
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
