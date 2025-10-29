const express = require('express')
const app = express()
app.listen(3000)


app.get('/health-checkup', (req, res)=>{
    const username = req.headers.username
    const password = req.headers.password
    const kidneyId = req.query.kidneyId

    if(!(username==="admin" && password==='12345')){
        res.status(400).json({
            msg: 'something up with your input'
        })
        return
    }

    if(kidneyId!=1 && kidneyId!=2){
        res.status(400).json({
            msg: 'something up with your input'
        })
        return
    }
    
    res.json({
        msg: 'your kidney is fine'
    })
})









