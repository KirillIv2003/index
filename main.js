/*
string
`${}`

undefine
null

Object
    Array
    Object
    Function
*/

//Задание 1
// let met, km;
// let input = prompt("ВВедине 1 если мз км/ч и 2 если из м/с");
// if (input == '1')
// {
//     km = prompt('киллометры в час');
//     met = km * (5/18);
//     console.log(met + ' м/с');
// }
// else if (input == '2')
// {
//     met = prompt('метры в секунду');
//     km = met * 3.6;
//     console.log(km + ' км/ч');
// }
//Задание 2
// let first = 5;
// let two = 2;
// let tree =  6;
// if ( two + tree > first && first + tree > two && first + two > tree )
// {
//     console.log('трегольник существует');
//     let Per = (first + two +tree);
//     console.log('периметр= ' + Per);
//     let S = Math.sqrt(Per*(Per-first)*(Per-two)*(Per-tree));
//     console.log('площадь= ' + S);
//     let ot = Per/S;
//     console.log('отношение= ' + ot);
// }
// else{
//     console.log('трегольник не существует');
// }

//Задание 3
// let input = prompt();
// for (let i = 0; i<input; i++)
// {
//     if (i==0)
//     {
//         console.log(i+' buzz')
//     }
//     else if (i%5==0)
//     {
//         console.log(i+' fizz buzz');
//     }
//     else if (i%2==0)
//     {
//         console.log(i+' buzz');
//     }
//     else{
//         console.log(i+' fizz');
//     }
// }
//Задание 4
// for (let i=0;i<12;i++)
// {
//     if (i%2==0)
//     {
//         let r = ""
//         for (let a=0;a<i;a++)
//         {
//             r+='#'
//         }
//         console.log(r + '\n');
//     }
//     else
//     {   
//         let f = "";
//         for (let c=0; c<i; c++)
//         {
//             f += '*'; 
//         }
//         console.log(f + '\n');
//     }
// }
// console.log('||');

// Задание 5 НЕ ПОЛУЧИЛОСЬ

// let a = 10;
// let b = prompt('введите число');
// // while ( b == NaN)
// // {
// //     b = prompt('введите число');
// //     console.log('это не число')
// // }
// while (b!=a)
// {
//     if (b>a)
//     {
//         console.log('ваше число больше');
//         b = prompt('введите число');
//     }
//     else
//     {
//         console.log('ваше чило меньше');
//         b = prompt('введите число');
//     }
// }
// console.log('угадано');


//Задние 6

// let n = prompt('число n');
// let x = prompt('число x');
// let y = prompt('число y');
// if (n<=0 || x<=0 || y<=0)
// {
//     console.log('числа должны быть больше 0');
// }
// else if(n%x==0 && n%y==0)
// {
//     console.log('n = ' + n + ', x = ' + x + ',y = ' + y + ' => true');
// }
// else{
//     console.log('n = ' + n + ', x = ' + x + ',y = ' + y + ' => false');
// }

//Задание 7

// let month = prompt('введите номер месяца')
// if(month == 1 || month==2 || month==3){
//     console.log('месяц '+ month + ' => 1 квартал');
// }
// else if(month == 4 || month==5 || month==6){
//     console.log('месяц '+ month + ' => 2 квартал');
// }
// else if(month == 7 || month==8 || month==9){
//     console.log('месяц '+ month + ' => 3 квартал');
// }
// else if(month == 10 || month==11 || month==12){
//     console.log('месяц '+ month + ' => 4 квартал');
// }
// else{
//     console.log('месяц не сущестыует');
// }
