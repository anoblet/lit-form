import { html } from 'lit-html';
import { html as html$1 } from 'lit-element';

class Field {
    constructor(props) {
        Object.assign(this, props);
    }
    toTemplateResult() {
        return html ``;
    }
    render() {
        return this.toTemplateResult();
    }
}

class Checkbox extends Field {
    toString() {
        return `
      <input name="${this.name}" type="checkbox" ?checked=${this.value} />
    `;
    }
    toTemplateResult() {
        return html$1 `
      <label>${this.label}</label
      ><input name="${this.name}" type="checkbox" ?checked=${this.value} />
    `;
    }
}

class Switch extends Field {
    toString() {
        return `
      <label>${this.label}</label>
    `;
    }
    toTemplateResult() {
        return html$1 `
      <label>${this.label}</label>
    `;
    }
}

class Text extends Field {
    toString() {
        return `
      <input name="${this.name}" type="checkbox" ?checked=${this.value} />
    `;
    }
    toTemplateResult() {
        return html$1 `
      <fieldset>
        <legend>${this.label}</legend>
        <input
          name="${this.name}"
          type="text"
          .value=${this.value}
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
        />
      </fieldset>
    `;
    }
}

class Textarea extends Field {
    toString() {
        return `
      <input name="${this.name}" type="checkbox" ?checked=${this.value} />
    `;
    }
    toTemplateResult() {
        return html$1 `
      <label>${this.label}</label><textarea>${this.value}</textarea>
    `;
    }
}

class Form {
    constructor(props) {
        this.fields = [];
        Object.assign(this, props);
    }
    addField(field) {
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
        return html$1 `
      <form>
        ${this.fields.map(field => field.render())}
        <button type="button">Reset</button
        ><button type="button" @click=${this.onSubmit}>Submit</button>
      </form>
    `;
    }
    render() {
        return this.toTemplateResult();
    }
}

export { Checkbox, Field, Form, Switch, Text, Textarea };
