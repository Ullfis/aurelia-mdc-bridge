export declare class MdcFab {
    private element;
    mini: boolean;
    exited: boolean;
    ariaLabel: string;
    ripple: boolean;
    private log;
    private icon;
    constructor(element: Element);
    private attached();
    private detached();
    private miniChanged(newValue);
    private exitedChanged(newValue);
    private ariaLabelChanged(newValue);
    private removeChildren();
}
