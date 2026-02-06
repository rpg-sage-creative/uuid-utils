import type { Optional } from "@rsc-utils/type-utils";
import { type UUID } from "./types.js";
/** Returns a normalized UUID (lowerCase) if it is a valid UUID, otherwise it returns NIL_UUID. */
export declare function orNilUuid(value: Optional<string>): UUID;
