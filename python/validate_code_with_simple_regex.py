# https://www.codewars.com/kata/56a25ba95df27b7743000016/train/python


import re

def validate_code(code):
    return bool(re.match(r'^[1-3]', str(code)))

## another solution

# def validate_code(code):
#     #your code here
#     str = f"{code}"
#     if str[0] == "1" or str[0] == "2" or str[0]=="3":
#         return True
#     return False