import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';

/*
 * Replace all SVG images with inline SVG
 * Stolen from: https://stackoverflow.com/questions/24933430/img-src-svg-changing-the-fill-color
 */
@customAttribute('svg-inline')
@inject(Element)
export class SvgInline {
  private log: Logger;

  constructor(private element: Element) {
    this.log = getLogger('mdc-button');
  }

  private async attached() {
    try {
      const imgId = this.element.getAttribute('id');
      const imgClass = this.element.getAttribute('class');
      const imgUrl = this.element.getAttribute('src');
      if (!imgUrl) { return; }

      const svgText = await fetch(imgUrl).then(res => res.text());
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(svgText, 'text/xml');

      // Get the SVG tag, ignore the rest
      const svg = xmlDoc.getElementsByTagName('svg')[0];

      // Add replaced image's ID to the new SVG
      if (typeof imgId !== 'undefined') {
        svg.setAttribute('id', imgId);
      }

      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        svg.setAttribute('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      svg.removeAttribute('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if (!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
        svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'));
      }

      // Replace image with new SVG
      this.element.parentNode.replaceChild(svg, this.element);

    } catch (error) {
      this.log.error(error);
    }
  }
}
