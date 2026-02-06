import type { TypedRegExp } from "@rsc-utils/type-utils";
// import { regex } from "regex";
import type { UUID } from "./types.js";

/*
export const UuidRegExp = regex("i")`
	(?<uuid>
		[0-9a-f]{8}
		-
		[0-9a-f]{4}
		-
		[1-5]
		[0-9a-f]{3}
		-
		[89ab]
		[0-9a-f]{3}
		-
		[0-9a-f]{12}

		|

		00000000-0000-0000-0000-000000000000
	)
` as TypedRegExp<{ uuid:UUID }>;
*/

export const UuidRegExp = /(?<uuid>[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)/iv as TypedRegExp<{ uuid:UUID }>;