import { bindable, bindingMode, customElement, inject, noView } from 'aurelia-framework';
import { getLogger, Logger } from 'aurelia-logging';

@customElement('report-element')
export class ReportElement {
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public lines = 4;
  private reports: string[] = [];
  private log: Logger;

  constructor(private element: Element) {
    this.log = getLogger('report-element');
  }

  public add(report: string) {
    this.reports.push(new Date().toISOString().substr(11, 8) + ' ' + report);
    if (this.reports.length > this.lines) {
      this.reports.shift();
    }
  }
}
