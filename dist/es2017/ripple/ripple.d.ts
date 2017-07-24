export declare class MdcRipple {
    private element;
    unbounded: boolean;
    accent: boolean;
    primary: boolean;
    private log;
    private mdcRipple;
    constructor(element: Element);
    private bind();
    private unbind();
    private attached();
    private detached();
    private unboundedChanged(newValue);
    private accentChanged(newValue);
    private primaryChanged(newValue);
}
