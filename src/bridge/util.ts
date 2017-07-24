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
