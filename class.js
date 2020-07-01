class person {
    constructor(name, first, second, third) {
        this.name = name;
        this.first = first;
        this.second = second;
        this.third = third;
    }
    sum() {
        return this.first + this.second + this.third;
    }
}

let bae = new person('bae', 10, 10, 10);
let hwang = new person('hwang', 20, 20, 20);

console.log(bae)

bae.sum = function () {
    return this.first - this.second + this.third;
}

console.log(bae.sum());
console.log(hwang.sum());
