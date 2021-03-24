
//callback
const asynCallback = function(cb) {
    // el setTimeout recibe como primer parametro la funcion a ejecutar y como segundo el tiempo de ejecución
    setTimeout(()=>{
       if(Math.random()<0.5) {
           return cb(null,'callback correcto')
       } else {
           return cb(new Error('Error callback'))
       }
    }, 2000)
}

asynCallback((error,msg)=> {
  if (error)
   {
    console.log('Error', error);
   } else {
    console.log("Mensaje", msg)
   }
})