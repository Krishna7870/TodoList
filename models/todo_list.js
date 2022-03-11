const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
    Description:{
        type: String,
        required: true
    },
    DueDate:{
        type: Date,
        required: true
    },
    Category:{
        type: String,
        required: true
    }
});

const todolist = mongoose.model('todo_list',todoListSchema);
module.exports = todolist;