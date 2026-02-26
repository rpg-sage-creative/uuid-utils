import { v7 } from "uuid";
export function randomUuid(args) {
    const msecs = +args?.ts || undefined;
    const seq = args?.seq;
    return v7({ msecs, seq });
}
