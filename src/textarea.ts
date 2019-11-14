import { Field } from "./field";
import { html } from "lit-element";

export class Textarea extends Field {
  value: string;

  toString() {
    return `
      <input name="${this.name}" type="checkbox" ?checked=${this.value} />
    `;
  }

  toTemplateResult() {
    return html`
      <label>${this.label}</label><textarea>${this.value}</textarea>
    `;
  }
}
