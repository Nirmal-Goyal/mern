/*
    Todo{
        title: string,
        description: string,
        completed: boolean
    }
*/

const mongoose = require('mongoose')
const { describe } = require('zod/v4/core')
mongoose.connect("mongodb+srv://admin:7GSMtwzDLc8AX2BU@cluster0.h651m7z.mongodb.net/todo_app")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        dafault: false
    }
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}

