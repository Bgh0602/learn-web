let memberArray = ['HSH', 'BGH', 'CWB'];

let i = 0;
console.group('array loop')
while (i < memberArray.length) {
    console.log(memberArray[i]);
    i += 1;
}
console.groupEnd('array loop')



let memberObject = {
    manager: 'HSH',
    designer: 'BSH',
    worker: 'CWB',
}

console.group('object loop');
for (let name in memberObject) {
    console.log(name, memberObject[name]);
}
console.groupEnd('object loop');



console.log(Math.PI)
console.log(Math.random()) //객체에 소속된 함수="method"
console.log(Math.floor(3.8))


let myMath = {
    PI: 3.141592653589793,
    random: function () {
        return Math.random();
    },
    floor: function (value) {
        return Math.floor(value)
    }
}
console.log(myMath.PI);
console.log(myMath.random());
console.log(myMath.floor(4.8));


