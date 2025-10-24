// //filesystem module
// const fs = require("fs")
// fs.readFile("a.txt", "utf-8", function(err, data){
//     console.log(data)
// })

// console.log("hello")

// setTimeout(function(){
//     console.log("hi")
//     }, 1000
// );

// console.log("hello2")




// function findSum(n){
//     let ans = 0
//     for(let i=1; i<=n; i++){
//         ans+=i
//     }
//     console.log(ans)
// }
// function findSumTill100(){
//     findSum(100)
// }
// setTimeout(findSumTill100, 1000)
// console.log("hi")



// const fs = require('fs')

// //my own asynchoronous function
// function nirmalsReadFile(cb){
//     fs.readFile('a.txt', 'utf-8', function(err, data){
//         cb(data)
//     })
// }

// // callback function to call
// function onDone(data){
//     console.log(data)
// }

// nirmalsReadFile(onDone)




// promises --->>

// setTimeout(function(){
//     console.log("hello world")
// }, 1000);

// const fs = require('fs')
// //my own asynchronous function
// function nirmalsReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile('a.txt', 'utf-8', function(err, data){
//             resolve(data);
//         });
//     });
// }

// // callback function to call
// function onDone(data){
//     console.log(data)
// }

// nirmalsReadFile().then(onDone)
// console.log('hi')




// let stocks = {
//     fruits: ["apple", "banana", "grapes"],
//     liquid: ["water", "flavour"],
//     holder: ["cone", "cup", "sticks"],
//     toppings: ["chocolate", "peanuts"]
// };

// let is_shop_open = true;

// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if(is_shop_open){
//             setTimeout(() => {
//                 resolve(work())
//             }, time)
//         }
//         else{
//             reject(console.log("shop has been closed"))
//         }
//     })
// }

// order(2000, ()=>console.log(`${stocks.fruits[0]} was selected`))

// .then(()=>{
//     return order(0, ()=>console.log("production has started"))
// })

// .then(() => {
//     return order(2000, () => console.log("the fruits were chopped"))
// })

// .then(() => {
//     return order(1000, () => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)
//     })
// })

// .then(() => {
//     return order(1000, () => console.log("start the machine"))
// })

// .then(() => {
//     return order(2000, () => {
//         console.log(`icecream were place on ${stocks.holder[1]}`)
//     })
// })

// .then(() => {
//     return order(3000, () => {
//         console.log(`${stocks.toppings[1]} were topped`)
//     })
// })

// .then(() => {
//     return order(2000, () => {
//         console.log("icecream were served")
//     })
// })



// .catch(() => {
//     console.log("customer left")
// })


// .finally(() => {
//     console.log("day ended, shop is closed")
// })


























