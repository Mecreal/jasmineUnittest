// NOTE: This code has not been converted to TypeScript yet
import {concatArr,addArr,lgNum,cut3} from './utilities/arrays.js';
import {multiply,subtract,divide,sum,square}from './utilities/numbers.js';
import {concat,capitalize,upperCase,lowerCase} from './utilities/strings.js';

const numArr:number[] = [3, 4, 5, 6];
const wordArr:string[] = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum:number = addArr(numArr);
const mixArr = concatArr(numArr, wordArr);
const myNum :number = (('15' as unknown) as number) % 2;
const five =parseInt('5');

// results of function calls
console.log(cut3(mixArr));
console.log(sum(arrSum, myNum));
console.log(capitalize('the quick brown fox'));
console.log(multiply(five, 8));
console.log(lgNum(mixArr));


