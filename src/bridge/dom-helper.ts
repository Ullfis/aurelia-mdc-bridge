// copied from https://bl.ocks.org/kevmeister68/96c96a43a9f6e57708afb2c2aaefb904
//
export class DOMHelper {
  public static createElement(elementName: string): HTMLElement {
    return document.createElement(elementName);
  }
  public static createChildElement(elementName: string, parent): HTMLElement {
    const element = DOMHelper.createElement(elementName);
    parent.appendChild(element);
    return element;
  }
  public static createAttribute(attributeName: string, value: string): Attr {
    const attrib = document.createAttribute(attributeName);
    if (value) {
      attrib.value = value;
    }
    return attrib;
  }
  public static createElementAttribute(attributeName: string, value: string, element: Element): Attr {
    const attrib = DOMHelper.createAttribute(attributeName, value);
    element.attributes.setNamedItem(attrib);
    return attrib;
  }
  public static removeChildren(element: Element): void {
    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }
  }
  public static appendChildren(element: Element, children: NodeListOf<Element>): void {
    if (children) {
      // a NodeList is "live" (dynamic). It means as we move each node elsewhere, it will disappear from our NodeList
      while (children.length) {
        element.appendChild(children.item(0));
      }
    }
  }

  public static htmlToElement(html: string): Node {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstChild;
  }
  public static htmlToElements(html: string): NodeList {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
  }

}
