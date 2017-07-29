export function getParentList(element: Element): Element {
  return findAncestor(element, 'mdc-list');
}

export function findAncestor(el: Element, cls: string, maxLevel: number = 5): Element {
  let counter = 0;
  while (counter < maxLevel) {
    el = el.parentElement || null;
    if (!el) {
      return null;
    } else if (el.classList.contains(cls)) {
      return el;
    }
    counter++;
  }
  return null;
}
