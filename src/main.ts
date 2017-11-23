import { Aurelia } from 'aurelia-framework';
import environment from './environment';
import { ConfigBuilder } from './bridge/index';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('./bridge/index', (b: ConfigBuilder) => b.useAll())
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();

  } else {
    aurelia.use.plugin('aurelia-google-analytics', config => {
      config.init('UA-103062249-1');
      config.attach({
        logging: { enabled: false },
        pageTracking: { enabled: true },
        clickTracking: { enabled: true },
        exceptionTracking: { enabled: true }
      });
    });
  }

  aurelia.start().then(() => aurelia.setRoot());
}
