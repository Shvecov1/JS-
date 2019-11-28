// let a = 3;
// let b = 17;
// let c = 96;
// let d = `Hello World ${c} 'Привет' `;
// let e = true;
// let f = false;
// let g = null;
// let i = undefined;
// let h = Symbol()

// // // a = 2;
// // // b = 3

// // console.log(b);
// // console.log(a);
// // console.log(a+c);
// // console.log(b+a);

// console.log(d);
// console.log(typeof d)
// console.log(b);
// console.log(typeof b)
// console.log(e);
// console.log(typeof e)
// console.log(f);
// console.log(typeof f)
// console.log(g);
// console.log(typeof g)
// console.log(i);
// console.log(typeof i)

// let carGreen = {
//     color: 'green'
// }

// let carRed = {
//     color: 'red'
// }

// carGreen.color = 'red'

// console.log(typeof carGreen.color)
// console.log(carGreen.color)
// console.log(typeof carRed.color)
// console.log(carRed.color)


// let car = {
//     color: 'red',
// };

// let car2 = {
//     color: 'green',
// };

// colorChenge(car)


// function colorChenge(theCar) {
//     theCar.color = 'yellow'
// }

// console.log("Car: " + car.color);
// console.log("Car2: " + car2.color);

// let car = {
//     speed: '250'
// };

// console.log("Скорость была: " + car.speed);

// speedChenge(car)

// function speedChenge(speedChenge1) {
//     car.speed = '350'   
// }

// console.log("Скорость стала: " + car.speed);

// let wight = 50;
// let growth = 180;


// function summa(wight, growth) {
//     let addiction = wight + growth * 2;
//     console.log(addiction)
// }
// summa(wight, growth)

let input = document.getElementById("input")
let input2 = document.getElementById("input2")
let button = document.getElementById("btn")
let otvet = document.getElementById("otvet")

function amount(input, input2) {
    otvet.textContent = ""
    let summa = Number(input.value) + Number(input2.value)
    otvet.append(summa)
}

button.addEventListener('click', function() {
    amount(input, input2)
})









