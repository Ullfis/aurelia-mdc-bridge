export declare class DOMHelper {
    static createElement(elementName: string): HTMLElement;
    static createChildElement(elementName: string, parent: any): HTMLElement;
    static createAttribute(attributeName: string, value: string): Attr;
    static createElementAttribute(attributeName: string, value: string, element: Element): Attr;
    static removeChildren(element: Element): void;
    static appendChildren(element: Element, children: NodeListOf<Element>): void;
    static htmlToElement(html: string): Node;
    static htmlToElements(html: string): NodeList;
}
