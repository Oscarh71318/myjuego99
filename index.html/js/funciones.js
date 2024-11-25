const d = document;

let imgN1 =[
{nombre:"abeja", url: "imagenes/abeja.jpg"},
{nombre:"caballo", url: "imagenes/caballo.jpg"},
{nombre:"cisne", url: "imagenes/cisne.jpg"},
{nombre:"gato", url: "imagenes/gato.jpg"},
{nombre:"leopardo", url: "imagenes/leopardo.jpg"},
{nombre:"pajaro", url: "imagenes/pajaro.jpg"},
{nombre:"abeja", url: "imagenes/abeja.jpg"},
{nombre:"caballo", url: "imagenes/caballo.jpg"},
{nombre:"cisne", url: "imagenes/cisne.jpg"},
{nombre:"gato", url: "imagenes/gato.jpg"},
{nombre:"leopardo", url: "imagenes/leopardo.jpg"},
{nombre:"pajaro", url: "imagenes/pajaro.jpg"},

];
let imgN2 =[
    {nombre:"lobosBlancos", url: "imagenes/lobosBlancos.jpg"},
    {nombre:"guacamayas", url: "imagenes/guacamayas.jpg"},
    {nombre:"abeja", url: "imagenes/abeja.jpg"},
    {nombre:"cebras", url: "imagenes/cebras.jpg"},
    {nombre:"cisne", url: "imagenes/cisne.jpg"},
    {nombre:"gato", url: "imagenes/gato.jpg"},
    {nombre:"leopardo", url: "imagenes/leopardo.jpg"},
    {nombre:"pajaro", url: "imagenes/pajaro.jpg"},
    {nombre:"lobosBlancos", url: "imagenes/lobosBlancos.jpg"},
    {nombre:"guacamayas", url: "imagenes/guacamayas.jpg"},
    {nombre:"abeja", url: "imagenes/abeja.jpg"},
    {nombre:"cebras", url: "imagenes/cebras.jpg"},
    {nombre:"cisne", url: "imagenes/cisne.jpg"},
    {nombre:"gato", url: "imagenes/gato.jpg"},
    {nombre:"leopardo", url: "imagenes/leopardo.jpg"},
    {nombre:"pajaro", url: "imagenes/pajaro.jpg"},
    
    ];
    let imgN3 =[
        {nombre:"delfines", url: "imagenes/delfines.jpg"},
        {nombre:"pinguinos", url: "imagenes/pinguinos.jpg"},
        {nombre:"lobosBlancos", url: "imagenes/lobosBlancos.jpg"},
        {nombre:"guacamayas", url: "imagenes/guacamayas.jpg"},
        {nombre:"abeja", url: "imagenes/abeja.jpg"},
        {nombre:"caballo", url: "imagenes/caballo.jpg"},
        {nombre:"cebras", url: "imagenes/cebras.jpg"},
        {nombre:"cisne", url: "imagenes/cisne.jpg"},
        {nombre:"gato", url: "imagenes/gato.jpg"},
        {nombre:"pajaro", url: "imagenes/pajaro.jpg"},
        {nombre:"lobosBlancos", url: "imagenes/lobosBlancos.jpg"},
        {nombre:"guacamayas", url: "imagenes/guacamayas.jpg"},
        {nombre:"abeja", url: "imagenes/abeja.jpg"},
        {nombre:"caballo", url: "imagenes/caballo.jpg"},
        {nombre:"cebras", url: "imagenes/cebras.jpg"},
        {nombre:"cisne", url: "imagenes/cisne.jpg"},
        {nombre:"gato", url: "imagenes/gato.jpg"},
        {nombre:"pajaro", url: "imagenes/pajaro.jpg"},
        {nombre:"delfines", url: "imagenes/delfines.jpg"},
        {nombre:"pinguinos", url: "imagenes/pinguinos.jpg"},
        ];
let tablero = d.querySelector(".tablero")
let nombreImagen =[]
let posImg =[]
 let tiempotrancurrido
