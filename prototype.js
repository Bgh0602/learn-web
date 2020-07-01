function person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}
person.prototype.sum = function () {
    return this.first + this.second + this.third;
}

let bae = new person('bae', 10, 20, 40);
bae.sum = function () {
    return this.first - this.second + this.third;
}
let hwang = new person('hwang', 10, 10, 10);

console.log(bae.sum());
console.log(hwang.sum());
