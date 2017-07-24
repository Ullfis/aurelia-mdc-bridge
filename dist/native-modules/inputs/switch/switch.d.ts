export interface IMdcSwitchEvent extends CustomEvent {
    detail: boolean;
}
export declare class MdcSwitch {
    private element;
    private static id;
    disabled: boolean;
    labelOff: string;
    labelOn: string;
    checked: any;
    private log;
    private inputElement;
    private controlId;
    constructor(element: Element);
    private bind();
    private unbind();
    private attached();
    private detached();
    private handleChange();
    private checkedChanged(newValue);
}
