import { Field } from "./field";
import { html } from "lit-element";

export class Button extends Field {
  public text: string;

  toTemplateResult() {
    return html`
      <button>${this.text}</button>
    `;
  }
}
