const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("../public/script.js");

test("greet function returns the correct greeting string", () => {
  const result = greet("World");
  assert.strictEqual(result, "Hello, World!");
});
