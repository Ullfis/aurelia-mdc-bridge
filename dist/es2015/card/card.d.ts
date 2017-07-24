export declare class MdcCard {
    private element;
    height: string;
    width: string;
    class: string;
    private log;
    private cssString;
    constructor(element: Element);
    private bind();
    private unbind();
    private attached();
    private heightChanged(newValue);
    private widthChanged(newValue);
    private createCss();
}
