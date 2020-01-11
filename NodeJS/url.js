const myURL = new URL('https:www.google.co.in/hello.html?id=100&status=active')

//serialize url
console.log(myURL.href)

//Host
console.log(myURL.host)

//Path Name
console.log(myURL.pathname)

//Serialized query
console.log(myURL.search)

//search Params
console.log(myURL.searchParams)

//Add params
myURL.searchParams.append('user','Soumya')
console.log(myURL.href)

//Loop through params
myURL.searchParams.forEach((data, index) => {
    console.log(index + '->' + data)
})