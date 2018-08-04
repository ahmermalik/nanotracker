var express = require('express');
var app = express();
var body_parser = require('body-parser');
var pgp = require('pg-promise')({});
var db = pgp({database: 'nano_wallet'});



/** sets the template engine to handle bars**/
app.set('view engine', 'hbs');

/** sets the public directory as public. (for images and such)**/
app.use('/public', express.static('public'));
app.use(body_parser.urlencoded({extended: false}));





app.get("/", function (request, response, next) {
    let query = ""
    response.render('home.hbs');
});

app.post("/add", function (request, response, next) {
    var wallet_address =  request.body.public_address;
    var columns = {
        wallet_address: wallet_address
    }
    let query = `INSERT INTO wallets(wallet_address) VALUES ('${wallet_address}')`;


    db.any(query, columns)
        .then(function (results) {
            response.render('home.hbs', {});
        })
        .catch(next);
});

app.get("/trending", function (request, response, next) {
    let query = ""
    response.render('trending.hbs');
});

app.get("/trending", function (request, response, next) {
    let query = ""
    response.render('trending.hbs');
});

app.get("/contact", function (request, response, next) {
    let query = ""
    response.render('contact.hbs');
});

app.get("/disclaimer", function (request, response, next) {
    let query = ""
    response.render('disclaimer.hbs');
});

app.get("/socialmedia", function (request, response, next) {
    let query = ""
    response.render('socialmedia.hbs');
});

app.get("/email", function (request, response, next) {
    let query = ""
    response.render('email.hbs');
});


/** this will render a response based on your url query: localhost:8000/cats will render "Meow meow meow" from your cat.hbs file **/
/** express gives 3 arguments for each 'view'/'handler' **/
app.get("/todos", function (request, response, next) {
    let query = "SELECT * FROM task";
    db.any(query)                                   //your webpage will crash unless .any(0 or more)  .many(1 or more)  .none (has to have 0) .one (has to have one) tasks in the database when the server requests data.
        .then(function(todolist){                   // db.any(query, [queryone, query.two, query.two, query.three])
            response.render('todos.hbs', {todolist: todolist});
        })

        .catch(next);
});



app.post('/todos/add', function (request, response, next) {
    // insert query
    var description = request.body.task //grabs the form named 'task' from todos.hbs
    let update = "INSERT INTO task VALUES(default, $1, false)";  //inserts value into task table in the todo_database
    db.none(update, description)
        .then(function(){
            response.redirect('/todos'); //redirects to todos page.
        })
        .catch(next);  //find out what this does. error catch for promise?

});

app.post('/todos/delete/:id', function (request, response, next) {
    // insert query
    var id = request.params.id;
    let update = "DELETE FROM task WHERE id = $1;"  //inserts value into task table in the todo_database
    db.none(update, id)
        .then(function(){
            response.redirect('/todos'); //redirects to todos page.
        })
        .catch(next);  // it passes it on to the next event. You can also catch an error.

});

app.listen(8000, function () {
    console.log('Listening on port 8000');
});




// sequelize model:generate --name user --attributes f_name:string,l_name:string,email:string
//
// sequelize model:generate --name wallet --attributes wallet_address:string
