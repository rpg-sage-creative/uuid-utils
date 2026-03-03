import { v7 } from "uuid";
export function generateUuid(args) {
    const msecs = typeof (args?.ts) === "bigint" ? +args.ts.toString() || undefined : +args?.ts || undefined;
    const seq = typeof (args?.seq) === "bigint" ? +args.seq.toString() || undefined : args?.seq;
    return v7({ msecs, seq });
}
export const randomUuid = generateUuid;
