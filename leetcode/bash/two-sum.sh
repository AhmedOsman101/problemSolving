#!/usr/bin/env bash
# Problem: Two Sum
# Link: https://leetcode.com/problems/two-sum

two-sum() {
  # shellcheck disable=SC2124
  local target="${@: -1}" i res
  local -a nums=("${@:1:$#-1}")
  local -A memo=()

  for ((i = 0; i < $# - 1; ++i)); do
    res=$((target - nums[i]))
    if [[ -v "memo[${res}]" ]]; then
      printf '%s %s\n' "${memo[${res}]}" "${i}"
      return 0
    fi
    memo[${nums[i]}]=${i}
  done

  return 1
}

# Run manually: bash leetcode/bash/two-sum.sh
if [[ ${BASH_SOURCE[0]} == "$0" ]]; then
  two-sum "$@"
fi
