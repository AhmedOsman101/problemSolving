#!/usr/bin/env bats
# Problem: Two Sum
# Link: https://leetcode.com/problems/two-sum

bats_load_library bats-support
bats_load_library bats-assert

setup() {
  source "${BATS_TEST_DIRNAME}/two-sum.sh"
}

@test "example 1" {
  run two-sum 2 7 11 15 9
  assert_success
  assert_output "0 1"
}

@test "example 2" {
  run two-sum 3 2 4 6
  assert_success
  assert_output "1 2"
}

@test "example 3" {
  run two-sum 3 3 6
  assert_success
  assert_output "0 1"
}
