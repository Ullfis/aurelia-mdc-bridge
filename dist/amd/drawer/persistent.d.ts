export declare class MdcDrawerPersistent {
    private element;
    open: boolean;
    private log;
    private elementDrawer;
    private mdcDrawer;
    constructor(element: Element);
    private bind();
    private unbind();
    private attached();
    private detached();
    private openChanged(newValue);
    private onOpenEvent();
    private onCloseEvent();
}
