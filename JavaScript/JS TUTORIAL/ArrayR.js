const brands =["apple","samsung","oppo","huawei","redmi"];
const shoes =["adidas","reebook","nike","spark"];
const laptop =["dell","toshiba","lenovo","asus"];
const nums =[10,100,30,50,300]
const table =[1,2,3,4,5,6,7,8,9,10]

// const result = table.concat(nums)
// console.log(result)//[ 1,  2,   3,  4,  5,   6, 7,  8,   9, 10, 10, 100, 30, 50, 300 ]

// const result = nums.concat(table)
// console.log(result)//[ 10, 100, 30, 50, 300, 1, 2,   3,  4,  5,   6, 7, 8,   9, 10 ]

// const result = [...table,...nums]
// console.log(result)
// const resu = [...laptop,...shoes]
// console.log(resu)
const result = [...laptop,"HP"]
console.log(result)


// table.forEach((item)=> console.log(item*8))
// brands.forEach((item)=> console.log("new "+item))




// nums.forEach((item)=> console.log(item+10))
// laptop.forEach((item)=> console.log(item))


// const total= nums.reduce((acc,cur)=> acc+cur)
// console.log(total)//490
// const smallWord= laptop.reduce((acc,cur)=> acc.length<cur.length? acc:cur)
// console.log(smallWord)//asus
// const smallWor= laptop.reduce((acc,cur)=> acc.length>cur.length? acc:cur)
// console.log(smallWor)//toshiba

// const filtred=laptop.filter((item)=> item.includes("e"))
// console.log(filtred)//[ 'dell', 'lenovo' ]

// const dec=shoes.sort((acc,cur)=>acc<cur?1:-1)
// console.log(dec)//[ 'spark', 'reebook', 'nike', 'adidas' ]

// const upper=brands.map((item)=>item.toUpperCase())
// console.log(upper)//[ 'APPLE', 'SAMSUNG', 'OPPO', 'HUAWEI', 'REDMI' ]
// const upper=brands.map((item)=>item.toUpperCase()+" "+"New Model")
// console.log(upper)//'REDMI New Model'
// const multiplication=nums.map((item)=>item*5)
// console.log(multiplication)//[ 50, 500, 150, 250, 1500 ]





// console.log(brands[3])
// console.log(laptop[3])
// laptop.unshift("HP")
// console.log(laptop)
// shoes.pop("spark")
// console.log(shoes)//[ 'adidas', 'reebook', 'nike' ]
