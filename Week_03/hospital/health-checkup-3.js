const express = require('express')
const zod = require('zod')
const app = express()
app.listen(3000)

// const schema = zod.array(zod.number())

const schema = zod.object({
    email: z.string(),
    password: z.string(),
    country: z.literal("in").or(z.literal("us")),
    kidneys: z.array(z.number())
})

app.use(express.json())
app.post('/health-checkup', (req, res)=>{
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    // const kidneysLength = kidneys.length
    // res.send("you have "+kidneysLength+" kidneys")
    if(!response.success){
        res.status(411).json({
            msg: 'input is invalid'
        })
    }
    else{
        res.send({
            response
        })
    }
})