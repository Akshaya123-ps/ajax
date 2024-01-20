// "use strict"
// a=5;
// console.log(a);
// var fname="Akshaya";
// console.log(fname.length);
// console.log(typeof(fname));
// var data =" This is a txt message";
// console.log(data.length);
// console.log(data.indexOf('txt'));
// console.log(data.replace("txt","text"));
// console.log(data);
// console.log(data.split(' '));
// console.log(data)
// // console.log(data.trim());
// console.log(data.trimStart())


// let fruits=["Apple","Mano","Orange","Grapes"];
// console.log(Array.isArray(fruits));
// // foreach
// fruits.forEach(function(item){
//     console.log(item);
// })

// let numb=[20,30,58,65];
// numb.forEach(function(item,ind){
//     numb[ind]=item<50
// })
// console.log(numb);
// var obj1=JSON.parse('{"name":"Akshaya","age":12}');
// console.log(obj1);
// var obj2=JSON.stringify(obj1);
// console.log(obj2)
// function sum(a,b){
//     var s=a+b;
//     console.log(`The sum is ${s}`);
// }
// sum(10,20);
// // this is arrow function
// var add=(c,d)=>{
//     console.log(`The sum is ${c+d}`);
// }
// add(12,23);
// var sub=(e,f)=>{
//     console.log(`The difference is ${e-f}`);
// }
// sub(28,16);
// spread operator
// var a=[5,4,6,7];
// var b=[38,78,25];
// var c=[...a,...b];
// console.log(c);
// var d=[2,3,...b];
// console.log(d);
// array destructuring
var[q,r,s]=[2,3,4];
console.log(r);
var [h,,w]=[3,4,5];
console.log(w);
var [h,,j,...l]=[1,2,3,4,5,6,8];
console.log(l)