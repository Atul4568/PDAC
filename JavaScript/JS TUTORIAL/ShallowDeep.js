//Shallow copy can be copy by direct assigning
// const obj1={
//     one: 'Pune',
//     two: 'Mumbai',
//     three: 'Banglore',
// }
// let newobj= obj1
// newobj.two ='Goa'
// console.log(newobj.two)//Goa
// console.log(obj1.two)//Goa

//Deep copy using sprade operator
// const obj2={
//     one:'hello',
//     two:'Bye'
// }
// let newobj2={...obj2}
// newobj2.two='see you'
// console.log(newobj2.two)//see you
// console.log(obj2.two)//Bye


//EXAMPLES
// //shallow can also be copy direct assigning
// const array1=[10,20,30]
// let newarray=array1
// newarray[2]=40
// console.log(array1)//[ 10, 20, 40 ]
// console.log(newarray)//[ 10, 20, 40 ]

//Deep copy using sprade operator
const array2=[10,20,30,40]
let newarray=[...array2]
newarray[2]=80
console.log(newarray)//[ 10, 20, 80, 40 ]
console.log(array2)//[ 10, 20, 30, 40 ]
