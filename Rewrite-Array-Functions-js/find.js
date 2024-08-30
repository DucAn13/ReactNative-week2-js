let arr = [3, 25, 15, 100, 20, 21];
Array.prototype.myFind = function(cbFunc) {
    for (let i = 0; i < this.length; i++) {
        if (cbFunc(this[i]))
            return this[i];
    }
    return null;
}
let ketQua = arr.myFind(item => item >= 20);
console.log(ketQua);