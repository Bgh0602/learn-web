class person {
    constructor(name, first, second, third) {
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
    }
}

let bae = new person('bae', 10, 10, 10);
console.log(bae)

// bae.sum = function () {
//     return this.first - this.second + this.third;
// }
// let hwang = new person('hwang', 10, 10, 10);

// console.log(bae.sum());
// console.log(hwang.sum());
