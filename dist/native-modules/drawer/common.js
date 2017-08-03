import * as util from '../util';
export function isPermanentDrawer(element) {
    return isClassPresent(element, 'mdc-permanent-drawer');
}
export function isPersistentDrawer(element) {
    return isClassPresent(element, 'mdc-persistent-drawer__drawer');
}
export function isTemporaryDrawer(element) {
    return isClassPresent(element, 'mdc-temporary-drawer__drawer');
}
function isClassPresent(parent, className) {
    if (parent) {
        var elementFound = util.findAncestor(parent, className, 5);
        if (elementFound) {
            return true;
        }
    }
    return false;
}
