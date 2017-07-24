import { TaskQueue } from 'aurelia-framework';
export interface IMdcSliderEvent extends CustomEvent {
    detail: number;
}
export declare class MdcSlider {
    private element;
    private taskQueue;
    value: number;
    min: number;
    max: number;
    step: number;
    ariaLabel: string;
    disabled: boolean;
    private log;
    private elementSlider;
    private mdcSlider;
    private stopChangeEvent;
    private lastInputEventValue;
    constructor(element: Element, taskQueue: TaskQueue);
    private bind();
    private unbind();
    private attached();
    private detached();
    private onChange();
    private onInput();
    private valueChanged(newValue);
    private stepChanged(newValue);
    private minChanged(newValue);
    private maxChanged(newValue);
    private disabledChanged(newValue);
}
