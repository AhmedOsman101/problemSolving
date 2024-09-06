# https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

def miniMaxSum(arr):
    totalSum = []
    for i in arr:
        test =arr.copy()
        print(test)
        test.remove(i)
        totalSum.append(sum(test))
    print(min(totalSum),max(totalSum))

