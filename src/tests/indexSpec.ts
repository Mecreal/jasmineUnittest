import {concatArr,addArr,lgNum,cut3} from '../utilities/arrays.js';
import {multiply,subtract,divide,sum,square}from '../utilities/numbers.js';
import {concat,capitalize,upperCase,lowerCase} from '../utilities/strings.js';


const numArr = [3,4,5,6];
const wordArr = ['cat','dog','rabbit','bird'];

it('should capitalize a string', () =>{
   expect(capitalize('a sentence')).toEqual('A Sentence'); 
});

it('Should multiply 8 by 2 = 16',() =>{
   expect(multiply(2,8)).toBe(16); 
});
it('should give the sum of all the elements in the array',()=> {
   expect(addArr(numArr)).toEqual(18);
});
it('should add 5 to 6 by giving 11',()=> {
   expect(sum(5,6)).toBeGreaterThan(10);
});
it('should give the sum of all the elements in the array',()=> {
   expect(addArr(numArr)).toEqual(18);
});
it ('should not contain the third index', () => {
    expect(cut3(wordArr)).not.toContain('rabbit');
});
it ('should not have a large number and be falsy', () => {
    expect(lgNum(wordArr)).toBeFalsy();
});
