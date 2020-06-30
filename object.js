console.log('hello')

let memberArray = ['HSH', 'BGH', 'CWB'];
let memberObject = {
    manager: 'HSH',
    designer: 'BSH',
    worker: 'CWB',
}
memberObject.manager = 'Yellow';

console.log(memberArray[1])
console.log(memberObject.manager)
console.log(memberObject.designer)
console.log(memberObject.worker)
delete memberObject.designer
console.log(memberObject.designer)