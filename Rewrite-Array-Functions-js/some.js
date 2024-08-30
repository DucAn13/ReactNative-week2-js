let arr = [3, 25, 15, 100, 20, 21];
Array.prototype.mySome = function(cbFunc) {
    let bool = false;
    for (let i = 0; i < this.length; i++) {
        if (cbFunc(this[i]))
            bool = true;
    }
    return bool;
}
let bool = arr.mySome(item => item >= 20);
console.log('some >= 20:' + bool);

bool = arr.mySome(item => item < 0);
console.log('some < 0:' + bool);