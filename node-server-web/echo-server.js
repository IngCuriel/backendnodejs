//Ejemplo se crea server para que recibe un metodo post obtener en texto plano la fecha de tu cumpleaños
// con el formato 1993/05/08 y regresa el dia de la semaña

//Para crear un servidor se requiere el modulo http que es un modulo nativo de nodejs
// este modulo nos permite crear un servidor mediante el método createServer
const http = require('http');
const server = http.createServer();
//nuestro servidor trabajar bajo eventos
// - req: lo que llega al server
// - res:lo que response el serve
server.on('request', (req, res)=>{
    //exigimos que el request method sea de tipo POST y el url se /diacumpleanos
    // de lo contrario respodemos un 404
    if( req.method === "POST" && req.url==="/diacumpleanos") {

        // creamos una variable para almacenar el body request
        let body = [];
        //mediante el evento data del request ejecutamos el push de datos 
        req.on('data',chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            //cuando se termine de ejecutar nuestro evento data ejecutamos end
           res.writeHead(200, {'Content-Type':'text/plain'});
           //formato que recibe 1993/05/04
           body = Buffer.concat(body).toString();
           const date = new Date(body);
           // se obtener el dia de la semana con getDay
           //ejecutar res  end para responder al cliente            
           res.end(getDiaSemana(date.getDay()));
        })
    } else  {
        res.statusCode =404;
        res.end();
    }

})
const getDiaSemana =  (dia) => {
    const dias = ['Domingo','Lunes','Martes',' Miercoles','Jueves','Viernes','Sabado']
    return dias[dia];
}
// el servidor va escuchar en el puerto 8000 o lo que quieras
server.listen(8000);
console.log('Servidor en le url http://localhost:8000')
