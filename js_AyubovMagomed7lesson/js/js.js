let NumberBefore = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]

let NumberAfter = NumberBefore.filter(function(item, index){
    if (item % 2 !== 0 ){
        console.log(item)
    }
})

let WordBefore = ['lorem ipsum', 'javascript', 'php', 'css', 'react', 'git', 'html', 'mysql']

WordBefore.filter(word => word.length < 4)
         .forEach(word => console.log(word));

let NegativeBefore = [1, -3, 5, 6, -7, 8, 9, -11]

let NegativeAfter = NegativeBefore.filter(function(item, index){
    if (item < 0){
        console.log(item)
    }
})

let EvenBefore = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]

let EvenAfter = EvenBefore.filter(function(item){
    if (item % 2 == 0){
        console.log(item)
    }
})

WordBefore.filter(word => word.length > 3)
        .forEach(word => console.log(word));


let SquareBefore = [5, 6, 7, 8, 9]

let SquareAfter = SquareBefore.map(function(item){
    return console.log(item * item)
})

let arr = [{a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b:55}];
let sumArr = arr.map(obj => obj.a + obj.b);
console.log(sumArr);


let ArrNumber = [-13, 0, 12, 1662, -0.32, -102, -2];
let NegativeArr = ArrNumber.filter(num => num < 0)
.reduce((acc, num) => acc + num, 0)
console.log(NegativeArr)


let xyNumber = [{x: 10, y: 'lorem'}, {x: 21, y: 'lorem'}, {x: -17, y: 'lorem'}, {x: 156, y: 'lorem'}]
let xyNumberAfter = xyNumber.reduce((xy,{x}) => xy + x, 0)
console.log(xyNumberAfter)