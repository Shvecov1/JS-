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


let car = {
    color: 'green',
    maxSpeed: 250,
    audio: {
        brand: 'Sony',
        speakers: 12
    }
};

car.color = 'red';

console.log(typeof car.audio);
console.log(car.audio);

let carGreen = {
    color: 'green'
}

let carRed = {
    color: 'red'
}

carGreen.color = 'red'

console.log(typeof carGreen.color)
console.log(carGreen.color)
console.log(typeof carRed.color)
console.log(carRed.color)


