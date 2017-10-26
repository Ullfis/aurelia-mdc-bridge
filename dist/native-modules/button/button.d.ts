export declare class MdcButton {
    private element;
    compact: boolean;
    dense: boolean;
    raised: boolean;
    stroked: boolean;
    unelevated: boolean;
    ripple: boolean;
    private log;
    constructor(element: Element);
    private attached();
    private detached();
    private compactChanged(newValue);
    private denseChanged(newValue);
    private raisedChanged(newValue);
    private strokedChanged(newValue);
    private unelevatedChanged(newValue);
}
