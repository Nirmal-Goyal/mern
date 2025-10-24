const express = require("express")
const app = express()
app.listen(3000)

const users = [{
    name: 'john',
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", (req, res)=>{
    const johnKidneys = users[0].kidneys
    // console.log(johnKidneys)
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})



app.use(express.json())
app.post("/", (req, res)=>{
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })
})



app.put("/", (req, res)=>{
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true
    }
    res.json({})
})


app.delete("/", (req, res)=>{
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({})
    }
    else{
        res.status(411).json({
            msg: "you have no bad kidney"
        })
    }
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true
            break
        }
    }
    return atleastOneUnhealthyKidney;
}
