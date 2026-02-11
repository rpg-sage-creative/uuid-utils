import { tagLiterals } from "@rsc-utils/template-literal-utils";
import { randomUuid, UuidMatcher } from "../build/index.js";

describe("uuid", () => {
	describe("UuidMatcher", () => {

		const uuid = randomUuid();
		const matcher = new UuidMatcher(uuid);

		/** [ [input, output], ... ] */
		const tests = [
			[uuid, true],
			["control", false],
			[matcher, true],
			[null, false],
		];

		tests.forEach(([input, output]) => {
			test(tagLiterals`matcher.matches(${input}) === ${output}`, () => {
				expect(matcher.matches(input)).toBe(output);
			});
		});
	});

});
