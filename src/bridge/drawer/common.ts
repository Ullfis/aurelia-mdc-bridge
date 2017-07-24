export function isPermanentDrawer(element: Element): boolean {
  return isClassPresent(element.parentElement, 'mdc-permanent-drawer');
}
export function isPersistentDrawer(element: Element): boolean {
  return isClassPresent(element.parentElement, 'mdc-persistent-drawer__drawer');
}
export function isTemporaryDrawer(element: Element): boolean {
  return isClassPresent(element.parentElement, 'mdc-temporary-drawer__drawer');
}

function isClassPresent(parent: HTMLElement, className: string): boolean {
  if (parent) {
    if (parent.classList.contains(className)) {
      return true;
    }
    if (parent.parentElement && parent.parentElement.classList.contains(className)) {
      return true;
    }
  }
  return false;
}
