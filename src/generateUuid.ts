import { v7 } from "uuid";
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
 * This way I can import { isUuid, generateUuid } from "@rsc-utils/core-utils" instead of needing to also import from uuid.
*/
export function generateUuid(args?: UuidArgs): STRICT_UUID {
	const msecs = +(args?.ts as Date) || undefined;
	const seq = args?.seq;
	return v7({ msecs, seq }) as STRICT_UUID;
}

/** @deprecate use generateUuid() */
export const randomUuid = generateUuid;