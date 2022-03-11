const express = require('express');
const app = express();
const port = 8000;


const db = require('./config/mongoose');
const todolist = require('./models/todo_list');
const expressLayouts = require('express-ejs-layouts');
app.use(express.urlencoded());
app.use(express.static('./assets'));

//all the view that are randered in views are some sort of layouts.
app.use(expressLayouts);

//extract style and scripts from sub pages into the layouts
app.set('layout extractStyles',true );
app.set('layout extractScripts',true );

//use express router(before the server start it has to go to this file)
app.use('/', require('./routes/index'));

//set up the view engine
app.set('view engine','ejs');
app.set('views', './views');

app.post('/create-todolist', function(req,res){
    console.log(req.body.DueDate);
   todolist.create({
    Description: req.body.Description,
    DueDate: req.body.DueDate,
    Category: req.body.Category
   },  function(err, newList){
    if(err){
        console.log('error in creating in todoList!');
        return;
    }
    console.log('********', newList);
    return res.redirect('back');
});

});

app.get('/delete-contact', function(req,res){
    // console.log(req.query);
    // let phone = req.query.phone;
    let id = req.query.id; //get the id from the query in the ul
     // find the contact in the database using id and delete it.
     todolist.findByIdAndDelete(id, function(err){
          if(err){
              console.log("Error in deleting the object in database");
              return;
          }
          return res.redirect('back');
     });
    });
app.listen(port , function(err){

    if(err){
        console.log("Error in running the server on : ", port);
        return;
    }
    console.log('server is up and running on port: ',port);
});
