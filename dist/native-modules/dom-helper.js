var DOMHelper = (function () {
    function DOMHelper() {
    }
    DOMHelper.createElement = function (elementName) {
        return document.createElement(elementName);
    };
    DOMHelper.createChildElement = function (elementName, parent) {
        var element = DOMHelper.createElement(elementName);
        parent.appendChild(element);
        return element;
    };
    DOMHelper.createAttribute = function (attributeName, value) {
        var attrib = document.createAttribute(attributeName);
        if (value) {
            attrib.value = value;
        }
        return attrib;
    };
    DOMHelper.createElementAttribute = function (attributeName, value, element) {
        var attrib = DOMHelper.createAttribute(attributeName, value);
        element.attributes.setNamedItem(attrib);
        return attrib;
    };
    DOMHelper.removeChildren = function (element) {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }
    };
    DOMHelper.appendChildren = function (element, children) {
        if (children) {
            while (children.length) {
                element.appendChild(children.item(0));
            }
        }
    };
    DOMHelper.htmlToElement = function (html) {
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstChild;
    };
    DOMHelper.htmlToElements = function (html) {
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    };
    return DOMHelper;
}());
export { DOMHelper };
