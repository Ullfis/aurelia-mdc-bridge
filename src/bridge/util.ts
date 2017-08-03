export function fireEvent(element: Element, event: string, data?: any): CustomEvent {
  const e = new CustomEvent(event, {
    bubbles: true,
    detail: data
  });
  element.dispatchEvent(e);
  return e;
}

export function getBoolean(value: any): boolean {
  return (value === true || value === 'true');
}

// check if property exist on object
export function hasProp(obj: any, prop: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export function findAncestor(el: Element, className: string, maxSearchLevel: number = 6): Element {
  let counter = 0;
  while (counter < maxSearchLevel) {
    el = el.parentElement || null;
    if (!el) {
      return null;
    } else if (el.classList.contains(className)) {
      return el;
    }
    counter++;
  }
  return null;
}
