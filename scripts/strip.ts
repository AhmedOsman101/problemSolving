#!/usr/bin/env bun
/**
 * Turn a local TypeScript solution into a submission-ready JavaScript file.
 *
 * - removes `import ... from "bun:test"` and every `describe(...)` block
 * - strips TypeScript types with esbuild
 * - removes `export` modifiers (sites expect a plain function/class)
 *
 * Usage: bun scripts/strip.ts <file.ts>
 */

import { readFile } from "node:fs/promises";

const file = process.argv[2];

if (!file) {
  console.error("usage: bun scripts/strip.ts <file.ts>");
  process.exit(1);
}

const source = await readFile(file, "utf8");

function matchingParen(text: string, openIndex: number): number {
  let depth = 0;
  let i = openIndex;
  let state: "code" | "line" | "block" | "single" | "double" | "template" =
    "code";

  for (; i < text.length; i++) {
    const char = text[i]!;
    const next = text[i + 1];

    if (state === "line") {
      if (char === "\n") state = "code";
      continue;
    }

    if (state === "block") {
      if (char === "*" && next === "/") {
        state = "code";
        i++;
      }
      continue;
    }

    if (state === "single" || state === "double" || state === "template") {
      if (char === "\\") {
        i++;
        continue;
      }

      if (
        (state === "single" && char === "'") ||
        (state === "double" && char === '"') ||
        (state === "template" && char === "`")
      ) {
        state = "code";
      }
      continue;
    }

    if (char === "/" && next === "/") {
      state = "line";
      i++;
      continue;
    }

    if (char === "/" && next === "*") {
      state = "block";
      i++;
      continue;
    }

    if (char === "'") {
      state = "single";
      continue;
    }

    if (char === '"') {
      state = "double";
      continue;
    }

    if (char === "`") {
      state = "template";
      continue;
    }

    if (char === "(") {
      depth++;
      continue;
    }

    if (char === ")") {
      depth--;
      if (depth === 0) return i;
    }
  }

  return -1;
}

function removeTestCode(text: string): string {
  let result = text.replace(
    /^import\s+\{[^}]*\}\s+from\s+["']bun:test["'];?[^\n]*\n?/gm,
    ""
  );

  for (;;) {
    const match = /\bdescribe\s*\(/.exec(result);
    if (!match) break;

    const open = match.index + match[0].length - 1;
    const close = matchingParen(result, open);
    if (close === -1) break;

    let start = match.index;
    while (
      start > 0 &&
      (result[start - 1] === " " || result[start - 1] === "\t")
    ) {
      start--;
    }

    let end = close + 1;
    if (result[end] === ";") end++;
    while (result[end] === "\n" || result[end] === "\r") end++;

    result = result.slice(0, start) + result.slice(end);
  }

  return `${result.replace(/\n{3,}/g, "\n\n").trimEnd()}\n`;
}

const withoutTests = removeTestCode(source);

// Submission targets are scripts, not modules: drop module syntax before
// handing the file to esbuild so it cannot emit `export { ... }` at the end.
const code = withoutTests
  .replace(/^export\s*\{[^}]*\}\s*;?[^\n]*\n?/gm, "")
  .replace(/^export\s+\*\s+from[^\n]*\n?/gm, "")
  .replace(/^export\s+(?:default\s+)?/gm, "");

const loader = file.endsWith(".tsx") ? "tsx" : "ts";

let result: ReturnType<typeof Bun.spawnSync>;

try {
  result = Bun.spawnSync({
    cmd: ["esbuild", `--loader=${loader}`, "--log-level=warning"],
    stdin: new TextEncoder().encode(code),
    stdout: "pipe",
    stderr: "pipe",
  });
} catch {
  console.error("error: esbuild not found in PATH");
  process.exit(1);
}

if (!result.success) {
  if (result.stderr) {
    process.stderr.write(result.stderr);
  }
  process.exit(1);
}

if (!result.stdout) {
  console.error("error: esbuild produced no output");
  process.exit(1);
}

let js = result.stdout.toString();
js = js.replace(/\/\* @__PURE__ \*\/ /g, "");
js = `${js.trimEnd()}\n`;

process.stdout.write(js);
