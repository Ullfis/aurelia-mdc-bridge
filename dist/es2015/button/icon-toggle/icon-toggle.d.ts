export interface IMdcIconToggleEvent extends CustomEvent {
    detail: boolean;
}
export declare class MdcIconToggle {
    private element;
    class: string;
    iconOn: string;
    iconOff: string;
    ariaLabelOn: string;
    ariaLabelOff: string;
    primary: boolean;
    accent: boolean;
    on: boolean;
    private log;
    private mdcIconToggle;
    private elementI;
    constructor(element: Element);
    private bind();
    private unbind();
    private attached();
    private detached();
    private raiseEvent();
    private onChanged(newValue);
    private primaryChanged(newValue);
    private accentChanged(newValue);
}
