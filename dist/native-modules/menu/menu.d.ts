import { TaskQueue } from 'aurelia-framework';
export interface IMdcMenuSelectedEvent extends CustomEvent {
    detail: {
        item: HTMLElement;
        index: number;
    };
}
export declare const MdcMenuAnchorCorner: {
    topLeft: string;
    topRight: string;
    topStart: string;
    topEnd: string;
    bottomLeft: string;
    bottomRight: string;
    bottomStart: string;
    bottomEnd: string;
};
export declare class MdcMenu {
    private element;
    private taskQueue;
    openState: boolean;
    quickOpen: boolean;
    anchorCorner: string;
    value: any;
    class: string;
    private log;
    private elementMenu;
    private mdcMenu;
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
    private anchorCornerChanged(newValue);
    private valueChanged(newValue);
    private findIndex(value);
    private compareModels(model1, model2);
}
