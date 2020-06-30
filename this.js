let bae = {
    name: 'bae',
    first: 10,
    second: 8,
    sum: function () {
        return this.first + this.second;
    }
}
console.log(bae.first, bae.second);
//console.log(bae.sum(bae.first, bae.second));
console.log(bae.sum());