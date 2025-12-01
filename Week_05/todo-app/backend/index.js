// write basic express boilerplate code,
// with express.json() middleware

const express = require('express')
const {createTodo, updateTodo} = require('./types');
const { describe } = require('zod/v4/core');
const { todo } = require('./db'); 
const cors = require('cors');
const app = express()
app.listen(3000)

app.use(express.json());
app.use(cors());

app.post('/todos', async (req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description
    })

    res.json({
        msg: "todo created"
    })
})

app.get('/todos', async (req, res)=>{
    const todos = await todo.find({});

    res.json({
        todos: []
    })
})

app.put('/completed', async (req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "todo marked as completed"
    })
})
