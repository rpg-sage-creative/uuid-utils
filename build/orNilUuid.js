import { validate } from "uuid";
import { NIL_UUID } from "./types.js";
export function orNilUuid(value) {
    return validate(value) ? value.toLowerCase() : NIL_UUID;
}
