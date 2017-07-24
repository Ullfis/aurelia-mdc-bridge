export declare class MdcCardMedia {
    private element;
    class: string;
    image: string;
    size: string;
    repeat: string;
    height: string;
    private log;
    private cssString;
    constructor(element: Element);
    private bind();
    private unbind();
    private attached();
    private imageChanged();
    private sizeChanged();
    private repeatChanged();
    private heightChanged();
    private createCss();
}
