<?php 
/**
 * The `plusMinus` function calculates the ratio of positive, negative, and zero elements in an array.
 * 
 * @param arr It looks like you are trying to implement a function in PHP that calculates the ratio of
 * positive, negative, and zero elements in an array. However, there is a mistake in your code. The
 * condition ` * -1 < 0` will always be true for negative numbers, which is incorrect
 */

function plusMinus($arr) {
    // Write your code here
    $zero=0;
    $pos=0;
    $neg=0;
    foreach($arr as $number){
        if($number == 0){
            $zero++;
        }else if($number * -1 < 0){
            $pos++;
        }else{
            $neg++;
        }
    }
    
    echo $pos / count($arr) . "\n";
    echo $neg / count($arr) . "\n";
    echo $zero / count($arr) . "\n";
}
