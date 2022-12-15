const http = require('http'); // Cargando un modulo de Node.js
//console.log(http);
const rd =  require('modules/retrievedate')
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("La fecha y hora es: "+ rd.RetrieveDate)
    res.end("Holaaa Mundo!!")
}).listen(8080);