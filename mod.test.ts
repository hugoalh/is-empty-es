import { deepStrictEqual } from "node:assert";
import { isEmpty } from "./mod.ts";
Deno.test("Boolean `false`", { permissions: "none" }, () => {
	deepStrictEqual(isEmpty(false), false);
});
Deno.test("Array With 0 Elements", { permissions: "none" }, () => {
	deepStrictEqual(isEmpty([]), true);
});
Deno.test("Array With 1 Element", { permissions: "none" }, () => {
	deepStrictEqual(isEmpty([{}]), false);
});
Deno.test("Plain Object With 0 Entries", { permissions: "none" }, () => {
	deepStrictEqual(isEmpty({}), true);
});
Deno.test("Map With 0 Entries", { permissions: "none" }, () => {
	deepStrictEqual(isEmpty(new Map()), true);
});
Deno.test("Set With 0 Entries", { permissions: "none" }, () => {
	deepStrictEqual(isEmpty(new Set()), true);
});
