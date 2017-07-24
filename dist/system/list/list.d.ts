export declare class MdcList {
    private element;
    tag: string;
    class: string;
    dense: boolean;
    twoLine: boolean;
    avatar: boolean;
    private log;
    private elementList;
    constructor(element: Element);
    private bind();
    private unbind();
    private attached();
    private denseChanged(newValue);
    private twoLineChanged(newValue);
    private avatarChanged(newValue);
}
