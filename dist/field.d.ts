export declare class Field {
    name: string;
    label: string;
    value: any;
    constructor(props: any);
    toTemplateResult(): import("lit-html").TemplateResult;
    render(): import("lit-html").TemplateResult;
}
