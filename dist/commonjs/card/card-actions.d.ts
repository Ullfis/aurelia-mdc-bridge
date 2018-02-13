import { TaskQueue } from 'aurelia-framework';
export declare class MdcCardActions {
    private taskQueue;
    fullBleed: boolean;
    class: string;
    private elementSection;
    constructor(taskQueue: TaskQueue);
    bind(): void;
    unbind(): void;
    attached(): void;
    private fullBleedChanged(newValue);
    private decorateChildren(element);
}
