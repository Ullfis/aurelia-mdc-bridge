import { TaskQueue } from 'aurelia-framework';
export interface IMdcRadioEvent extends CustomEvent {
    detail: {
        name: string;
        value: any;
    };
}
export declare class MdcRadio {
    private element;
    private taskQueue;
    private static id;
    checked: any;
    disabled: boolean;
    name: string;
    value: any;
    model: any;
    matcher: any;
    private log;
    private controlId;
    private mdcRadio;
    private elementRadio;
    private isModel;
    private compareValue;
    constructor(element: Element, taskQueue: TaskQueue);
    private bind();
    private unbind();
    private attached();
    private detached();
    private disabledChanged(newValue);
    private handleChange(e);
}
