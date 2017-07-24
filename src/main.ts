import { Aurelia } from 'aurelia-framework';
import environment from './environment';

export function configure(aurelia: Aurelia) {
  let useLogging = true;

  aurelia.use
    .standardConfiguration()
    .feature('./bridge/index')
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
    useLogging = false;
  }
  // document.baseURI = '';

  aurelia.use.plugin('aurelia-google-analytics', config => {
      config.init('UA-103062249-1');
      config.attach({
        logging: { enabled: false },
        pageTracking: { enabled: useLogging },
        clickTracking: { enabled: useLogging },
        exceptionTracking: { enabled: useLogging }
      });
    });

  aurelia.start().then(() => aurelia.setRoot());
}
