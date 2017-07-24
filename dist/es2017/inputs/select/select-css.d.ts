import { MDCSelect } from '@material/select';
export interface IMdcSelectCssChangeEvent extends CustomEvent {
    detail: MDCSelect;
}
export declare class MdcSelectCss {
    private element;
    private options;
    private log;
    private isMultiple;
    private isPureCss;
    constructor(element: Element);
    private bind();
    private optionsChanged();
    private pureCss();
    private setOptionClasses(el);
}
