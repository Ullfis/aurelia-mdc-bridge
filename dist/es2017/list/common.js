export function getParentList(element) {
    return findAncestor(element, 'mdc-list');
}
export function findAncestor(el, cls, maxLevel = 5) {
    let counter = 0;
    while (counter < maxLevel) {
        el = el.parentElement || null;
        if (!el) {
            return null;
        }
        else if (el.classList.contains(cls)) {
            return el;
        }
        counter++;
    }
    return null;
}
