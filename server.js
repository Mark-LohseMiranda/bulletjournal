const express = require('express');
const sequelize = require("./config/connection.js")
const session = require("express-session");
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { createServer } = require("https");
const fs = require("fs");

const https_options = {
    ca: fs.readFileSync("ca_bundle.crt"),
    key: fs.readFileSync("private.key"),
    cert: fs.readFileSync("certificate.crt"),
  };

const app = express();
const https = createServer(https_options, app);
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({
    helpers:{
        exists: function (item) {return item.length != 0},
        empty: function(item){return item!==""},
        used: function (item) {return item.length > 1}
    }
});

const {Braindump, Goal, Note, Post_it, Schedule, Todo, Inspiration, User, List} = require('./models');
const routes = require("./controllers");

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static("public"));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 1000 * 60 * 60 * 2
     },
     store: new SequelizeStore({
        db:sequelize
     })
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

sequelize.sync({ force: false }).then(function() {
    https.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});