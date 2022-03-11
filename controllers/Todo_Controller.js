const todolist = require("../models/todo_list");

module.exports.home = function(req,res){
    todolist.find({},function(err, activityList){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }
    return res.render('home', {
        title:"Home",
        Todo_List: activityList
    });
});
    // return res.end('<h1> Users posts okay!</h1>');
}