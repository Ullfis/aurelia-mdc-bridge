export function fireEvent(element, event, data) {
    var e = new CustomEvent(event, {
        bubbles: true,
        detail: data
    });
    element.dispatchEvent(e);
    return e;
}
export function getBoolean(value) {
    return (value === true || value === 'true');
}
export function hasProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
