export class DOMHelper {
    static createElement(elementName) {
        return document.createElement(elementName);
    }
    static createChildElement(elementName, parent) {
        const element = DOMHelper.createElement(elementName);
        parent.appendChild(element);
        return element;
    }
    static createAttribute(attributeName, value) {
        const attrib = document.createAttribute(attributeName);
        if (value) {
            attrib.value = value;
        }
        return attrib;
    }
    static createElementAttribute(attributeName, value, element) {
        const attrib = DOMHelper.createAttribute(attributeName, value);
        element.attributes.setNamedItem(attrib);
        return attrib;
    }
    static removeChildren(element) {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }
    }
    static appendChildren(element, children) {
        if (children) {
            while (children.length) {
                element.appendChild(children.item(0));
            }
        }
    }
    static htmlToElement(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstChild;
    }
    static htmlToElements(html) {
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    }
}
