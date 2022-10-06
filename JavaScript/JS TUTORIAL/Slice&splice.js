const array2=["a","b","c","d",10];
console.log("array2: ", array2);
const copied = array2.slice(2,3); //it will bring copy of array element and will not affect on 
console.log("copied: ", copied);

const copied1=array2.slice(2,4); //=> [c,d]
console.log("copied1: ", copied1);
const copird2 = array2.slice(0,3); //=>[a,b,c]
console.log("copird2", copird2);
const splice1 = array2.splice(0,2)
console.log("splice 1: ", splice1)


// const array3=["a","b","c","d","e","f","g","h"];
// // const result = array3.splice(2,4); //=>c
// // const result = array3.splice(0,3); //=>a,b,c
// // const result = array3.splice(2,2); //=>[ 'c', 'd' ]
// // const result = array3.splice(3,5); //=>[ 'a', 'b', 'e', 'f', 'g', 'h' ]
// const result = array3.splice(3,4); //=>it will cut array
// console.log(result);

// console.log(array3);


// add new city at 0th indexe (Goa)
// 2) remove 3rd index city
// 3) remove last index city, and replace new city at last index (panvel)

const cities=["mumbai","pune","nanded","banglore"]
// cities.unshift('Goa'); //[ 'Goa', 'mumbai', 'pune', 'nanded', 'banglore' ]
// console.log(cities);

// cities.splice(3,1); //[ 'mumbai', 'pune', 'nanded' ]
// console.log(cities);

// cities.splice(3,1,"panvel"); //[ 'mumbai', 'pune', 'nanded', 'panvel' ]
// console.log(cities);

// cities.splice(3,1,"panvel","Cochin"); //[ 'mumbai', 'pune', 'nanded', 'panvel', 'Cochin' ]
// console.log(cities);

// cities.splice(1,1,"panvel","Cochin"); //[ 'mumbai', 'pune', 'nanded', 'panvel', 'Cochin' ]
// console.log(cities);

// cities.pop();
// console.log(cities); //[ 'mumbai', 'pune' ]
// cities.push("panvel");
// console.log(cities); //[ 'mumbai', 'pune', 'panvel' ]


// const array2 = ["a","b","c","d",10]


const array1 = [10,20,30]
// array1.splice(3,0,40)
// console.log(array1) //[ 10, 20, 30, 40 ]
array1.splice(1,1,50)
console.log(array1)//[ 10, 50, 30 ]

