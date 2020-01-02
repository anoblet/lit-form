import { Field } from "./field";
export declare class Form {
    fields: Field[];
    actions: any;
    constructor(props: {});
    addField(field: Field): this;
    onSubmit(): void;
    toString(): string;
    toTemplateResult(): import("lit-element").TemplateResult;
    render(): import("lit-element").TemplateResult;
}
