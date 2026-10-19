# Problem Solving

Task runner for this repo. Run `mask --help` to list tasks.

## new (platform) (language) (slug) (url) [title]

> Scaffold a solution file with the problem link as a comment.

**OPTIONS**

- force
  - flags: -f --force
  - type: boolean
  - desc: Overwrite the file if it already exists

```bash
set -euo pipefail
ROOT=${MASKFILE_DIR:?}

case $platform in
  leetcode | codewars | etc) ;;
  *)
    echo "error: platform must be leetcode, codewars or etc" >&2
    exit 1
    ;;
esac

if [[ ! $slug =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
  echo "error: slug must be kebab-case, e.g. two-sum (got '$slug')" >&2
  exit 1
fi

if [[ ! $url =~ ^https?:// ]]; then
  echo "error: url must start with http:// or https:// (got '$url')" >&2
  exit 1
fi

case $language in
  ts | typescript)
    template=typescript.ts
    target="$platform/typescript/$slug.test.ts"
    run="bun test $target"
    ;;
  bash | sh)
    template=bash.sh
    target="$platform/bash/$slug.sh"
    extra_template=bash.bats
    extra_target="$platform/bash/$slug.bats"
    run="bats $platform/bash/$slug.bats"
    ;;
  php)
    template=php.php
    target="$platform/php/$slug.php"
    run="php $target"
    ;;
  *)
    echo "error: language must be ts, bash or php (got '$language')" >&2
    exit 1
    ;;
esac

if [[ -e $ROOT/$target && ${force:-false} != true ]]; then
  echo "error: $target already exists (pass --force to overwrite)" >&2
  exit 1
fi

if [[ -n ${extra_target:-} && -e $ROOT/$extra_target && ${force:-false} != true ]]; then
  echo "error: $extra_target already exists (pass --force to overwrite)" >&2
  exit 1
fi

if [[ -z ${title:-} ]]; then
  title=$(tr '-' ' ' <<<"$slug" | awk '{ for (i = 1; i <= NF; i++) $i = toupper(substr($i, 1, 1)) substr($i, 2) } 1')
fi

# Derive a function name from the slug: camelCase for TS/PHP, as-is (dashes
# allowed) for Bash. A leading digit gets an underscore prefix.
case $language in
  ts | typescript)
    func=$(tr '-' ' ' <<<"$slug" | awk '{ for (i = 1; i <= NF; i++) $i = (i == 1 ? tolower(substr($i, 1, 1)) : toupper(substr($i, 1, 1))) substr($i, 2) } 1' | tr -d ' ')
    ;;
  php)
    func=$(tr '-' '_' <<<"$slug")
    ;;
  bash | sh)
    func=$slug
    ;;
  *)
    func=solve
    ;;
esac

if [[ $func =~ ^[0-9] ]]; then
  func="_$func"
fi

# Escape characters that are special in a sed replacement.
escape() {
  printf '%s' "$1" | sed -e 's/[&|\\]/\\&/g'
}

dest="$ROOT/$target"

render() {
  local tmpl=${1}
  local out=${2}

  mkdir -p "$(dirname "${out}")"
  sed \
    -e "s|{{TITLE}}|$(escape "$title")|g" \
    -e "s|{{URL}}|$(escape "$url")|g" \
    -e "s|{{SLUG}}|$(escape "$slug")|g" \
    -e "s|{{FUNC}}|$(escape "$func")|g" \
    -e "s|{{PLATFORM}}|$(escape "$platform")|g" \
    "$ROOT/templates/$tmpl" >"$out"
}

render "$template" "$dest"
if [[ -n ${extra_template:-} ]]; then
  render "$extra_template" "$ROOT/$extra_target"
fi

if [[ $template == bash.sh ]]; then
  chmod +x "$dest"
fi

echo "created $target"
if [[ -n ${extra_target:-} ]]; then
  echo "created $extra_target"
fi
echo "run:     $run"
```

## run (platform) (language) (slug)

> Run one solution by platform and language.

```bash
set -euo pipefail
cd "${MASKFILE_DIR:?}"

case $language in
  ts | typescript) exec bun test "$platform/typescript/$slug.test.ts" ;;
  bash | sh) exec bats "$platform/bash/$slug.bats" ;;
  php) exec php "$platform/php/$slug.php" ;;
  *)
    echo "error: language must be ts, bash or php (got '$language')" >&2
    exit 1
    ;;
esac
```

## strip (file)

> Print a submission-ready JavaScript version of a TypeScript solution.

**OPTIONS**

- out
  - flags: -o --out
  - type: string
  - desc: Write the result to a file instead of stdout

```bash
set -euo pipefail
cd "${MASKFILE_DIR:?}"

if [[ ! -f $file ]]; then
  mapfile -t matches < <(find leetcode codewars etc -type f -name "$(basename "$file")" -path '*/typescript/*')

  if ((${#matches[@]} == 1)); then
    file=${matches[0]}
  elif ((${#matches[@]} == 0)); then
    echo "error: file not found: $file" >&2
    exit 1
  else
    echo "error: '$file' is ambiguous; pass a full path. Matches:" >&2
    printf '  %s\n' "${matches[@]}" >&2
    exit 1
  fi
fi

if [[ $file != *.ts ]]; then
  echo "error: expected a .ts file (got '$file')" >&2
  exit 1
fi

if [[ -n ${out:-} ]]; then
  bun scripts/strip.ts "$file" >"$out"
  echo "wrote $out" >&2
else
  bun scripts/strip.ts "$file"
fi
```

## test

> Run the TypeScript and Bash test suites.

```bash
set -euo pipefail
cd "${MASKFILE_DIR:?}"

bun test

mapfile -t bats_files < <(find leetcode codewars etc -name '*.bats' -type f)
if ((${#bats_files[@]})); then
  bats --print-output-on-failure "${bats_files[@]}"
fi
```

## lint

> Type-check TypeScript, shellcheck bash, lint PHP syntax.

```bash
set -euo pipefail
cd "${MASKFILE_DIR:?}"

echo "==> TypeScript types"
bun check

echo "==> Bash (shellcheck)"
mapfile -t bash_files < <(find leetcode codewars etc lib -name '*.sh' -type f)
if ((${#bash_files[@]})); then
  shellcheck "${bash_files[@]}"
fi

echo "==> PHP syntax"
mapfile -t php_files < <(find leetcode codewars etc lib -name '*.php' -type f)
for file in "${php_files[@]}"; do
  php -l "$file" >/dev/null
done
```

## check

> Run every check: tests and lint.

```bash
set -euo pipefail
cd "${MASKFILE_DIR:?}"

$MASK test
$MASK lint

echo "==> all checks passed"
```

## fmt

> Format TypeScript (biome), Bash (shellfmt) and PHP (phpfmt).

```bash
set -euo pipefail
cd "${MASKFILE_DIR:?}"

echo "==> TypeScript (biome)"
mapfile -t ts_files < <(find leetcode codewars etc scripts -name '*.ts' -type f)
if ((${#ts_files[@]})); then
  biome-check "${ts_files[@]}"
fi

echo "==> Bash (shellfmt)"
mapfile -t bash_files < <(find leetcode codewars etc lib -name '*.sh' -type f)
for file in "${bash_files[@]}"; do
  shellfmt -i -f "$file"
done

echo "==> PHP (phpfmt)"
phpfmt leetcode codewars etc lib
```
