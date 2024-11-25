
//variales glovales 
let nombrejugador = d.querySelector(".jugador")
let listajugadores = "jugadores"

//funcion para obtener los datos 
function obtenerdatos() {
     //crear objeto para los datos del jugador  
   let datosJugador = {
"nombre":nombrejugador.textContent,
"intentos":totalintentos,
"tiempototal" :totaltiempo,
"tiemposobrante" :tiemposobrante
   }
    //mostrar datos en consola 
   console.log(datosJugador)
   //pasar los datos del jugador
   guardardatos(datosJugador)

}
// funcion para guadar los datos en localsrorage 
function guardardatos(datos) {
        // arreglo para los datos antiguos y nuevos
        let jugadores=  []
      // tomar los datos previamente guardados
      let  datosprevios = JSON.parse (localStorage.getItem(listajugadores))
 if (datosprevios!= null){
 jugadores= datosprevios

 }
//guardar los nuevos jugadores en el arreglo
jugadores.push(datos)
//guardar todo slos datos en localstorage 
localStorage.setItem(listajugadores,JSON.stringify(jugadores))

}
function mostrardatos() {
    let jugadores=  []
    // tomar los datos previamente guardados
    let  datosprevios = JSON.parse (localStorage.getItem(listajugadores))
if (datosprevios!= null){
jugadores= datosprevios
}



//organizar los jugadores
jugadores.sort((a,b)=>{
if(a.tiempototal < b.tiempototal ){
return -1

}
if(a.intentos < b.intentos){
return 1

}


})


    //mostrar datos en la tabla 

    jugadores.forEach((jugador, i) => {
       // crear fila 
       let fila = d.createElement("tr")
       fila.innerHTML= `
       <td>${i+1} </td>
       <td>${jugador.nombre}</td>
       <td>${jugador.tiempototal}</td>
       <td>${jugador.intentos}</td>
       <td>${jugador.tiemposobrante}</td>
       `
       tabla.appendChild(fila)
    }); 
}