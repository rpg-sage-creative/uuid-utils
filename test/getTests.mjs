import { randomUuid, NIL_UUID } from "../build/index.js";

const uuid = randomUuid();

/** [ [input, isUuidResult, isNilUuidResult, isNonNilUuidResult, orNilUuidResult], ... ]  */
const tests = [
	[NIL_UUID, true, true, false, NIL_UUID],
	[uuid, true, false, true, uuid],
	["control", false, false, false, NIL_UUID],
];

export function getTests(which) {
	return { uuid, tests };
}