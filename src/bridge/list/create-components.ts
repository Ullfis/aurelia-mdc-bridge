import { ViewCompiler, ViewResources, BehaviorInstruction } from 'aurelia-framework';
import { FEATURE } from 'aurelia-pal';
import { DOMHelper } from '../dom-helper';

//  LIST
//
// create an <ul> or <"tag attribute value"> tag.
//
export function CreateListComponent(compiler: ViewCompiler,
                                    resources: ViewResources,
                                    element: HTMLElement,
                                    instruction: (BehaviorInstruction & any)): boolean {

  let tag = instruction.attributes['tag'];
  if (!tag) { tag = 'ul'; }

  // tag element
  const tagEl = DOMHelper.createElement(tag);
  tagEl.setAttribute('class', 'mdc-list');
  tagEl.setAttribute('class.bind', 'class');
  tagEl.setAttribute('ref', 'elementList');

  // move all element child nodes into tag element
  while (element.firstChild) {
    tagEl.appendChild(element.firstChild);
  }

  const templateEl: DocumentFragment = document.createDocumentFragment();
  templateEl.appendChild(tagEl);

  // ensure the template element has a content property
  if (!FEATURE.htmlTemplateElement) {
    (FEATURE as any).ensureHTMLTemplateElement(templateEl);
  }

  instruction.inheritBindingContext = true;
  instruction.viewFactory = compiler.compile(templateEl, resources, instruction);

  // Let Aurelia do her thing
  return true;
}

//  LIST ITEM
//
// create an <li> or <a> tag and add start/end/text/secondary areas/slots
// <li> tag is default, <a> tag is used if href attribute is present
//
export function CreateListItemComponent(compiler: ViewCompiler,
                                        resources: ViewResources,
                                        element: HTMLElement,
                                        instruction: (BehaviorInstruction & any)): boolean {

  const href = element.getAttribute('href');
  const tag = href ? 'a' : 'li';

  // create base element
  const base = DOMHelper.createElement(tag);
  base.setAttribute('class', 'mdc-list-item');
  base.setAttribute('class.bind', 'class');
  base.setAttribute('ref', 'elementListItem');
  base.setAttribute('href.bind', 'href');
  base.setAttribute('target.bind', 'target');
  base.setAttribute('model.bind', 'model');
  base.setAttribute('click.delegate', 'elementClick($event)');

  moveSlotElements(element, base);

  const templateEl: DocumentFragment = document.createDocumentFragment();
  templateEl.appendChild(base);

  // ensure the template element has a content property
  if (!FEATURE.htmlTemplateElement) {
    (FEATURE as any).ensureHTMLTemplateElement(templateEl);
  }

  instruction.inheritBindingContext = true;
  // instruction.enhance = true;
  instruction.viewFactory = compiler.compile(templateEl, resources, instruction);

  // Let Aurelia do her thing
  return true;
}

//
// add class to start node
//
function moveSlotElements(node: HTMLElement, base: HTMLElement) {
  if (!node.hasChildNodes()) { return; }
  // containers
  const startSlot = DOMHelper.createElement('div');
  const endSlot = DOMHelper.createElement('div');
  const textSlot = DOMHelper.createElement('span');
  const secondarySlot = DOMHelper.createElement('span');
  const noSlot = DOMHelper.createElement('div');

  // loop child nodes
  while (node.firstChild) {
    const childNode = node.firstChild;
    if (childNode.attributes) {

      const slotAtr = childNode.attributes.getNamedItem('slot');

      // find slots
      if (slotAtr) {

        // start node
        if (slotAtr.value === 'start') {
          if (childNode.hasChildNodes()) {
            while (childNode.firstChild) {
              if (childNode.firstChild.nodeType === Node.TEXT_NODE) {
                const span = DOMHelper.createElement('span');
                span.classList.add('mdc-list-item__start-detail');
                span.appendChild(childNode.firstChild);
                startSlot.appendChild(span);
              } else {
                (childNode.firstChild as HTMLElement).classList.add('mdc-list-item__start-detail');
                startSlot.appendChild(childNode.firstChild);
              }
            }
          }

          // end node
        } else if (slotAtr.value === 'end') {
          if (childNode.hasChildNodes()) {
            while (childNode.firstChild) {
              if (childNode.firstChild.nodeType === Node.TEXT_NODE) {
                const span = DOMHelper.createElement('span');
                span.classList.add('mdc-list-item__end-detail');
                span.appendChild(childNode.firstChild);
                endSlot.appendChild(span);
              } else {
                (childNode.firstChild as HTMLElement).classList.add('mdc-list-item__end-detail');
                endSlot.appendChild(childNode.firstChild);
              }
            }
          }

          // text node
        } else if (slotAtr.value === 'text') {
          if (childNode.hasChildNodes()) {
            while (childNode.firstChild) {
              textSlot.appendChild(childNode.firstChild);
            }
          }

          // secondary node
        } else if (slotAtr.value === 'secondary') {
          if (childNode.hasChildNodes()) {
            while (childNode.firstChild) {
              secondarySlot.appendChild(childNode.firstChild);
            }
          }
        }
        // remove slot node leftovers
        node.removeChild(childNode);

      } else {
        // element without slot attribute
        noSlot.appendChild(childNode);
      }
    } else {
      // element without attribute?
      noSlot.appendChild(childNode);
    }
  }

  // start
  if (startSlot.hasChildNodes()) {
    while (startSlot.firstChild) { base.appendChild(startSlot.firstChild); }
  }
  // build and add noSlot element
  if (secondarySlot.hasChildNodes()) {
    secondarySlot.classList.add('mdc-list-item__secondary-text');
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
  // end
  if (endSlot.hasChildNodes()) {
    while (endSlot.firstChild) { base.appendChild(endSlot.firstChild); }
  }
}
