import { Config } from '@stencil/core';
import {ComponentModelConfig, vueOutputTarget} from '@stencil/vue-output-target';


const componentModels: ComponentModelConfig[] = [
  {
    elements: ['green-input'],
    event: 'valueChange', // emit event from component
    externalEvent: 'on-input', // vue.js(js) event
    targetAttr: 'value',
  },
];

export const config: Config = {
  namespace: 'core',
  extras: {
    enableImportInjection: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    vueOutputTarget({
      componentCorePackage: '@zelenyjan/stencil-vue-sample-components',
      proxiesFile: '../core-vue/lib/components.ts',
      componentModels: componentModels,
    }),
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
