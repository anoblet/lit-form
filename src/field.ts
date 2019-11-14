import { html } from "lit-html";

export class Field {
  name: string;
  label: string;
  value: any;

  constructor(props) {
    console.log("constructor", props.value);
    Object.assign(this, props);
  }

  toTemplateResult() {
    return html``;
  }

  render() {
    return this.toTemplateResult();
  }
}
