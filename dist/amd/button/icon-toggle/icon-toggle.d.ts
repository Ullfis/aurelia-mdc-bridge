export interface IMdcIconToggleEvent extends CustomEvent {
    detail: boolean;
}
export declare class MdcIconToggle {
    private element;
    iconOn: string;
    iconOff: string;
    ariaLabelOn: string;
    ariaLabelOff: string;
    disabled: boolean;
    on: boolean;
    private log;
    private mdcIconToggle;
    private tabindex;
    private elementI;
    constructor(element: Element);
    private bind();
    private unbind();
    private attached();
    private detached();
    private raiseEvent();
    private onChanged(newValue);
    private disabledChanged(newValue);
}