let aciertos =0
let totalintentos=0
let totaltiempo =0
let tiemposobrante=0
let intentos =0
let tiempo =60
let nivel =1
mostrarnivel= d.querySelector(".nivel")
let mostrarintentos = d.querySelector(".intentos")
let mostraraciertos = d.querySelector(".aciertos")
let mostrartiempo = d.querySelector(".tiempo")
let btn_iniciar = d.querySelector(".btn-iniciar")
let imagennivel 
let estoyjugando = false
let sonidoSelecionar= new Audio("./sonidos/sonido4.mp3")
let sonidoadivinar= new Audio("./sonidos/sonido1.mp3")
let sonidofallar= new Audio("./sonidos/sonido5.mp3")
let sonidopeder= new Audio("./sonidos/sonido3.mp3")
let sonidoganar= new Audio("./sonidos/sonido2.mp3")
let sonidoacoso= new Audio("./sonidos/sonido6.mp3")
let mostrarJugador = d.querySelector(".jugador")
let tabla = d.querySelector(".records tbody")
let fondobody = d.querySelector("body")
//setTimeout() //se ejecuta una vez cuando pasa determinado tiempo


d.addEventListener("DOMContentLoaded", ()=>{
fondobody.classList.add("fondo1")
    mostrardatos()
})

// agregar boton para iniciar el juego 

btn_iniciar.addEventListener("click",function () {
    //alert("juego iniciado")
    //controlar el tiempo del juego
     // comprobar que el juego este activo 
     
     if( estoyjugando==false && nivel ==1){
        ventanamodal() 
        
        }else if (estoyjugando==false && nivel ==2){
            estoyjugando=true
            nivel2()
        }
        else if (estoyjugando==false && nivel ==3){
            estoyjugando=true
            nivel3()
        }
        
    })
    

     
   

//setInterval() // se ejecuta en determinado tiempo indefinitamente




// tablero de juegos 

// poner imagenes aleatorias


// funcion para agragar imagenes al juego
function agregarimagenes() {
//
if(nivel==1){
//agregar imagenes dependiendo el nivel
imagennivel = imgN1
}else if (nivel==2){
imagennivel = imgN2
    
}else if (nivel==3){
    imagennivel = imgN3
        
    }

//colocar imagenes aleatorias 
imagennivel.sort(()=> Math.random() - 0.5)

    //recorrer con un forch las imagenes del arreglo 

    imagennivel.forEach((img, i)=>{
let div = d.createElement("div")
div.className = "col-3"
let imagen = d.createElement("img")
imagen.className= "img-fluid"
imagen.src = "imagenes/mariposa.jpg"
imagen.id =i

imagen.addEventListener("click" , mostrarImagenes)
div.appendChild(imagen)
tablero.appendChild(div)


    })
}
//funcion para mostrar imagenes ocultas
function mostrarImagenes() {
    sonidoSelecionar.play()
let imagenID = this.getAttribute("id")
//mostrar imagen 
this.src = imagennivel[imagenID].url
nombreImagen.push(imagennivel[imagenID].nombre)
 posImg.push(imagenID)
// alert("id de la imagen "+ imagenID)
//validar si se muestra 2 imagenes 

if(nombreImagen.length == 2){
   setTimeout(compararImagenes , 200)
    // compararImagenes()
}
}//funcion para comparar las imagenes 
function compararImagenes() {
let imagenestablero = document.querySelectorAll(".tablero .col-3 img")


    if(nombreImagen[0]  == nombreImagen[1]){
        if (posImg[0]!= posImg[1]){
            //alert( "felicitaciones adivinaste  una imagen ")
            sonidoadivinar.play()
imagenestablero[posImg[0] ].src = "imagenes/icono.jpg"
imagenestablero[posImg[1] ].src = "imagenes/icono.jpg"
imagenestablero[posImg[0]].removeEventListener("click", mostrarImagenes)
imagenestablero[posImg[1]].removeEventListener("click", mostrarImagenes)
aciertos++
mostraraciertos.textContent= aciertos


        }else{
      ////  alert("debes seleccionar otra imagen ")
      sonidofallar.play()
imagenestablero[posImg[0] ].src = "imagenes/mariposa.jpg"
intentos++
mostrarintentos.textContent = intentos
        }
    }else{
//alert("sigue intentando : ")
imagenestablero[posImg[0] ].src = "imagenes/mariposa.jpg"
imagenestablero[posImg[1] ].src = "imagenes/mariposa.jpg"
intentos++
mostrarintentos.textContent = intentos

    }

    // reiniciar las variables 
    nombreImagen = []
    posImg =  []
// comprobar  si adivino todas las imagenes 
if ( nivel ==1  && aciertos == 6 ){
    alert("🎇🎆🎆!!!!!Felicitaciones pasaste al siguiente nivel 👍👍👍!!!! ")
    fondobody.classList.replace("fondo1" ,"fondo2")
    //recargar la pagina 
   // location.reload()
   totalintentos += intentos
   totaltiempo += tiempo
   tiemposobrante += (60 - tiempo)
   obtenerdatos()
   sonidoganar.play()
   nivel++
   mostrarnivel.textContent = nivel
intentos =0
mostrarintentos.textContent = intentos
aciertos=0
mostraraciertos.textContent = aciertos
clearInterval(tiempotrancurrido)
tiempo = 60
mostrartiempo.textContent= tiempo
estoyjugando=false
quitarImg()
} else if(nivel == 2 && aciertos == 8){
    alert("🎇🎆🎆!!!!!Felicitaciones pasaste al siguiente nivel 👍👍👍!!!! ")
    fondobody.classList.replace("fondo2" ,"fondo3")
    sonidoganar.play()
    nivel++
    mostrarnivel.textContent = nivel
 intentos =0
 
 mostrarintentos.textContent = intentos
 aciertos=0
 mostraraciertos.textContent = aciertos
 clearInterval(tiempotrancurrido)
 tiempo = 50
 mostrartiempo.textContent= tiempo
 estoyjugando=false
 quitarImg()
}else if ( nivel==3 && aciertos==10){

    alert("🎇🎆🎆!!!!!Felicitaciones ganaste El juego eres el mejor  😁😁😁🤗🤗👍👍👍!!!! ")
    sonidoganar.play()
    location.reload()
}


}  

