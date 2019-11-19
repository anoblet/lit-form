import { html } from "lit-html";

export class Field {
  disabled: boolean;
  label: string;
  name: string;
  value: any;

  constructor(props) {
    Object.assign(this, props);
  }

  toTemplateResult() {
    return html``;
  }

  render() {
    return this.toTemplateResult();
  }
}
