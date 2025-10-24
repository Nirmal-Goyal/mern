// let count=0
// for(let i=1; i<=100; i++){
//     count+=i
// }
// console.log(count)


// let allUsers = [
//     {
//         firstName : 'nirmal',
//         gender : 'male'
//     },
//     {
//         firstName : 'ankan',
//         gender : 'male' 
//     },
//     {
//         firstName : 'masum',
//         gender : 'female'
//     }
// ]

// for(let i=0; i<allUsers.length; i++){
//     if(allUsers[i]["gender"]=='male'){
//         console.log(allUsers[i]["firstName"])
//     }
// }


// function greet(){
//     console.log('hello')
// }
// // setTimeout(greet, 5000)
// setInterval(greet, 2000)


// const str = "hello world"
// console.log(str.length)
//  // --> (length, indexOf, lastIndexOf)


// str = "jijuiiwjkbw"
// console.log(str.slice(2, 6))


// str = "hello world"
// console.log(str.replace("hello", "bye"))


// str = "hou8 jhu y8u9-p kbhu jihugyu"
// console.log(str.split(" "))


// str = "     jioubf      "
// console.log(str)
// console.log(str.trim())
// console.log(str.trim().toUpperCase())
// console.log(str.trim().toLowerCase())


// console.log(parseInt("456"))
// console.log(parseInt(3.123))
// console.log(parseInt("43pd"))
// console.log(parseInt("3.14"))
// console.log(parseInt("op3.14"))


// arr = [1, 2, 3]
// arr.push(2)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift(0)
// console.log(arr)



// arr1 = [1, 3, 4]
// arr2 = [4, 2, 6]
// console.log(arr1.concat(arr2))



function square(n){
    return n*n
}
function cube(n){
    return n*n*n
}
function sumOfSomething(a, b, fn){
    const val1 = fn(a)
    const val2 = fn(b)
    return val1 + val2
}

console.log(sumOfSomething(3, 4, square))
console.log(sumOfSomething(3, 4, cube))









