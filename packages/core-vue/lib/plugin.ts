import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@zelenyjan/stencil-vue-sample-components/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    if (typeof (window as any) !== 'undefined') {
      await applyPolyfills();
      await defineCustomElements(window, {
        ce: (eventName: string, opts: any) => new CustomEvent(eventName.toLowerCase(), opts),
      } as any);
    }
  },
};
