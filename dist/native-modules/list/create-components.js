import { FEATURE } from 'aurelia-pal';
import { DOMHelper } from '../dom-helper';
export function CreateListComponent(compiler, resources, element, instruction) {
    var tag = instruction.attributes['tag'];
    if (!tag) {
        tag = 'ul';
    }
    var tagEl = DOMHelper.createElement(tag);
    tagEl.setAttribute('class', 'mdc-list');
    tagEl.setAttribute('class.bind', 'class');
    tagEl.setAttribute('ref', 'elementList');
    while (element.firstChild) {
        tagEl.appendChild(element.firstChild);
    }
    var templateEl = document.createDocumentFragment();
    templateEl.appendChild(tagEl);
    if (!FEATURE.htmlTemplateElement) {
        FEATURE.ensureHTMLTemplateElement(templateEl);
    }
    instruction.inheritBindingContext = true;
    instruction.viewFactory = compiler.compile(templateEl, resources, instruction);
    return true;
}
export function CreateListItemComponent(compiler, resources, element, instruction) {
    var href = element.getAttribute('href');
    var tag = href ? 'a' : 'li';
    var base = DOMHelper.createElement(tag);
    base.setAttribute('class', 'mdc-list-item');
    base.setAttribute('class.bind', 'class');
    base.setAttribute('ref', 'elementListItem');
    base.setAttribute('href.bind', 'href');
    base.setAttribute('target.bind', 'target');
    base.setAttribute('model.bind', 'model');
    base.setAttribute('click.delegate', 'elementClick($event)');
    moveSlotElements(element, base);
    var templateEl = document.createDocumentFragment();
    templateEl.appendChild(base);
    if (!FEATURE.htmlTemplateElement) {
        FEATURE.ensureHTMLTemplateElement(templateEl);
    }
    instruction.inheritBindingContext = true;
    instruction.viewFactory = compiler.compile(templateEl, resources, instruction);
    return true;
}
function moveSlotElements(node, base) {
    if (!node.hasChildNodes()) {
        return;
    }
    var startSlot = DOMHelper.createElement('div');
    var endSlot = DOMHelper.createElement('div');
    var textSlot = DOMHelper.createElement('span');
    var secondarySlot = DOMHelper.createElement('span');
    var noSlot = DOMHelper.createElement('div');
    while (node.firstChild) {
        var childNode = node.firstChild;
        if (childNode.attributes) {
            var slotAtr = childNode.attributes.getNamedItem('slot');
            if (slotAtr) {
                if (slotAtr.value === 'start') {
                    if (childNode.hasChildNodes()) {
                        while (childNode.firstChild) {
                            if (childNode.firstChild.nodeType === Node.TEXT_NODE) {
                                var span = DOMHelper.createElement('span');
                                span.classList.add('mdc-list-item__start-detail');
                                span.appendChild(childNode.firstChild);
                                startSlot.appendChild(span);
                            }
                            else {
                                childNode.firstChild.classList.add('mdc-list-item__start-detail');
                                startSlot.appendChild(childNode.firstChild);
                            }
                        }
                    }
                }
                else if (slotAtr.value === 'end') {
                    if (childNode.hasChildNodes()) {
                        while (childNode.firstChild) {
                            if (childNode.firstChild.nodeType === Node.TEXT_NODE) {
                                var span = DOMHelper.createElement('span');
                                span.classList.add('mdc-list-item__end-detail');
                                span.appendChild(childNode.firstChild);
                                endSlot.appendChild(span);
                            }
                            else {
                                childNode.firstChild.classList.add('mdc-list-item__end-detail');
                                endSlot.appendChild(childNode.firstChild);
                            }
                        }
                    }
                }
                else if (slotAtr.value === 'text') {
                    if (childNode.hasChildNodes()) {
                        while (childNode.firstChild) {
                            textSlot.appendChild(childNode.firstChild);
                        }
                    }
                }
                else if (slotAtr.value === 'secondary') {
                    if (childNode.hasChildNodes()) {
                        while (childNode.firstChild) {
                            secondarySlot.appendChild(childNode.firstChild);
                        }
                    }
                }
                node.removeChild(childNode);
            }
            else {
                noSlot.appendChild(childNode);
            }
        }
        else {
            noSlot.appendChild(childNode);
        }
    }
    if (startSlot.hasChildNodes()) {
        while (startSlot.firstChild) {
            base.appendChild(startSlot.firstChild);
        }
    }
    if (secondarySlot.hasChildNodes()) {
        secondarySlot.classList.add('mdc-list-item__text-secondary');
        textSlot.appendChild(secondarySlot);
    }
    if (textSlot.hasChildNodes()) {
        textSlot.classList.add('mdc-list-item__text');
        noSlot.appendChild(textSlot);
    }
    if (noSlot.hasChildNodes()) {
        noSlot.classList.add('amb-mdc-list-item-text');
        base.appendChild(noSlot);
    }
    if (endSlot.hasChildNodes()) {
        while (endSlot.firstChild) {
            base.appendChild(endSlot.firstChild);
        }
    }
}
