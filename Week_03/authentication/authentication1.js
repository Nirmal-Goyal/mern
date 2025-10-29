const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = "1234561"

const app = express()
app.use(express.json())

const ALL_USERS = [
    {
        username: 'nirmal@gmail.com',
        password: '12321',
        name: 'nirmal goyal'
    },
    {
        username: 'masum@gmail.com',
        password: '12345',
        name: 'masum aktar'
    },
    {
        username: 'ankan@gmail.com',
        password: '123456',
        name: 'ankan kushwaha'
    }
];


function userExists(username, password){
    let userExist = false;
    for(let i=0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExist = true;
        }
    }
    return userExist;
}

app.post('/signin', (req, res)=>{
    const username = req.body.username
    const password = req.body.password

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: 'user does not exist'
        })
    }

    var token = jwt.sign({username: username}, jwtPassword)
    return res.json({
        token
    })
})


app.get('/users', (req, res)=>{
    const token = req.headers.authorization
    const decode = jwt.verify(token, jwtPassword)
    const username = decode.username
    res.json({
        users: ALL_USERS
    })
})

app.listen(3000)






