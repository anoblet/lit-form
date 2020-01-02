import { Field } from "./field";
import { html } from "lit-element";
export class Button extends Field {
    toTemplateResult() {
        return html `
      <button>${this.text}</button>
    `;
    }
}
