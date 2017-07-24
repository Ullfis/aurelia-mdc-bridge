export declare class MdcButton {
    private element;
    accent: boolean;
    primary: boolean;
    dense: boolean;
    raised: boolean;
    compact: boolean;
    ripple: boolean;
    private log;
    constructor(element: Element);
    private attached();
    private detached();
    private accentChanged(newValue);
    private primaryChanged(newValue);
    private denseChanged(newValue);
    private raisedChanged(newValue);
    private compactChanged(newValue);
}
