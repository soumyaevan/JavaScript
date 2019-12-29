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
            return `${title} is done`
        }else{
            return `${title} is still pending`
        }
    }
    return `${title} is not found in todo list`
}

let doTask = function(title){
    const index = myToDoList.findIndex(function(toDo,index){
        return toDo.title.toLowerCase() === title
    })
    if (index >= 0){
        myToDoList[index].isDone = true
        console.log(`Great!!! You have finished ${title}, your task number ${index + 1}`)
    }else{
        console.log("No such task is present in your ToDo list")
    }
}

let showPendingTask = function(){
    myToDoList.forEach(function(task,index){
        if(!task.isDone){
            console.log(task.title)
        }
    })
}

// console.log(findMyToDo(myToDoList,'study'))

// doTask('sttudy')

// console.log(findMyToDo(myToDoList,'study'))

showPendingTask()
doTask('study')
showPendingTask()