import { html } from "lit-html";
export class Field {
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
