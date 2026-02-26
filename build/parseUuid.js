import { UuidRegExp } from "./UuidRegExp.js";
export function parseUuid(value) {
    return typeof (value) === "string" ? UuidRegExp.exec(value)?.groups?.uuid.toLowerCase() : undefined;
}
