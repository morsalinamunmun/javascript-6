const power = Math.pow(4, 2);
console.log(power);
const num1 = 30;
const num2 = 45;

const gap = num1 - num2;

if(gap < 5){
    console.log('you guys can be friend');
}else{
    console.log('you guys stay apart');
}
const result1 = Math.round(4.258);
//console.log(result1);

const result2 = Math.ceil(2.345);
//console.log(result2);

const result3 = Math.floor(2.345);
//console.log(result3);

//random
//console.log(Math.random()); //new new man dei
//console.log(Math.random()*100);
//console.log(Math.round(Math.random()*100));
for(let i = 0; i < 20; i++){
    const Random = Math.round(Math.random()*12);
    console.log(Random);
}

console.log(Math.abs(-5));

