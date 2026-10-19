#!/usr/bin/env bats
# Problem: {{TITLE}}
# Link: {{URL}}

bats_load_library bats-support
bats_load_library bats-assert

setup() {
  source "${BATS_TEST_DIRNAME}/{{SLUG}}.sh"
}

@test "example 1" {
  skip "TODO: implement"
}
