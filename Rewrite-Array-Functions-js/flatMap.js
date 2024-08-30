let arr = [3, 25, [15, [100], 20], 21];
Array.prototype.myFlatMap = function(cbFunc) {
    let newArr = [];
    let flatArr = this.flat(Infinity);
    for (let i = 0; i < flatArr.length; i++) {
        newArr.push(cbFunc(flatArr[i]));
    }
    return newArr.flat(Infinity);
}
let newArr = arr.myFlatMap(item => [item, item * 10]);
console.log(newArr);