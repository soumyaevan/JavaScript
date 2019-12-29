const myToDo = []

myToDo.unshift("Make Breakfast")
myToDo.unshift("Study")
myToDo.unshift("Make Lunch")

// myToDo.forEach(function(todo, index){
//     console.log(`Task number ${index + 1} is: ${todo}`)
// })

for(let i = 0; i<myToDo.length; i++){
    console.log(`Task number ${i + 1} is: ${myToDo[i]}`)
}