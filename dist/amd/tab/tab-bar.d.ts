import { TaskQueue } from 'aurelia-framework';
export interface IMdcTabBarChangeEvent extends CustomEvent {
    detail: {
        activeTabIndex: number;
    };
}
export declare class MdcTabBar {
    private element;
    private taskQueue;
    activeTabIndex: number;
    class: string;
    icon: boolean;
    text: boolean;
    private log;
    private elementTabBar;
    private mdcTabBar;
    private stopChangedEvent;
    constructor(element: Element, taskQueue: TaskQueue);
    private bind();
    private unbind();
    private attached();
    private detached();
    private onChange({detail: tabs});
    private hasChildIcons();
    private hasChildText();
    private activeTabIndexChanged(newValue);
    private iconChanged(newValue);
    private textChanged(newValue);
}
