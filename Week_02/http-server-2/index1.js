const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const port = 3000
app.use(bodyParser.json())


app.get('/', (req, res)=>{
    res.send('hello')
})

app.get('/route-handler', (req, res)=>{
    // console.log("hell")
    // console.log(req.headers)
    // console.log(req.body) --> 'body' work with post/put/delete, with get 'query' will work
    // console.log(req.query)
    console.log(req.body)
    res.json({
        name: 'nirmal',
        age: 20
    })
})

app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
})



