let arr = [3, 25, 15, 100, 20, 21];
Array.prototype.myFilter = function(cbFunc) {
    let returnArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cbFunc(this[i]))
            returnArr.push(this[i])
    }
    return returnArr;
}
let newArr = arr.myFilter(item => item >= 20);
console.log(newArr);