const convertDollarToRupee = (amount) => {
    if(typeof(amount) === 'number'){
        return amount * 71.43
    }else{
        throw Error('Invalid Input!!! \nAmount should be number')
    }
}

try {
    convertedAmount = convertDollarToRupee('5')
    console.log(convertedAmount)
} catch (error) {
    console.log(error.message)
}