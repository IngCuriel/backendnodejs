//**EventEmmiter** para hacer mejor codigo **asyncrono** a diferencia de usar **Callback** ó **Promise*
const EventEmmiter = require('events');

class Logger extends EventEmmiter {
    execute(cb) {
        console.log('before');
        this.emit("iniciar");
        cb();
        this.emit('final')
        console.log('After')
    }
}
 
const logger = new Logger();
logger.on("iniciar",()=>console.log("Starting"));
logger.on("final",()=>console.log("Finishing"));
logger.on("iniciar",()=>console.log("Finishing"));
logger.execute(()=> console.log('Hola mundo'));