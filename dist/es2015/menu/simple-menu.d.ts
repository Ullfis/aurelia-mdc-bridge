import { TaskQueue } from 'aurelia-framework';
export interface IMdcSimpleMenuSelectedEvent extends CustomEvent {
    detail: {
        item: HTMLElement;
        index: number;
    };
}
export declare const MdcSimpleMenuOpenFrom: {
    topLeft: string;
    topRight: string;
    bottomLeft: string;
    bottomRight: string;
};
export declare class MdcSimpleMenu {
    private element;
    private taskQueue;
    openState: boolean;
    openFrom: string;
    value: any;
    class: string;
    private log;
    private elementSimpleMenu;
    private mdcSimpleMenu;
    private internalValueChange;
    constructor(element: Element, taskQueue: TaskQueue);
    open: boolean;
    show(options?: {
        focusIndex?: number;
        focusValue?: boolean;
    }): void;
    hide(): void;
    private bind();
    private unbind();
    private attached();
    private detached();
    private raiseSelectEvent(e);
    private raiseCancelEvent();
    private openFromChanged(newValue);
    private valueChanged(newValue);
    private findIndex(value);
    private compareModels(model1, model2);
}
