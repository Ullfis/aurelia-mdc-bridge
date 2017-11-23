export interface IMdcDialogClickEvent extends CustomEvent {
    detail: boolean;
}
export declare class MdcDialog {
    private element;
    private static id;
    header: string;
    accept: string;
    cancel: string;
    acceptAction: boolean;
    cancelAction: boolean;
    acceptDisabled: boolean;
    scrollable: boolean;
    focusAt: HTMLElement;
    private log;
    private diagElement;
    private titleElement;
    private acceptButtonElement;
    private cancelButtonElement;
    private mdcElement;
    private mdcDialogFoundation;
    private controlId;
    private showHeader;
    constructor(element: Element);
    show(showDialog?: boolean): void;
    readonly foundation: any;
    private bind();
    private unbind();
    private attached();
    private detached();
    private headerChanged(newValue);
    private onButtonAccept();
    private onButtonCancel();
    private acceptActionChanged(newValue);
    private cancelActionChanged(newValue);
    private scrollableChanged(newValue);
    private onTransitionEnd(evt);
}
