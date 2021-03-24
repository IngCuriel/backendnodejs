//Para crear un ser5vidor se requiere el modulo http que es un modulo nativo de nodejs
// este modulo nos permite crear un servidor mediante el método createServer
const http = require('http');
const server = http.createServer();
//nuestro servidor trabajar bajo eventos
// - req: lo que llega al server
// - res:lo que response el serve
server.on('request', (req, res)=>{
    res.statusCode = 200;
    // tipo de respuesta de texto plano
    res.setHeader('Content-type', 'text/plain');

    //ejecutar res  end responder para responder al cliente
    res.end('hello wordl');
});
// el servidor va escuchar el en puerto 8000 o lo que quieras
server.listen(8000);
console.log('Servidor en le url http://localhost:8000')
