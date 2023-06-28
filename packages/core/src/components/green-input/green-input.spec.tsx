import { newSpecPage } from '@stencil/core/testing';
import { GreenInput } from './green-input';

describe('green-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GreenInput],
      html: `<green-input></green-input>`,
    });
    expect(page.root).toEqualHtml(`
      <green-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </green-input>
    `);
  });
});
