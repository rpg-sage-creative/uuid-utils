import { tagLiterals } from "@rsc-utils/template-literal-utils";
import { parseUuid, randomUuid } from "../build/index.js";

describe("uuid", () => {
	describe("parseUuid", () => {

		const uuid = randomUuid();

		/** [ [input, output], ... ] */
		const tests = [
			[uuid, uuid],
			[`{"id":"${uuid}"}`, uuid],
			["1234567890123456", undefined],
			["control", undefined],
		];

		tests.forEach(([input, output]) => {
			test(tagLiterals`parseUuid(${input}) === ${output}`, () => {
				expect(parseUuid(input)).toBe(output);
			});
		})
	});
});
