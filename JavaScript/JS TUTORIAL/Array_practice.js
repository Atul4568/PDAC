array of numbers
const numbers = [10,20,30,85]
console.log(numbers)

//array of string
const string=["a","b","c"];
console.log(string)

//array of boolean
const array3=[true,false,true];
console.log(array3)

array of dis similar data types
const array4=[10,"abc",true,undefined,null];
console.log(array4)

const array1= [10,20,30,40];
console.log(array1.length)//4
console.log(array1)//[ 10, 20, 30, 40 ]
console.log(array1[3])//40

to ADD element at string index/0 INDEX
array1.unshift(5);
console.log(array1)//[ 5, 10, 20, 30, 40 ]

to remove the element from starting index/0 INDEX
array1.shift();
console.log(array1)//[ 10, 20, 30, 40 ]

to ADD element at Last Index
array1.push(50);
console.log(array1);//[ 10, 20, 30, 40, 50 ]
console.log(array1.length);//5
console.log(array1[3]);//40

to RENOVE the element FROM LAST index
array1.pop();
console.log(array1);//[ 10, 20, 30, 40 ]

const array2=["a","b","c","d",10];
// //it will bring copy of array element & will not affect on original array
const copied = array2.slice(2,3);
console.log(copied);//[ 'c' ]
console.log(array2)
const copied1=array2.slice(2,4);
console.log(copied1);//[ 'c', 'd' ]
const copied2 = array2.slice(0,3)
console.log(copied2)//[ 'a', 'b', 'c' ]

it will cut array element and will affect on original array
const array3=["a","b","c","d","e","f","g","h"];
const result=array3.splice(3,4);
console.log(array3)
console.log(result)//[ 'd', 'e', 'f', 'g' ]

1)ADD new city at 0th index ("goa")
2)Remove 3rd index city
3)REMOVE last index city, and replace new city at last index ("panvel")
const cities=["mumbai","pune","nanded","banglore"];
[ 'goa', 'mumbai', 'pune', 'nanded', 'banglore' ]
[ 'goa', 'mumbai', 'pune', 'banglore' ]
[ 'goa', 'mumbai', 'pune', 'panvel' ]

const cities=["mumbai","pune","nanded","banglore"];
//1)ADD new city at 0th index ("goa")
cities.unshift("goa")
console.log(cities)//[ 'goa', 'mumbai', 'pune', 'nanded', 'banglore' ]

//2)Remove 3rd index city
cities.splice(3,1)
console.log(cities)//[ 'goa', 'mumbai', 'pune', 'banglore' ]

//3)REMOVE last index city, and replace new city at last index ("panvel")
cities.splice(3,1,"panvel")
console.log(cities)//[ 'goa', 'mumbai', 'pune', 'panvel' ]


const array1= [10,20,30];
array1.splice(2,0,"abc")//[ 10, 20, 'abc', 30 ]
array1.splice(1,1,50)//[ 10, 50, 30 ]
array1.splice(0,1)//[ 20, 30 ]
console.log(array1)
