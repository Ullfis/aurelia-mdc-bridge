import { bindable, bindingMode, customElement, inject, noView } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';

/*
 * Load svg file and add it as inline svg child
 *
 * <svg-obj src="svg-url"></svg-obj>
 *
 * Styles (in this project): src/_styles/_svg.scss
 * - <svg-obj disable="true" class="secondary/primary/md-light/md-18/md-24/md-36/md-48" src="svg-url"></svg-obj>
 *
 * Inspiration: https://stackoverflow.com/questions/24933430/img-src-svg-changing-the-fill-color
 */
@noView()
@customElement('svg-obj')
@inject(Element)
export class SvgObj {
  private static cacheStorage = {};
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public src;
  private log: Logger;

  constructor(private element: Element) {
    this.log = getLogger('svg-obj');
  }

  private async bind() { /** */ }

  private async attached() {
    try {
      const imgUrl = this.src;
      if (!imgUrl) { return; }

      let svgText = SvgObj.cacheStorage[imgUrl];
      if (!svgText) {
        svgText = await fetch(imgUrl).then(res => res.text());
        SvgObj.cacheStorage[imgUrl] = svgText;
      }

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(svgText, 'text/xml');

      // Get the SVG tag, ignore the rest
      const svg = xmlDoc.getElementsByTagName('svg')[0];

      // Remove any invalid XML tags as per http://validator.w3.org
      svg.removeAttribute('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if (!svg.getAttribute('viewBox') && svg.getAttribute('height') && svg.getAttribute('width')) {
        svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'));
      }

      // Add child
      this.element.appendChild(svg);

    } catch (error) {
      this.log.error(error);
    }
  }
}
