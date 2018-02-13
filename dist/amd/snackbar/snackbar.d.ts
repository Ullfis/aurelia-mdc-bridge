export interface IMdcSnackbarOptions {
    message?: string;
    timeout?: number;
    actionText?: string;
    actionOnBottom?: boolean;
    actionHandler?: () => void;
    multiline?: boolean;
    dismissesOnAction?: boolean;
    alignStart?: boolean;
}
export declare class MdcSnackbar {
    private element;
    class: string;
    message: string;
    timeout: number;
    actionText: string;
    multiline: boolean;
    actionOnBottom: boolean;
    dismissesOnAction: boolean;
    alignStart: boolean;
    private log;
    private elementSnackbar;
    private elementTheme;
    private mdcSnackbar;
    constructor(element?: HTMLElement);
    show(options?: IMdcSnackbarOptions): void;
    private onAction();
    private bind();
    private unbind();
    private attached();
    private detached();
    private alignStartChanged(newValue);
    private dismissesOnActionChanged(newValue);
    private addToElement();
    private onTransitionEndHandler(event);
}
