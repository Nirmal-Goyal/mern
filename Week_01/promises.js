// const promiseOne = new Promise((resolve, reject)=>{
//     //Do an async task
//     // DB calls, cryptography, network use kar skte h

//     setTimeout(()=>{
//         console.log('async task is completed')
//         resolve()
//     }, 1000)
// })

// promiseOne.then(()=>{
//     console.log("promise consumed")
// })





// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("async task 2")
//         resolve()
//     }, 1000)
// })
// .then(()=>{
//     console.log("async 2 is logged")
// })





// const PromiseThree = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({username: "chai", email: "chai@example.com"})
//     }, 1000)
// })
// PromiseThree.then((user)=>{
//     console.log(user)
// })







// const PromiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let err = false
//         if(!err){
//             resolve({username: 'hitesh', password: '123456'})
//         }
//         else{
//             reject('ERROR: something went wrong')
//         }
//     }, 1000)
// })
// PromiseFour.then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log('the promise is either resolved or reject')
// })










// const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username:'javascript', password:'js123'})
//         }
//         else{
//             reject('ERROR: something went wrong')
//         }
//     }, 1000)
// })

// // async function consumePromiseFive() {
// //     const response = await promiseFive
// //     console.log(response)
// // }
// // // async directly error handle nahi kar skte

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()










// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } 
//     catch (error) {
//         console.log(error)
//     }
// }
// getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})












