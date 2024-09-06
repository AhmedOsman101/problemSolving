# https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/python

def human_years_cat_years_dog_years(human_years):
    # Your code here
    cat = 0
    dog = 0
    for i in range(human_years):
        if i==0:
            cat = cat +15 
            dog= dog +15
        elif i==1:
            cat = cat + 9 
            dog =dog +9
        else :
            cat = cat + 4
            dog = dog+5
    return [human_years,cat,dog]