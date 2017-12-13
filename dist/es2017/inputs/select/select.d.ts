import { TaskQueue } from 'aurelia-framework';
import { MDCSelect } from '@material/select';
export interface IMdcSelectChangeEvent extends CustomEvent {
    detail: MDCSelect;
}
export declare class MdcSelect {
    private element;
    private taskQueue;
    class: any;
    disabled: boolean;
    value: any;
    labelText: any;
    matcher: (a: any, b: any) => boolean;
    private listItems;
    private elementSelect;
    private mdcSelect;
    private log;
    private internalValueChanged;
    constructor(element: Element, taskQueue: TaskQueue);
    private bind();
    private unbind();
    private attached();
    private detached();
    private listItemsChanged();
    private disabledChanged(newValue);
    private valueChanged(newValue);
    private findIndex(value);
    private compareModels(model1, model2);
    private raiseChangeEvent(e);
    private getTextForOptionAtIndex(index);
    private getValueForOptionAtIndex(index);
}
