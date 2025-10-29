const express = require('express');
const app = express()
app.listen(3000)


function userMiddleware(req, res, next){
    const username = req.headers.username
    const password = req.headers.password

    if(username!='admin' || password!='12345'){
        res.status(403).json({
            msg: "incorrect username or password"
        })
    }
    else{
        next();
    }
}

function kidneyMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId

    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg: "incorrect kidney input"
        })
    }
    else{
        next();
    }
}

app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res)=>{
    res.send("your are healthy")
})
app.get('/kidney-checkup', userMiddleware, kidneyMiddleware, (req, res)=>{
    res.send("your kidney is healthy")
})
app.get('/heart-checkup', userMiddleware, (req, res)=>{
    res.send("your heart is healthy")
})


