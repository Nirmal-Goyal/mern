// class Animal{
//     constructor(name, legCount, speaks){
//         this.name = name;
//         this.legCount = legCount;
//         this.speaks = speaks;
//     }
//     speak(){
//         console.log(this.name + " speaks " + this.speaks)
//     }
// }

// const dog = new Animal("dog", 4, "bow-bow")
// console.log(dog)
// dog.speak();




// const users = '{"name": "nirmal", "age" : 19, "gender" : "male"}'
// const user = JSON.parse(users)
// console.log(user.age)


// const user = {
//     name : "nirmal",
//     age : 19
// }
// const finalStr = JSON.stringify(user)
// console.log(finalStr)



// function one(callFnc){
//     console.log("function one is called, now call function two!")
//     callFnc()
// }
// function two(){
//     console.log("function two is called")
// }

// one(two)






let stocks = {
    fruits: ["apple", "banana", "grapes"],
    liquid: ["water", "flavour"],
    holder: ["cone", "cup", "sticks"],
    toppings: ["chocolate", "peanuts"]
};

let order = (fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]}`);
    }, 2000);

    call_production()
};
let production = () => {
    setTimeout(() => {
        console.log("production has started");

        setTimeout(() => {
            console.log("fruit has been chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

                setTimeout(()=> {
                    console.log("machine was started")

                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} was selected`)

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was placed`)

                            setTimeout(() => {
                                console.log("serve the icecream")
                            }, 1000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0)
};

order(0, production)








