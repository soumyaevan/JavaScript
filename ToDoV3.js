const myTodos = [
    {
        title: 'Morning Prayer',
        isDone: true,
    },
    {
        title: 'BreakFast',
        isDone: false,
    },
    {
        title: 'Learn JavaScript',
        isDone: true,
    },
    {
        title: 'Make Lunch',
        isDone: false,
    },
    {
        title: 'Call Home',
        isDone: true,
    },
    {
        title: 'Watch TVF Series',
        isDone: false
    }
]

// const taskDone = myTodos.filter((todos) => todos.isDone === true)
// let completedTask = []
// const titleTask = () => taskDone.forEach((task,index) => completedTask.push(task.title))//console.log(task.title))
// titleTask()
// console.log(completedTask)

let printCompletedTask = () => {
    const taskDone = myTodos.filter((todos) => todos.isDone === true)
    taskDone.forEach((task,index) => console.log(task.title))
}

printCompletedTask()