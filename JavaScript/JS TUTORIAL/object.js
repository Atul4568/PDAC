// const obj={}//it is collection of dis similar data types
// const array=[10,20,30]//it is a collection of similar data types

// const student={
//     name:"Raj",
//     age:20,
//     married:false,
//     SSC:85
//     HSC:null
// }
// console.log(student.name)
// console.log(student.married)
// console.log(student.SSC)
// console.log(student.HSC)
// console.log(student.age)
// console.log(student.name,student.age,student.married,student.SSC)

// const newarray= Object.keys(student);
// const newarray1= Object.values(student);
// console.log(newarray)
// console.log(newarray1)

const apple=[
    {
    model:"apple 1",
    memory:"256 GB",
    colour:"Gold",
    screen:5.4,
    camera:12
    },
    {
    model:"apple 2",
    memory:"128 GB",
    colour:"pink",
    screen:5.4,
    camera:12
    },
    {
    model:"apple 3",
    memory:"512 GB",
    colour:"black",
    screen:5.4,
    camera:12
    },
    {
    model:"apple 4",
    memory:"128 GB",
    colour:"silver",
    screen:5.4,
    camera:12
    },
    {
    model:"apple 5",
    memory:"256 GB",
    colour:"Gold",
    screen:5.4,
    camera:12
    },
    {
    model:"apple 13",
    memory:"512 GB",
    colour:"pink",
    screen:5.4,
    camera:12
    },
    {
    model:"apple 13",
    memory:"128 GB",
    colour:"black",
    screen:5.4,
    camera:12
    },
    {
    model:"apple 13",
    memory:"256 GB",
    colour:"silver",
    screen:5.4,
    camera:12
},
]
apple.forEach((item)=>console.log((item.model="apple 13")))

// const filtred=apple.filter((item)=>item.memory =="256 GB")
// const goldcolour=apple.filter((item)=>item.colour ==="Gold" && item.memory==="256 GB")
// // console.log(filtred)
// console.log(goldcolour)

// apple.push({
//     model:"apple 14",
//     memory:"512 GB",
//     colour:"Red",
//     screen:5.8,
//     camera:16,
// })
// apple.unshift()
// apple.splice()
// apple=[...apple,{}]
// console.log(apple);

// const sorted=apple.sort((acc,cur)=> (acc.memory< cur.memory? 1:-1))
// const newOutput = apple.map((item)=> (item.model="apple13")
// console.log(newOutput)