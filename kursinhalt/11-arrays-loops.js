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

//1e
for (i = 5; i >= 0; i--) {
    console.log(i)
}