function nivel1(params) {
    agregarimagenes() 
    mostrarnivel.textContent = nivel
    timepoDejuego()
}
function nivel2(params) {
    agregarimagenes() 
    timepoDejuego()
}
function nivel3(params) {
    agregarimagenes() 
    timepoDejuego()
}


function timepoDejuego() {
    tiempotrancurrido = setInterval(()=>{
        tiempo--
        mostrartiempo.textContent = tiempo
        if(tiempo == 10){
            alert("rapido el tiempo se esta agotando🤦")
//sonido acosar
            sonidoacoso.play()
            mostrartiempo.style.color = "red"
            mostrartiempo.style.fontSize="50px"
        }else if(tiempo == 0){
        
            alert(" !!!!  el tiempo se agoto🤣  !!!!")
            sonidopeder.play()
            clearInterval(tiempotrancurrido)
            setTimeout(()=>{
                location.reload()
            },3000)
            
        }
        }, 1000)
}
    function quitarImg() {
        

        let imagenquitar = d.querySelectorAll(".tablero div")
        imagenquitar.forEach((img)=>{
        img.remove()


        })
    }
    //mostrar venana modal 
    function ventanamodal() {
        let cerrarmodal = d.querySelectorAll(".cerrar")
        let imputJugador = d.querySelector(".nombre-jugador")
        let mostrarModal = d.querySelector("#exampleModal")
        let btnjugador = d.querySelector(".registrar-jugador")

        cerrarmodal.forEach((btn)=>{
btn.addEventListener("click",()=> {

    mostrarModal.classList.remove("show")
    mostrarModal.style.display= "none"
})


        })
        //mostrar ventana modal 
           mostrarModal.classList.add("show")
           mostrarModal.style.display = "block"
          btnjugador.addEventListener("click", ()=>{
            //mostrar nombre en el tablero
            mostrarJugador.textContent=imputJugador.value
            //cerrar modal 
          mostrarModal.classList.remove("show")
           mostrarModal.style.display= "none"
           //iniciar nivel uno 
           estoyjugando=true
           nivel1() 
          })
    }
    



