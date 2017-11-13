export interface IMdcListItemClickEvent extends CustomEvent {
    detail: MdcListItem;
}
export declare class MdcListItem {
    private element;
    class: any;
    ripple: boolean;
    model: any;
    selected: boolean;
    disabled: boolean;
    href: string;
    target: string;
    private log;
    private parentElement;
    private elementListItem;
    private isSimpleMenuItem;
    private isSelectMenuItem;
    private mdcRipple;
    private selectedClass;
    constructor(element: Element);
    private elementClick(e);
    private bind();
    private unbind();
    private attached();
    private detached();
    private simpleMenuItem();
    private selectMenuItem();
    private rippleEffect();
    private disabledChanged(newValue);
    private selectedChanged(newValue);
}
