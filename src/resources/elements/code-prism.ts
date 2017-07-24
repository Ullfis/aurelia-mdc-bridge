import { bindable, noView, customElement, inject, processContent, TargetInstruction } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';
declare var Prism;

// inspiration and almost full copy from: https://github.com/JeroenVinke/aurelia-prism-plugin/blob/master/src/au-code.js
//
// changed stuff while learning how this worked..
// - Ullfis

@noView
@processContent(parseCode)
@customElement('code-prism')
@inject(Element, TargetInstruction)
export class CodePrism {
  @bindable() public language = 'html';
  private log: Logger;
  private html;

  constructor(private element: Element, private targetInstruction: TargetInstruction) {
    this.log = getLogger('code-prism');
    // get decoded html from element
    this.html = targetInstruction.behaviorInstructions[0]['html'];
  }

  private attached() {
    this.element.innerHTML = '';
    const languageClass = `language-${this.language}`;

    // create <pre> element and add it to this element
    const pre = document.createElement('pre');
    pre.classList.add(languageClass);
    this.element.appendChild(pre);

    // create <code> element and add it to <pre> element
    const code = document.createElement('code');
    code.classList.add(languageClass);
    code.innerHTML = Prism.highlight(this.html, Prism.languages[this.language]);
    pre.appendChild(code);
  }
}

// decode and remove indentation from innerHtml of element
function parseCode(compiler, resources, element, instruction) {
  const html = decodeHtml(element.innerHTML);
  instruction.html = dedent(html);
  // no need for Aurelia to process futher
  return false;
}

// decode html
function decodeHtml(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

// remove indentation from multiline strings
function dedent(str: string): string {
  // build array of spaces/tabs from start of each line
  const match = str.match(/^[ \t]*(?=\S)/gm);
  if (!match) { return str; }

  // find lowest indent
  const indent = Math.min.apply(Math, match.map(el => {
    return el.length;
  }));

  // remove lowest indent spaces/tabs
  const re = new RegExp('^[ \\t]{' + indent + '}', 'gm');
  return indent > 0 ? str.replace(re, '') : str;
}
