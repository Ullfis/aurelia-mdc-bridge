export declare class MdcTab {
    class: string;
    href: string;
    active: boolean;
    ariaLabel: string;
    private elementTab;
    private log;
    private isIcon;
    private isIconText;
    private showIcon;
    private showIconText;
    private ariaHidden;
    constructor();
    private bind();
    private unbind();
    private attached();
    private aClicked(event);
    private activeChanged(newValue);
}
