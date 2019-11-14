export interface form {
    fields: field[];
}
export interface field {
    type: text | "textarea";
}
export interface text {
    name: string;
    value: string;
}
