let arr = [3, 25, [15, [100], 20], 21];
Array.prototype.myFlatMap = function(cbFunc) {
    let newArr = [];
    let flatArr = this.flat();
    for (let i = 0; i < flatArr.length; i++) {
        newArr.push(cbFunc(flatArr[i]));
    }
    return newArr;
}
let newArr = arr.myFlatMap(item => item * 10);
console.log(newArr);