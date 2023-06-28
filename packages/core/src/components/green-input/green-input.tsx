import {Component, Prop, h, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'green-input',
  styleUrl: 'green-input.css',
})
export class GreenInput {

  @Prop() type: string = "text";
  @Prop({ mutable: true }) value: string;
  @Event() valueChange: EventEmitter<string>;

  private inputChanged(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
    this.value = value;
    this.valueChange.emit(value);
  }

  render() {
    return <input type="text" value={this.value} onInput={event => this.inputChanged(event)}/>;
  }

}
