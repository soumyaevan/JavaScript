let javaScriptCourse = {
    author: 'Soumya',
    price:  120,
    description: 'Modern JavaScript'
}
let pythonCourse = {
    author: 'Soumya',
    price:  145,
    description: 'Modern Python'
}
//console.log(`There is a javaScript course by ${javaScriptCourse.author} with the price of ${javaScriptCourse.price} and description is ${javaScriptCourse.description}`)
let changePriceOfCourse = function(course){
    return{
    format1: `Increased price of course ${course.description} is ${course.price + 30}$`,
    format2: `Discounted price of course ${course.description} is ${course.price - 30}$`
    }
}

let changedPrice = changePriceOfCourse(javaScriptCourse);
console.log(changedPrice.format2)
