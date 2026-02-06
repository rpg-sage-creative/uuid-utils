import type { Optional } from "@rsc-utils/type-utils";
import type { UUID } from "./types.js";
/** A convenient method for grabbing the first UUID present in the string. */
export declare function parseUuid(value: Optional<string>): UUID | undefined;
