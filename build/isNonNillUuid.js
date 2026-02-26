import { NIL, validate } from "uuid";
export function isNonNilUuid(value) {
    return validate(value) && value !== NIL;
}
