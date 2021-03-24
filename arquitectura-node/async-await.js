// Es un manera de escribir codigo asincrono que se vea asincrono
// Lo que requiere async-await es que una funcion devuelva una promesa;
const promiseFuncion = ()=> new Promise((resolver,reject)=>{
    setTimeout(()=>{
        if(Math.random()<0.5) {
            return resolver('promesa correcto')
        } else {
            return reject(new Error('Error promesa'))
        }
     }, 2000)
})

async function asyncawait() {
    try {
        const msg = await promiseFuncion();
        console.log('mensaje', msg);
    } catch (error) {
        console.log('error', error)
    }
}
asyncawait();