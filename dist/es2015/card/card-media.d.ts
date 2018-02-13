export declare class MdcCardMedia {
    private element;
    class: string;
    image: string;
    size: string;
    repeat: string;
    height: string;
    scaled: string;
    private log;
    private cssString;
    private elementMedia;
    constructor(element: Element);
    private bind();
    private unbind();
    private attached();
    private imageChanged();
    private sizeChanged();
    private repeatChanged();
    private heightChanged();
    private scaledChanged(newValue);
    private createCss();
}
