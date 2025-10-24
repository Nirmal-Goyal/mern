// creating a http server using express
// is express a node default library => NO


const express = require("express")
const app = express()
app.listen(3000)


function sum(n){
    let ans=0
    for(let i=1; i<=n; i++){
        ans=ans+i
    }
    return ans
}

app.get('/', (req, res)=>{
    const n=req.query.n
    const result = sum(n);
    res.send("hi your answer is: "+ result)
})