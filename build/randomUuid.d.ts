import type { STRICT_UUID } from "./types.js";
type UuidArgs = {
    /** sequence number for generating mulitple UUID values for a specific timestamp */
    seq?: number;
    /** the timestamp to use as the date portion of the UUID */
    ts?: Date | number;
};
/**
 * A convenience method for uuid.v7().
 * Why? ... Sometimes I am lazy and only want one import in my file.
 * This way I can import { isUuid, randomUuid } from "@rsc-utils/core-utils" instead of needing to also import from uuid.
*/
export declare function randomUuid(args?: UuidArgs): STRICT_UUID;
export {};
