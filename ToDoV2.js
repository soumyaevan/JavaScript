const myToDoList = [
    {
        title: 'Morning Worship',
        isDone: false,
    },
    {
        title: 'Breakfast',
        isDone: false,
    },
    {
        title: 'Study',
        isDone: false
    },
]

const findMyToDo = function(myTodo,title){
    const index = myTodo.findIndex(function(toDo,index){
        return toDo.title.toLowerCase() === title.toLowerCase()
    })
    if (index >= 0){
        if(myTodo[index].isDone){
            return `${title} is done\n`
        }else{
            return `${title} is still pending\n`
        }
    }
    return `${title} is not found in todo list\n`
}

let doTask = function(title){
    const index = myToDoList.findIndex(function(toDo,index){
        return toDo.title.toLowerCase() === title
    })
    if (index >= 0){
        myToDoList[index].isDone = true
        console.log(`Great!!! You have finished ${title}, your task number ${index + 1}\n`)
    }else{
        console.log("No such task is present in your ToDo list\n")
    }
}

let showPendingTask = function(){
    console.log("\nYour pending tasks are:")
    myToDoList.forEach(function(task,index){
        if(!task.isDone){
            console.log(task.title)
        }
    })
    console.log("")
}

// console.log(findMyToDo(myToDoList,'study'))

// doTask('sttudy')



showPendingTask()
doTask('study')
showPendingTask()
console.log(findMyToDo(myToDoList,'study'))