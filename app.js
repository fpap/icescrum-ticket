/**
 * Module dependencies
 */

var express = require('express'), 
http = require('http'), 
path = require('path'), 
icescrum = require('icescrum');

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 8000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret: 'icescrum'}));
app.use(express.static(path.join(__dirname, 'app')));

// Login
app.post('/login', function(req, res) {
    console.log("user: ", req.body.user);
    if (!req.session || !req.session.user) {
        req.session.user = req.body.user;
        req.session.password = req.body.password;
        console.log(JSON.stringify(req.session));
        res.send({
            name : "Fernando Pap",
            role : "developer"
        });
    } else {
        res.send(req.session);
    }
});

// Create ticket
app.post('/newTicket', function(req, res) {
    console.log("user: ", req.body.name);
    if (true) {
        res.send({
            name : req.body.name,
            description : req.body.description
        });
    } else {
        res.send({error: "Ticket no creado"});
    }
});

app.post('/sdfsdf', function(req, res) {
    console.log("user: ", req.body.user);
    if (!req.session || !req.session.user) {
        req.session.user = req.body.user;
        req.session.password = req.body.password;
        console.log(JSON.stringify(req.session));
        res.send({
            name : "Fernando Pap",
            role : "developer"
        });
    } else {
        res.send(req.session);
    }
});

/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});