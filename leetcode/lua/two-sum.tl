-- Problem: Two Sum
-- Link: https://leetcode.com/problems/two-sum

local function two_sum(nums: {integer}, target: integer): {integer, integer}
  local seen: {integer: integer} = {}
  for i = 1, #nums do
    local need = target - nums[i]
    if seen[need] then
      return {seen[need], i}
    end
    seen[nums[i]] = i
  end
  return {-1, -1}
end

-- Examples (Lua uses 1-based indices).
assert(two_sum({2, 7, 11, 15}, 9)[1] == 1, "example 1: first index")
assert(two_sum({2, 7, 11, 15}, 9)[2] == 2, "example 1: second index")
assert(two_sum({3, 2, 4}, 6)[1] == 2, "example 2: first index")
assert(two_sum({3, 2, 4}, 6)[2] == 3, "example 2: second index")
assert(two_sum({3, 3}, 6)[1] == 1, "example 3: first index")
assert(two_sum({3, 3}, 6)[2] == 2, "example 3: second index")

-- Run manually: tl run leetcode/lua/two-sum.tl
