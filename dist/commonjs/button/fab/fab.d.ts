export declare class MdcFab {
    private element;
    mini: boolean;
    plain: boolean;
    ariaLabel: string;
    private log;
    constructor(element: Element);
    private attached();
    private detached();
    private miniChanged(newValue);
    private plainChanged(newValue);
    private ariaLabelChanged(newValue);
    private removeChildren();
}
