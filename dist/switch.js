import { Field } from "./field";
import { html } from "lit-element";
export class Switch extends Field {
    toString() {
        return `
      <label>${this.label}</label>
    `;
    }
    toTemplateResult() {
        return html `
      <label>${this.label}</label>
    `;
    }
}
