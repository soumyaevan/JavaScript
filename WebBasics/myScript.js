// const ele = document.getElementById("idOne")
// console.log(ele)
// const elelOne = document.querySelector(".classOne")
// console.log(elelOne)
// const allEle = document.querySelectorAll("p")
// console.log(allEle)
// console.log(allEle[3])

const paraElements = document.querySelectorAll('p')
paraElements.forEach((p) =>{p.textContent='Changed through JS'})

const newParaElement = document.createElement("p")
newParaElement.textContent = 'This is created through JS'
document.querySelector('body').appendChild(newParaElement)
document.querySelector('button').addEventListener('click', (event) =>{
    newParaElement.textContent = 'Button is clicked'
    event.target.textContent = 'I am clicked'
})