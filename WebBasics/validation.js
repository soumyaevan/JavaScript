let myValidation = function(){
    val = document.getElementById('myForm').value
    if (isNaN(val) || val < 1 || val > 20){
        document.querySelector('#idOne').textContent = 'Not a valid input!!!'
        document.getElementById('idOne').style.color = 'red'
    }else{
        document.querySelector('#idOne').textContent = 'This input is ok'
        document.getElementById('idOne').style.color = 'green'
    }
}


document.querySelector('.myForm').addEventListener('submit',(event) =>{
    password1 = event.target.Password.value
    password2 = event.target.RePassword.value
    if (password1 != password2){
        const newParaElement = document.createElement("p")
        newParaElement.textContent = 'Password and Repeat password do not match!!!'
        document.querySelector('body').appendChild(newParaElement)
    }
    event.preventDefault();
    event.target.Username.value='';
    event.target.Password.value=''
    event.target.RePassword.value = '';
})