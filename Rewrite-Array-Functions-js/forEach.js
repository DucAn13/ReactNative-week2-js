let arr = [3, 25, 15, 100, 20, 21];
Array.prototype.myForEach = function(cbFunc) {
    for (let i = 0; i < this.length; i++) {
        cbFunc(this[i]);
    }
}
arr.myForEach(item => console.log(item));