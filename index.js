const jsonData=[
    {
        name:'sambath Ravi',
        age:25,
        degree:'MCA'
        },
    {
        name:'test Ravi',
        age:26,
        degree:'B.tech'
        },
    {
        name:'ram Ravi',
        age:27,
        degree:'B.E'
        },
] 

// for
console.log('Using for loop')
for(let i=0;i<=jsonData.length-1;i++){
    console.log(jsonData[i])
}

// for in
console.log('Using for in loop')
for(let key in jsonData){
    console.log(key)
}
// for of
console.log('Using for of loop')
for(let value of jsonData){
    console.log(value)
}

// forEach
console.log('Using forEach in loop')
jsonData.forEach(data=>console.log(data)) 