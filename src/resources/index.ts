import { FrameworkConfiguration } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    './attributes/svg-inline',
    './elements/code-prism',
    './value-converters/stringify'
  ]);
}
