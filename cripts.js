document.addEventListener("DOMContentLoaded", function () {


    let rojo = document.getElementById("rojo")
    let amarillo = document.getElementById("amarillo")
    let verde = document.getElementById("verde")
    let boton= document.getElementById("boton")
    let parar = document.getElementById("parar")
    let cambioColor= document.getElementById("cambioColor")
    let color = document.getElementById("color")


    // rojo.addEventListener("click",() => {
    //     rojo.classList.toggle("brillo")
    //     amarillo.classList.remove("brillo")
    //     verde.classList.remove("brillo")


    //  })
    //  amarillo.addEventListener("click",() => {
    //      amarillo.classList.toggle("brillo")
    //      rojo.classList.remove("brillo")
    //      verde.classList.remove("brillo")

    //  })
    //  verde.addEventListener("click",() => {
    //     verde.classList.toggle("brillo")
    //     amarillo.classList.remove("brillo")
    //     rojo.classList.remove("brillo")

    //  })




    // setInterval(() => {

    //     setTimeout(() => {
    //         rojo.classList.toggle("brillo")
    //         amarillo.classList.remove("brillo")
    //         verde.classList.remove("brillo")

    //     }, 5000)
    //     setTimeout(() => {
    //         amarillo.classList.toggle("brillo")
    //         rojo.classList.remove("brillo")
    //         verde.classList.remove("brillo")

    //     }, 10000)


    //     setTimeout(() => {

    //         verde.classList.toggle("brillo")
    //         amarillo.classList.remove("brillo")
    //         rojo.classList.remove("brillo")

    //     }, 15000)



    // }, 15000) // debe ser un numero mayor



    function intervalo() {     //const intervalo = () =>{}
        
       
            verde.classList.toggle("brillo")


        setInterval(() => {


            setTimeout(() => {
                rojo.classList.toggle("brillo")
                amarillo.classList.remove("brillo")
                verde.classList.remove("brillo")
    
            },0)
            setTimeout(() => {
                amarillo.classList.toggle("brillo")
                rojo.classList.remove("brillo")
                verde.classList.remove("brillo")
    
            }, 2000)
    
    
            setTimeout(() => {
    
                verde.classList.toggle("brillo")
                amarillo.classList.remove("brillo")
                rojo.classList.remove("brillo")
    
            }, 4000)
    
    
    
        }, 4000) // debe ser un numero mayor
   
  }
//   function stop() {
//     verde.classList.remove("brillo")
//     amarillo.classList.remove("brillo")
//     rojo.classList.remove("brillo")
    
//   }



boton.addEventListener("click",intervalo)
// parar.addEventListener("click",stop)
 

cambioColor.addEventListener("click",() =>{


    rojo.style.backgroundColor= "pink"
    verde.style.backgroundColor= "blue"
    amarillo.style.backgroundColor= "violet"
})

color.addEventListener("click",() =>{


    rojo.style.backgroundColor= "red"
    verde.style.backgroundColor= "green"
    amarillo.style.backgroundColor= "yellow"
})


































})