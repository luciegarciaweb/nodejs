/*console.log('salut!');*/

//call Node.js library -> http (require allows to include any libraries)
var http = require('http');

var url = require('url');

var querystring = require('querystring');

httpServer = http.createServer(function(req, res) {
    //var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);

    res.writeHead(200, {"Content-Type": "text/plain"});

    if ('prenom' in params && 'nom' in params) {

        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);

    }

    else {

        res.write('Vous devez bien avoir un prénom et un nom, non ?');

    }

     res.end();
});

//create httpServer
/*httpServer = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+

'<html>'+

'    <head>'+

'        <meta charset="utf-8" />'+

'        <title>Ma page Node.js !</title>'+

'    </head>'+ 

'    <body>'+

'       <p>Voici un paragraphe <strong>HTML</strong> !</p>'+

'    </body>'+

'</html>');

    res.end();
});*/

//On PORT:
httpServer.listen(1337);

//load socket.io and link to httpServer
//var io = require('socket.io').listen(httpServer);