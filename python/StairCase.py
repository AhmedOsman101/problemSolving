# https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

def staircase(n):
    # Write your code here
    for i in range(n):
        lines = n - (i+1)
        for j in range(lines):
            print(" ",end="")
        for k in range(i+1):
            print("#",end="")
        print("")

staircase(16)