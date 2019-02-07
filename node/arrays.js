// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
const arrayTest = [9, 3, 4];
console.log(arrayTest);
arrayTest.forEach((a) => {
    console.log(a);
});

array.forEach((a) => {
    console.log(a);
})

// use map
const mapArray = arrayTest.map((i) => i + 1);
console.log(mapArray);

// use pop
mapArray.pop();
console.log(mapArray);

// use push
mapArray.push(6);
console.log(mapArray);

// use shift
mapArray.shift()
console.log(mapArray);

// use unshift
mapArray.unshift(5);
console.log(mapArray);

// use filter