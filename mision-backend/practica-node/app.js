const http = require('http'); // Cargando un modulo de Node.js
const url = require('url'); //modulo de nodejs
//console.log(http);

const rd =  require('./modules/retrievedate') //cargamos un modulo propio que esta en  esa direccion 

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
   //res.write("La fecha y hora es: "+ rd.RetrieveDate());
    const query = url.parse(req.url, true).query;
    const text = query.year + " " + query.month;
    res.write(req.url);
    //res.end("Holaaa Mundo!!")
    res.end(text);
}).listen(8080);