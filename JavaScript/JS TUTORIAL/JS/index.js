//This is my first javascript Program
//console.log('hello world');

// let name ='Atul';
// console.log(name);

// const circle ={
//     radius:1,
//     location:{
//         x:1,
//         y: 1
//     },
// };

//Factory Function
// function createCircle( radius){
//     return {
//         radius,
//         draw: function(){
//             console.log('draw');
//         }
//     };
    
// }
// const circle = createCircle(1)


//Constructor Function
function Circle (radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }

}

Circle.
// const another = new Circle(1);
