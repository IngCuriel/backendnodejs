// Las promesass reciben dos parametro en la funcion (resolver y reject)
   // - **resolver** que se encarga de resolver la promesa
   // - ** reject que se encargar de enviar un error en caso de que algo suceda. 
const promise = new Promise((resolver,reject)=>{
    setTimeout(()=>{
        if(Math.random()<0.5) {
            return resolver('promesa correcto')
        } else {
            return reject(new Error('Error promesa'))
        }
     }, 2000)
})

// lo interesante de las promesas es que se pueden emcadenar 
promise.then(msg=> msg.toUpperCase())
        .then(msg => console.log("mensaje",msg))
        .catch(error => console.log("error", error))

// El problema de los callback y las promesas esque se generan un codigo en cascada que es dificil de leer con el tiempo
