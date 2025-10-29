const zod = require("zod")

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response)
}

validateInput({
    email: "example@gmail.com",
    password: "123456789"
});


app.post("/login", (req, res)=>{
    const response = validateInput(req.body)
    if(!response.success){
        res.json({
            msg: 'your inputs are invalid'
        })
        return
    }
})











