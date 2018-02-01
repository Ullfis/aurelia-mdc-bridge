import * as util from '../util';
export function isDrawer(element) {
    return isClassPresent(element, 'mdc-drawer__drawer') ||
        isClassPresent(element, 'mdc-drawer--permanent');
}
function isClassPresent(parent, className) {
    if (parent) {
        const elementFound = util.findAncestor(parent, className, 5);
        if (elementFound) {
            return true;
        }
    }
    return false;
}
