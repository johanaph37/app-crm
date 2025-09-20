import {expresiones} from './expresiones.js'

/*let inputs = document.querySelectorAll("formulario_entrada")
imputs.map((input)=> {
    console.log(input)})
*/

//inputs.map(funtion(){})

let inputs = document.getElementsByClassName("formulario__entrada")
let arregloInputs = [...inputs]
arregloInputs.map((input)=>{
input.addEventListener("keyup", (e)=>{
    console.log(e)
    switch (e.target.id) {
        case "nombre":
            if(expresiones.texto.test(e.target.value)){
                e.target.style.borderColor = "green"
                //e.target.style.color = "green"

            }else{
               document.getElementById("nombre").style.borderColor = "red"
            }
            break;
        case "apellido":
        if(expresiones.texto.test(e.target.value)){
            e.target.classList.add("correcto")
            e.target.classList.remove("incorrecto")
        }else{
            e.target.classList.add("incorrecto")
            e.target.classList.remove("correcto")
        }
        break;
    
    case "documento":
        if(expresiones.numero.test(e.target.value)){
            e.target.classList.add("correcto")
            e.target.classList.remove("incorrecto")
        }else{
            e.target.classList.add("incorrecto")
            e.target.classList.remove("correcto")
        }
        break;
    }


})

})

// ... expres opereitor: convierte a un elemnto iterable o que se puede contar
