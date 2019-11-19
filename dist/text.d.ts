import { Field } from "./field";
export declare class Text extends Field {
    readonly: boolean;
    value: string;
    toString(): string;
    toTemplateResult(): import("lit-element").TemplateResult;
}
