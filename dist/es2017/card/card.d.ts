export declare class MdcCard {
    private element;
    height: string;
    width: string;
    stroked: boolean;
    private log;
    private cssString;
    private elementCard;
    constructor(element: Element);
    private bind();
    private unbind();
    private attached();
    private heightChanged(newValue);
    private widthChanged(newValue);
    private strokedChanged(newValue);
    private createCss();
}
