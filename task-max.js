const dela = 99;
const cinku = 97;
const jim = 87;
if(dela > cinku && dela > jim){
    console.log('Dela fast');
}else if(cinku > jim && cinku > dela){
    console.log('cinku fast');
}else{
    console.log('jim fast');
}

console.log(Math.max(12, 34, 67));

//Home work 
//write a function that will take 3 numbers will return the max number
//write a function that will take 3 parameters and will return the min number
//first time do it using if-else
//second time do it using Math.min or Math.max

/*function getMax(num1, num2, num3){
     if(num1 > num2 && num1 > num3){
         console.log('Maximum No: number-1');
     }else if(num2 > num1 && num2 > num3){
         console.log('Maximum No: Number-2');
     }else{
         console.log('Maximum No: Number-3');
     }
 }
 const numbers = getMax(20, 34, 28);
 console.log(numbers);*/

/*function getMax(numbers){
      let max = numbers[0];
      for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
      }
      return max;
}
const numbers = [20, 34, 28];
const result = getMax(numbers);
 console.log(result);*/

 /*function getMax(num1, num2, num3){
        return Math.max(num1, num2, num3);
}
const numbers = getMax(20, 34, 28);
console.log(numbers);*/

/*function getMin(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        return 'Minimum No: Number-1';
    }else if(num2 < num1 && num2 < num3){
        return 'Minimum No: Number-2';
    }else{
        return 'Minimum No: Number-3';
    }
}
     
const numbers = getMin(40, 34, 28);
console.log(numbers);*/

/*function getMin(numbers){
    let min = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < min){
            min = numbers[i];
        }
    }
    return min;
}
     
const numbers = [40, 34, 28];
const result = getMin(numbers);
console.log(result);*/

function getMin(num1, num2, num3){
        return Math.min(num1, num2, num3);
}
const numbers = getMin(20, 34, 28);
console.log(numbers);

 