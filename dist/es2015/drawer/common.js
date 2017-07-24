export function isPermanentDrawer(element) {
    return isClassPresent(element.parentElement, 'mdc-permanent-drawer');
}
export function isPersistentDrawer(element) {
    return isClassPresent(element.parentElement, 'mdc-persistent-drawer__drawer');
}
export function isTemporaryDrawer(element) {
    return isClassPresent(element.parentElement, 'mdc-temporary-drawer__drawer');
}
function isClassPresent(parent, className) {
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
