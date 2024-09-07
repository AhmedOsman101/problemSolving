def birthdayCakeCandles(candles):
    # Write your code here
    maxNumber = max(candles)

    repeatNum = candles.count(maxNumber)

    return repeatNum


print(birthdayCakeCandles([1,1,2,3,3,2,1]))