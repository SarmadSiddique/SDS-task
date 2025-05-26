// console.log('hello world')
// // sortArr([13, 2, 7, 8, 9, 0, 2, 1, 1, 25, 99, 126], "asc");

// // sortArr([13, 2, 7, 8, 9, 0, 2, 1, 1, 25, 99, 126], "dsc");
// const sortingArrays=(a , b )=>{
//     let minIndex=a[0]
//     if(b==='asc'){
//         for(let i =0; i<=a.length-1; i++){
            
//             // for(let j = i+1;j<=a.length;j++){
//             //     if(a[minIndex]<a[j]){
//             //         minIndex=a[i]
//             //     }
//             // }
//             if(a[i]<minIndex){
//                 minIndex=a[i]
//             }
//             // swapping values--------
//             console.log(a[minIndex],"a[minIndex]")
//             let temp = a[i];
//             a[i]=a[minIndex] 
//             a[minIndex]=temp;
//             console.log(temp,"temp")
         
//         }
        
//     }

// }
// let a = { value: 10 };
// let b = a;
// b.value = 20;
// console.log(a.value,"abc");
// const execute = sortingArrays([13, 2, 7, 8, 9, 0, 2, 1, 1, 25, 99, 126], 'asc')
// console.log(execute,'execute')
// console.log(x);
// var x = 5;
// foo();
// bar();

// function foo() { console.log('foo'); }
// var bar = function () { console.log('bar'); };
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 100);
//   }

// console.log(1);
// setTimeout(() => console.log(2), 0);
// Promise.resolve().then(() => console.log(3));
// console.log(4);
// console.log(1 + '2');
// console.log('2' - 1); 
// console.log(3 > 2 > 1);
// console.log(true + true)
// const name = "Sarmad";
// const letters = [...name];
// letters.forEach((char,index)=>{
//     console.log(`Letter ${index + 1}:`, char);})
// console.log(letters); 
// const array=[1,2,3,4]
// for (let i = 1; i <=array.length; i++) {
//     setTimeout(() => console.log(i), 100);
//   }
// function getValue() {
//     return 42;
// }

// function test(x = getValue()) {
//     console.log(x);
// }
// test(10);
// test();
// const sortingArrays = (a, order) => {
//     if (order === 'asc') {
//         for (let i = 0; i < a.length - 1; i++) {
//             let minIndex = i;
//             for (let j = i + 1; j < a.length; j++) {
//                 if (a[j] < a[minIndex]) {
//                     minIndex = j;
//                 }
//             }
//             // Swap a[i] and a[minIndex]
//             let temp = a[i];
//             a[i] = a[minIndex];
//             a[minIndex] = temp;
//         }
//     }else{
//         for (let i = 0; i < a.length - 1; i++) {
//             let maxIndex = i;
//             for (let j = i + 1; j < a.length; j++) {
//                 if (a[j] > a[maxIndex]) {
//                     maxIndex = j;
//                 }
//             }
//             // Swap a[i] and a[maxIndex]
//             let temp = a[i];
//             a[i] = a[maxIndex];
//             a[maxIndex] = temp;
//         }
//     }
//     console.log(a);
// };
// sortingArrays([13, 2, 7, 8, 9, 0, 2, 1, 1, 25, 99, 126], "asc");
// console.log(typeof NaN === 'number')
// console.log(typeof null);

// Destructuring with Renaming and Missing Keys
// const person = { name: "Hussnain", age: 25, country:'Ind' , city:'test'};
// const { name: fullName, city = "Faisalabad",age , country='Pak' } = person;
// console.log(fullName, city,age,country);
// const arr = [1, , 3];
// console.log(1 in arr);
const a = [1, 2];
const b = [1, 2];
console.log(a === b);
console.log(JSON.stringify(a) === JSON.stringify(b));
// const array= [1,4,5,7,98989898989,94,98,986,98989]
// let maxIndex=0
// for (let index = 0; index < array.length-1; index++) {
//     maxIndex=index
//     for(let j = index+1 ; j<array.length;j++){
//         if(array[j]>array[maxIndex]){
//             maxIndex=j
//         }
//     }
// }
// console.log(maxIndex)
const array = [1, 4, 5, 7, 98989898989, 94, 98, 986, 98989];
let maxIndex = 0;
for (let index = 0; index < array.length - 1; index++) {
    maxIndex = index;
    for (let j = index + 1; j < array.length; j++) {
        if (array[j] > array[maxIndex]) {
            maxIndex = j;
        }
    }
}
console.log(maxIndex); // Output will be the index of the maximum element
