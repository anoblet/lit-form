import { Checkbox } from "./checkbox";
import { Field } from "./field";
import { Switch } from "./switch";
import { Text } from "./text";
import { Textarea } from "./textarea";
import { html } from "lit-element";

const generateField = field => {
  switch (field.type) {
    case "checkbox":
      return new Checkbox(field).render();
    case "text":
      return new Text(field).render();
    case "textarea":
      return new Textarea(field).render();
    case "switch":
      return new Switch(field).render();
  }
};

export class Form {
  fields: Field[] = [];
  actions;

  constructor(props: {}) {
    Object.assign(this, props);
  }

  addField(field: Field) {
    this.fields.push(field);
    return this;
  }

  onSubmit() {
    return;
  }

  toString() {
    return `<form>${this.fields.map(field => `${field}`)}</form>`;
  }

  toTemplateResult() {
    return html`
      <form>
        ${this.fields.map(field => field.render())}
        ${this.actions.map(action => action.render())}
      </form>
    `;
  }

  render() {
    return this.toTemplateResult();
  }
}
