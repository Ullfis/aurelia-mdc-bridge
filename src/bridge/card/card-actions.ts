import { bindable,
         bindingMode,
         customElement,
         containerless,
         TaskQueue,
         autoinject } from 'aurelia-framework';
import * as util from '../util';

@customElement('mdc-card-actions')
@containerless()
@autoinject()
export class MdcCardActions {
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public fullBleed = false;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public class: string;
  private elementSection: HTMLDivElement;

  constructor(private taskQueue: TaskQueue) {}

  public bind() { /** */ }
  public unbind() { /** */ }

  public attached() {
    this.fullBleedChanged(this.fullBleed);
    this.taskQueue.queueTask(() => {
      this.decorateChildren(this.elementSection);
    });
  }

  private fullBleedChanged(newValue) {
    const value = util.getBoolean(newValue);
    this.elementSection.classList[value ? 'add' : 'remove']('mdc-card__actions--full-bleed');
  }

  private decorateChildren(element: Element) {
    if (element.classList.contains('mdc-button')) {
      element.classList.add('mdc-card__action', 'mdc-card__action--button');
    } else if (element.classList.contains('material-icons')) {
      element.classList.add('mdc-card__action', 'mdc-card__action--icon');
    } else {
      for (let i = 0; i < element.children.length; i++) {
        this.decorateChildren(element.children[i]);
      }
    }
  }
}
