let clave;
let intentos = 0;
const MAX_INTENTOS = 5;


do{
    clave = prompt('ingresa la contraseña');
    intentos ++;

    if(clave === 'primeraentrega'){
        console.log("contraseña correcta")
        break;
    }

    if(intentos >= MAX_INTENTOS){
        console.log("Tu limite de intentos para ingresar se acabó, porfavor intente de nuevo mas tarde.")
        break;
    }


}while(true);

const NUM1 = parseFloat(prompt("ingrese un monto en pesos argentinos"));
const CONVERSION = prompt("ingrese la moneda que quiera convertir (Dolar Euro Real Uruguayo Chileno)")


let resultado;

switch(CONVERSION){
    case "Dolar":
        resultado = NUM1 * 1200;
        break;
    case "Euro":
        resultado = NUM1 * 1350;
        break;
    case "Real":
        resultado = NUM1 * 200;
        break; 
    case "Uruguayo":
        resultado = NUM1 * 30; 
        break;
    case "Chileno":
           resultado = NUM1 * 1.40; 
        break;
    default:
        alert("no estas ingresando una operacion valida")
    
}

alert("resultado es: " + resultado);
