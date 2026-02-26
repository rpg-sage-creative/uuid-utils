import { validate } from "uuid";
export function isUuid(value) {
    return validate(value);
}
