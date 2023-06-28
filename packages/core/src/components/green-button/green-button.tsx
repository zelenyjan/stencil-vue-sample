import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'green-button',
  styleUrl: 'green-button.css',
  shadow: true,
})
export class GreenButton {

  @Prop() label: string;

  render() {
    return <button type="button">{this.label}</button>
  }

}
