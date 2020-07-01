function person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function () {
        return this.first + this.second + this.third;
    }
}
let bae = new person('bae', 10, 20, 40);
let hwang = new person('hwang', 10, 10, 10)
console.log(bae.sum());
console.log(hwang.sum());


let date1 = new Date();
console.log(date1.getFullYear())
console.log(date1.getMonth() + 1)
console.log(date1.getHours())

