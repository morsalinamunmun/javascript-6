let fast = 4;
let second = 3;
//wrong
/*fast = second;
second = fast;*/

//approach-1:
const temp = fast;
fast = second;
second = temp;
console.log(fast, second);

//approach: 2 ---destructuring
[fast, second] = [second, fast];
console.log(fast, second);
