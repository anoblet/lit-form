import { Field } from "./field";
import { html } from "lit-element";

export class Switch extends Field {
  value: string;

  toString() {
    return `
      <label>${this.label}</label>
    `;
  }

  toTemplateResult() {
    return html`
      <label>${this.label}</label>
    `;
  }
}
