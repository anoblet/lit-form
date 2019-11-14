import { Field } from "./field";
import { html } from "lit-element";

export class Text extends Field {
  value;

  toString() {
    return `
      <input name="${this.name}" type="checkbox" ?checked=${this.value} />
    `;
  }

  toTemplateResult() {
    return html`
      <fieldset>
        <legend>${this.label}</legend>
        <input name="${this.name}" type="text" .value=${this.value} />
      </fieldset>
    `;
  }
}
