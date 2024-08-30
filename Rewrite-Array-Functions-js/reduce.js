let arr = [3, 25, 15, 100, 20, 21];
Array.prototype.myReduce = function(cbFunc, initialValue) {
    for (let i = 0; i < this.length; i++) {
        cbFunc(this[i]);
    }
}
let total = 0;
arr.myReduce(item => console.log(item));