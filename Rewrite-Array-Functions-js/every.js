let arr = [3, 25, 15, 100, 20, 21];
Array.prototype.myEvery = function(cbFunc) {
    for (let i = 0; i < this.length; i++) {
        if (!cbFunc(this[i]))
            return false;
    }
    return true;
}
let bool = arr.myEvery(item => item >= 20);
console.log('every >= 20:' + bool);

bool = arr.myEvery(item => item > 0);
console.log('every > 0:' + bool);