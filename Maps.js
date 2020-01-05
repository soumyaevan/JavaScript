var emp1 = {
    name: 'Soumya',
    id: 712557,
    department: 'Automation Testing',
}

var emp2 = {
    name: 'Sinny',
    id: 618765,
    department: 'BI Manual Testing',
}

var emp3 = {
    name: 'Indradeep',
    id: 6120087,
    department: 'Performance Testing',
}

let employees = new Map()
employees.set('emp1',emp1)
employees.set('emp2',emp2)
employees.set('emp3',emp3)
// console.log(employees.keys())
// console.log(employees.values())
//console.log(employees.get('emp3'))
// for (const key of employees.keys()) {
//     console.log(employees.get(key))
// }

// for (const [key,value] of employees.entries()) {
//     console.log(key +"=> " + " Name- " + value.name + ", ID- " + value.id + ", department-" + value.department)
    
// }

// employees.forEach((value,key)=> {
//     console.log(key + "=> " + value.name)
// })

var arrOfArr = [['Name','Soumya'], ['Skill','Automation'], ['Location','Oslo']]
var newMap = new Map(arrOfArr)
newMap.forEach((value, key) => {
    console.log(key + "-" + value)
})