const textArea = document.querySelector(".text-area-mensaje");
const  mensaje = document.querySelector(".textarea-desencriptar");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat
*/


function encriptar(stringEncriptado){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i<matrizcodigo.length; i++){
        if(stringEncriptado.includes(matrizcodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])            
        }
        
    }
    return stringEncriptado
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; 
}


function desencriptar(stringDesencriptado){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i<matrizcodigo.length; i++){
        if(stringDesencriptado.includes(matrizcodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])            
        }
        
    }
    return stringDesencriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";    
}

function copiar(){
    let texto = document.querySelector(".textarea-desencriptar");
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
    texto.value="";
    texto.backgroundImage("/")
}


/*PRUEBA VERIFICAR */



// Inicio de la función validar
function validar() {
    // Variable que usaremos para determinar si el input es valido
    let isValid = false;

    // El input que queremos validar
    const input = document.forms['validationForm']['letras'];

    //Mensaje de advertencia:
  
    const message = document.getElementById('message');
  

    input.willValidate = false;

    // El tamaño maximo para nuestra text area
    const maximo = 300;

    // Expresión regular que solo acepta letras minúsculas y sin acentos ni caracteres especiales
    const pattern = new RegExp('^[ a-z ]+$', 'i');

    // Primera validacion, si mi textarea esta vacio entonces no es valido
    if(!input.value) {
      isValid = false;
    } else {
      // Segunda validacion, si input es mayor que 300
      if(input.value.length > maximo) {
        isValid = false;
      } else {
        // Tercera validacion, si el textarea contiene caracteres diferentes a los permitidos
        if(!pattern.test(input.value)){ 
          isValid = false;
        } else {
          // Si pasamos todas la validaciones anteriores, entonces el textArea es valido
          isValid = true;
        }
      }
    }

    //Colorear el contorno del textArea
    if(!isValid) {
      // rojo: ERROR
      input.style.borderColor = 'red'; 
      // mostramos mensaje
      message.hidden = false;
    } else {
      // verde: Es valido
      input.style.borderColor = 'green'; 
      // ocultamos mensaje;
      message.hidden = true;
    }
    // devolvemos el valor de isValid
    return isValid;
  }

  // Verificamos que todo este correcto
  function verificar() {
    const valido = validar();
    if (!valido) {                
      alert('Ingresa solo letras minúsculas y sin acentos');
    } else {      
      return btnEncriptar();
    }
  }



