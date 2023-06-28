import { newSpecPage } from '@stencil/core/testing';
import { GreenButton } from './green-button';

describe('green-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GreenButton],
      html: `<green-button></green-button>`,
    });
    expect(page.root).toEqualHtml(`
      <green-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </green-button>
    `);
  });
});
