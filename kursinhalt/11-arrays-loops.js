/*
const nums = [1, 1, 3,]
let total = 0

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total += num;
}

console.log(total)

const numsDoubled = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsDoubled.push(num * 2);
}

console.log(numsDoubled)
*/


/*
// 11b

function getLastValue(arrayValue) {
    let value = arrayValue.length - 1
    return arrayValue[value]
}

console.log(getLastValue([1, 20 , 22, 24, 5]))
console.log(getLastValue(['hi', 'hello', 'hey']));
*/

// 11c
/*
function arraySwap(array) {
    const lastIndex = array.length - 1
    const last = array[lastIndex]
    const first = array[0]

    array[0] = last
    array[lastIndex] = first
    return(array)
}
console.log(arraySwap([1,2,3,4,5]))
*/

/*
//11d
for (i = 0; i <= 10; i += 2) {
    console.log(i)
}
*/

/*
// 11 e
for (i = 5; i >= 0; i--) {
    console.log(i)
}
*/


/*
// 11 f
let i = 0

while(i <= 10) {
    console.log(i);
    i = i + 2;
};

let index = 5

while(index >= 0) {
    console.log(index)
    index--
}
*/

/*
// 11 g
const numbers = [1 ,2 ,3]
const result = []

for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] + 1)
}

console.log(result)
*/

/*
// 11 h
function addOne(array) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + 1)
    }
    return result
}

console.log(addOne([1,2,3]))
console.log(addOne([-1,-2,-3]))
*/


/*
// 11 i
function addNum(array, num) {
    const result = []

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + num)
    }
    return result
}

console.log(addNum([1,2,3],2))
console.log(addNum([1,2,3],3))
console.log(addNum([-1,-2,-3,0,99],2))
*/


/*
// 11 j
function addArray(array1, array2) {
    const result = []

    for (let i = 0; i < array1.length; i++){
        result.push(array1[i] + array2[i])
    }
    return result
}

console.log(addArray([1,1,2],[1,1,3]))
*/


/*
// 11 k
function countPositive(nums){
    let positive = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0) {
            positive ++
        }
    }
    return positive
}

console.log(countPositive([1,-2,3]))
*/



// 11 L
function minMax(nums){
    const result = {
        min: nums[0],
        max: nums[0]
    }

    for(let i = 0; i < nums.length; i++){
        const value = nums[i];

        if(value < result.min){
            result.min = value
        }

        if(value > result.max){
            result.max = value
        }
    }
    return result
}

console.log(minMax([-10,23,345]))