function wordReverse(str){
    const words = str.split(' ');
    let reversed = [];
     for(let i = words.length-1; i >= 0; i--){
        const element = words[i];
        reversed.push(element);
       // console.log(words);
    }
   //return reversed;
   //console.log(reversed);
   const reverseSentence = reversed.join(' ');
   return reverseSentence;
}
const myString = 'I am a good boy';
const result = wordReverse(myString);
console.log(result);
