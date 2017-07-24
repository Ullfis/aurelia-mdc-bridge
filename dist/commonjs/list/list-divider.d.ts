export declare class MdcListDivider {
    private element;
    class: any;
    inset: boolean;
    private log;
    private elementDivider;
    private isUlDivider;
    private isNavDivider;
    constructor(element: Element);
    private bind();
    private unbind();
    private attached();
    private insetChanged(newValue);
}
