const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

/* months.forEach(function(month,index){
    console.log(`Month ${index+1} - ${month}`)
}) */

for (let i = 0; i < months.length; i++){
    console.log(months[i])
}
console.log('')
for (let i = months.length -1; i>=0; i--){
    console.log(months[i])
}