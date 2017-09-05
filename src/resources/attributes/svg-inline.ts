import { bindable, bindingMode, customAttribute, inject } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';

/*
 * Replace element with inline SVG (no bindings possible)
 *
 * <i svg-inline="src: svg-url;"></i>
 *
 * Adding class 'svg-inline' to the svg element.
 * Styles (in this project): src/_styles/_svg.scss
 * - <i class="secondary/primary/md-light/md-18/md-24/md-36/md-48" svg-inline="src: svg-url;"></i>
 *
 * Inspiration: https://stackoverflow.com/questions/24933430/img-src-svg-changing-the-fill-color
 */
@customAttribute('svg-inline')
@inject(Element)
export class SvgInline {
  public static cacheStorage = {};
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public src;
  private log: Logger;

  constructor(private element: Element) {
    this.log = getLogger('svg-inline');
  }

  private async attached() {
    try {
      const imgId = this.element.getAttribute('id');
      const imgClass = this.element.getAttribute('class');
      const imgUrl = this.src;
      if (!imgUrl) { return; }

      let svgText = SvgInline.cacheStorage[imgUrl];
      if (!svgText) {
        svgText = await fetch(imgUrl).then(res => res.text());
        SvgInline.cacheStorage[imgUrl] = svgText;
      }

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
        svg.setAttribute('class', imgClass.replace('au-target', '') + ' svg-inline');
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
