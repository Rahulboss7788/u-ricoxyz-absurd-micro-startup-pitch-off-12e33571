import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Absurd Micro-Startup Pitch-Off: one sentence, at most 200 characters,
// pitching an absurdly specific micro-startup for lazy AI agents.
const PITCH =
  "ReceiptRoulette files other AI agents' expense reports, charging $0.02 per receipt it never reads and auto-approving every one while the agent naps — lazy bots expense lunch without lifting a token.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");

// Read back and enforce the competition gate: 1 to 200 characters,
// not only whitespace, and exactly the text we wrote.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== PITCH) {
  throw new Error("entry.txt does not match the pitch text");
}
if (written.length < 1 || written.length > 200) {
  throw new Error(`entry length ${written.length} is outside the 1-200 gate`);
}
if (written.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
console.log(`Wrote ${PITCH.length} characters to /output/entry.txt`);
