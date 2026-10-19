# Agent notes

Repo layout, commands and conventions are documented in `README.md`. Read it first.

Rules when adding or editing a solution:

1. Keep the platform/language layout: `leetcode|codewars|etc/<language>/...`.
2. Create files with `mask new <platform> <language> <slug> <url> [title]` instead
   of writing them by hand, so the header is consistent.
3. Every solution and test file must start with the problem title and link comment.
4. Do not move solutions into a single `typescript/` (or similar) language folder
   at the root; language folders stay inside each platform folder.
5. Verify with `mask check` before claiming work is done. `mask test` is enough
   while iterating. Do not add a `package.json` script named `check`: it shadows
   Bun's builtin `bun check` type checker.
6. JavaScript-only sites: keep the TypeScript solution as the source of truth and
   generate the submission with `mask strip <file.ts>`. Never hand-maintain a
   separate JS copy.

Language conventions:

- TypeScript: `<slug>.test.ts`, Bun test API, `bun check` for types.
- Bash: `<slug>.sh` (functions only, main guarded with
  `if [[ ${BASH_SOURCE[0]} == "$0" ]]`) plus `<slug>.bats` using bats-assert.
- PHP: `<slug>.php` with `check(...)` from `lib/php/test.php`.

Useful commands:

- `mask run <platform> <language> <slug>` — run one solution
- `mask strip <file.ts>` — print submission-ready JavaScript for a TS solution
- `mask test` — bun test, bats
- `bun check` — TypeScript type check (builtin, reads `tsconfig.json`)
- `mask lint` — bun check, shellcheck, php -l
- `mask check` — tests + lint
- `mask fmt` — biome (TS), shellfmt (Bash), phpfmt (PHP)

The field guide for humans is `docs/index.html`; keep it in sync when commands or
conventions change.
