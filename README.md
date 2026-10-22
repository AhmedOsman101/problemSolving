# Problem Solving

Solutions to problems from [LeetCode](https://leetcode.com/), [CodeWars](https://www.codewars.com/)
and other sites (`etc/`), written in TypeScript, Bash and PHP.

Every solution file starts with the problem's title and link:

```ts
// Problem: Two Sum
// Link: https://leetcode.com/problems/two-sum/
```

New here? Read the field guide at [`docs/index.html`](docs/index.html)
(`xdg-open docs/index.html`).

## Layout

Solutions are grouped by platform, then by language:

```
leetcode/
  typescript/   two-sum.test.ts
  bash/         two-sum.sh + two-sum.bats
  php/          two-sum.php
codewars/
  typescript/  bash/  php/
etc/            (problems that are not from LeetCode or CodeWars)
  typescript/  bash/  php/
templates/      starter files used by `mask new`
lib/            small helper for PHP solutions
docs/           field guide (open docs/index.html)
maskfile.md     task runner (scaffold / run / test / lint / fmt)
```

File names are kebab-case and match the URL slug (`two-sum`, `sum-of-digits`).
Tests live next to the solution: in the same file for TypeScript and PHP, and in
a sibling `<slug>.bats` file for Bash.

## Setup

Requires `bun`, `php`, `bats` (with bats-assert and bats-support), `shellcheck`,
`esbuild` (for `mask strip`) and [`mask`](https://github.com/jacobdeichert/mask).

```bash
bun install
```

## Adding a problem

```bash
mask new leetcode typescript two-sum https://leetcode.com/problems/two-sum/
mask new codewars php sum-of-digits https://www.codewars.com/kata/541c8630095125aba6000c00
mask new etc bash fizz-buzz https://example.com/fizz-buzz "Fizz Buzz"
```

`mask new` copies the matching file from `templates/` and fills in the title,
the problem link and the slug. Bash gets both a `<slug>.sh` solution and a
`<slug>.bats` test file. Existing files are only overwritten with `--force`.

## Running

| Task | Command |
| --- | --- |
| All tests | `mask test` |
| One solution | `mask run leetcode typescript two-sum` |
| TypeScript tests | `bun test` (or `bun test leetcode/typescript/two-sum.test.ts`) |
| TypeScript types | `bun check` |
| Bash tests | `bats leetcode/bash/two-sum.bats` |
| Bash solution | `bash leetcode/bash/two-sum.sh` |
| PHP | `php leetcode/php/two-sum.php` |
| Lint everything | `mask lint` |
| Everything (tests + lint) | `mask check` |
| Format everything | `mask fmt` |
| Submission-ready JS | `mask strip leetcode/typescript/two-sum.test.ts` |

## Submitting JavaScript

Some sites only accept JavaScript. Keep the TypeScript file as the source of
truth (that is what is tested), then strip it for submission:

```bash
mask strip leetcode/typescript/two-sum.test.ts
```

`mask strip` removes the `bun:test` import and every `describe(...)` block,
erases TypeScript types with esbuild, drops `export` modifiers, and prints plain
JavaScript. Pass `-o/--out` to write a file instead of printing:

```bash
mask strip -o /tmp/two-sum.js leetcode/typescript/two-sum.test.ts
```

A bare file name is resolved if it is unique, e.g. `mask strip two-sum.test.ts`.

## Conventions

- Every solution and test file begins with `Problem:` / `Link:` comments
  (`//` for TypeScript, `#` for Bash, PHP and bats).
- TypeScript files are named `<slug>.test.ts` so `bun test` discovers them
  without any extra configuration.
- `mask new` derives the function name from the slug: camelCase for TypeScript
  and Lua (`two-sum` → `twoSum`), snake_case for PHP (`two-sum` → `two_sum`),
  as-is for Bash (`two-sum`).
- Bash solutions only define functions and end with
  `if [[ ${BASH_SOURCE[0]} == "$0" ]]` so the `.bats` file can source them
  without running anything. Tests use `bats-assert` (`run`, `assert_output`, ...).
- PHP solutions call the `check(...)` helper from `lib/php/test.php` at the
  bottom of the file and exit non-zero on failure.
