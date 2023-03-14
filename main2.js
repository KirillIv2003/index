//Задание 1
// let input = prompt("ВВедине 1 если мз км/ч и 2 если из м/с");

// function convertSpeed(){
//     if (input == 1)
//         return `${kmh * (5/18)} м/с`;
//     else if (input == 2)
//         return `${ms * (18/5)} км/ч`;
// }

// if (input=='1'){
//     kmh = prompt('киллометры в час');
//     console.log(`convertSpeed(${kmh},'toMS') -> ${convertSpeed()}`);
// }
// else if(input=='2'){
//     ms = prompt('метры в секунду');
//     console.log(`convertSpeed(${ms},'toKMH') -> ${convertSpeed()}`);
// }

//Задние 2

// let input = prompt(`введите ваше число`);

// function absValue(input){
//     if (input < 0) return -input;
//     else if (input => 0) return input;
// }

// console.log(`absValue(${input}) -> ${absValue(input)}`);

//Задание 3

// let user = {
//     group: '211-326',
//     last_name: "Иванов",
//     first_name: "Кирилл"
// };

// console.log(`список свойств: ${Object.keys(user)} \n Студент ${user.last_name} ${user.first_name} учится в группе ${user.group}`);

//Задние 4

// function myrandom(min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }

// //console.log(`randomNumber(-20, 20) -> ${myrandom(-20, 20)}`);

// //Задние 5
// function sampleArray(arr, a){
//     //let random;
    
//     let mass = new Array();
//     for (let i=0; i<a; i++){
//         let l = arr[myrandom(0, arr.length)];
//         mass.push(l);
//     }
//     return mass;
// }
// let b = prompt('введите число от 1 до 9');
// let arr= [100,356,847,212,308,734,283,246,438];
// console.log(sampleArray(arr,b));
