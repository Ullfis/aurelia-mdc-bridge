export interface IMdcCheckboxEvent extends CustomEvent {
    detail: boolean;
}
export declare class MdcCheckbox {
    private element;
    private static id;
    checked: boolean;
    indeterminate: boolean;
    disabled: boolean;
    private log;
    private controlId;
    private elementCheckbox;
    private mdcCheckbox;
    constructor(element: Element);
    private bind();
    private unbind();
    private handleChange(e);
    private checkedChanged(newValue);
    private disabledChanged(newValue);
    private indeterminateChanged(newValue);
}
